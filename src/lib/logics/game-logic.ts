import type { GameData, InitGameOptions } from '$lib/models/game';
import type { BoardData, GridData } from '$lib/models/board';
import * as B from '$lib/logics/board-logic';
import type { PositionData } from '$lib/models/position';

export function initGame({ stageType, width, height, getMinePositions }: InitGameOptions): GameData {
	const board = B.createBoard({
		width,
		height,
		getBombPositions: getMinePositions
	});
	const bombCount = board.grids.filter(g => g.type === 'MINE').length;
	return {
		isGameOverPopupOpen: false,
		isCongratulationPopupOpen: false,
		startTime: 0,
		initialBombCount: bombCount,
		restBombCount: bombCount,
		restBlankCount: width * height - bombCount,
		elapsedSeconds: 0,
		status: 'READY',
		board,
		stageType,
		endTime: -1,
		bestTime: -1
	};
}

export function getRandomBombPositions(bombCount: number): (board: BoardData) => PositionData[] {
	return (board) => {
		const results: PositionData[] = [];
		const keys = new Set<string>();
		while (results.length < bombCount) {
			const x = Math.floor(Math.random() * board.width);
			const y = Math.floor(Math.random() * board.height);
			const key = `${x}|${y}`;
			if (keys.has(key)) {
				continue;
			}
			results.push({ x, y });
			keys.add(key);
		}
		return results;
	};
}

function getTime_(): number {
	return new Date().getTime();
}

export function openCover(
	game: GameData,
	{ x, y }: PositionData,
	{ getTime = getTime_ }: { getTime?: () => number } = {}
): void {
	const grid = B.gridAt(game.board, { x, y });
	// オープン済みの場合は何もしない
	if (!grid.isCovered) {
		return;
	}
	// 地雷を踏んだ場合はゲームオーバー
	if (grid.type === 'MINE') {
		gameOver(game);
		return;
	}
	B.openGrid(game.board, grid);
	game.restBlankCount = B.countRestBlankCount(game.board);
	let status = game.status;
	if (status === 'READY') {
		game.status = 'PLAYING';
		game.startTime = getTime();
	}
	if (game.restBlankCount <= 0) {
		completeGame(game);
		return;
	}
}

export function gameOver(game: GameData): void {
	game.status = 'GAMEOVER';
	B.openBombsOnFailure(game.board);
}

function completeGame(game: GameData): void {
	game.status = 'COMPLETE';
	game.endTime = Math.floor((getTime_() - game.startTime) / 1000);
	const bestTimeStr = window.localStorage.getItem('minesweeper.bestTime.stageType');
	let bestTime = bestTimeStr ? Number(bestTimeStr) : Number.MAX_SAFE_INTEGER;
	if (game.endTime < bestTime) {
		bestTime = game.endTime;
		window.localStorage.setItem('minesweeper.bestTime.' + game.stageType, '' + bestTime);
	}
	// open bombs
	B.showMinesOnSuccess(game.board);
	game.bestTime = bestTime;
}

export function changeMark(game: GameData, grid: GridData) {
	if (grid.displayType === 'COVERED') {
		grid.displayType = 'FLAG';
		game.restBombCount--;
	} else if (grid.displayType === 'FLAG') {
		grid.displayType = 'UNKNOWN';
		game.restBombCount++;
	} else if (grid.displayType === 'UNKNOWN') {
		grid.displayType = 'COVERED';
	}
}