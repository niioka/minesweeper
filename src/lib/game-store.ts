import { writable } from 'svelte/store';
import type { CompleteState, GameData, GameState, InitGameOptions, PlayingState } from '$lib/models/game';
import * as B from '$lib/logics/board-logic';
import type { PositionData } from '$lib/models/position';
import { getRandomBombPositions } from '$lib/logics/game-logic';
import type { GridData } from '$lib/models/board';


export class GameStore {
	state = writable<GameState>({ type: 'SELECT-STAGE' });

	init(opts: InitGameOptions) {
		this.state.update(_ => ({
			type: 'PLAYING',
			startTime: undefined,
			game: initGame(opts)
		}));
	}


	openCover(
		{ x, y }: PositionData
	): void {
		this.state.update(state => {
			if (state.type !== 'PLAYING') {
				return state;
			}
			const game = state.game;
			const grid = B.gridAt(game.board, { x, y });
			// オープン済みの場合は何もしない
			if (!grid.isCovered) {
				return state;
			}
			// 地雷を踏んだ場合はゲームオーバー
			if (grid.type === 'MINE') {
				grid.displayType = 'MINE';
				return {
					type: 'GAME-OVER',
					q: 'SHOW-MINES',
					nextTime: game.currentTime + 400,
					game
				};
			}
			B.openGrid(game.board, grid);
			game.restBlankCount = B.countRestBlankCount(game.board);
			if (!state.startTime) {
				state.startTime = game.currentTime;
			}
			if (game.restBlankCount <= 0) {
				return completeGame(state);
			}
			return state;
		});
	}

	changeMark(grid: GridData) {
		this.state.update(state => {
			if (state.type === 'PLAYING') {
				const game = state.game;
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
			return state;
		});
	}

	tick(currentTime: number) {
		this.state.update(state => {
			if (state.type === 'SELECT-STAGE') {
				return state;
			}
			if (state.type === 'PLAYING') {
				if (state.startTime) {
					state.game.elapsedSeconds = Math.floor((currentTime - state.startTime) / 1000);
				}
			} else if (state.type === 'GAME-OVER') {
				const game = state.game;
				const board = game.board;
				if (state.q === 'SHOW-MINES') {
					if (currentTime >= state.nextTime) {
						const count = B.getNotOpenedBombCount(board);
						if (count > 0) {
							if (currentTime >= state.nextTime) {
								B.showNextBomb(board, 'BURST');
							}
							state.nextTime = currentTime + 100;
						} else {
							state.q = 'POPUP-PENDING';
							state.nextTime = currentTime + 1000;
						}
					}
				} else if (state.q === 'POPUP-PENDING') {
					if (currentTime >= state.nextTime) {
						state.q = 'POPUP-OPEN';
					}
				}
			} else if (state.type === 'COMPLETE') {
				const game = state.game;
				const board = game.board;
				if (state.q === 'SHOW-MINES') {
					if (currentTime >= state.nextTime) {
						const count = B.getNotOpenedBombCount(board);
						if (count > 0) {
							B.showNextBomb(game.board, 'CLEAR');
							state.nextTime = currentTime + 100;
						} else {
							state.q = 'POPUP-PENDING';
							state.nextTime = currentTime + 1000;
						}
					}
				} else if (state.q === 'POPUP-PENDING') {
					if (currentTime >= state.nextTime) {
						state.q = 'POPUP-OPEN';
						state.nextTime = currentTime + 1000;
					}
				}
			}
			state.game.currentTime = currentTime;
			return state;
		});
	}

	retry(currentTime: number) {
		this.state.update(state => {
			if (state.type === 'GAME-OVER' || state.type === 'COMPLETE') {
				return {
					type: 'PLAYING',
					startTime: undefined,
					game: initGame({
						stageType: state.game.stageType,
						width: state.game.board.width,
						height: state.game.board.height,
						getMinePositions: getRandomBombPositions(state.game.initialBombCount),
						currentTime
					})
				};
			}
			return state;
		});
	}

	backToMenu() {
		this.state.update(_ => ({ type: 'SELECT-STAGE' }));
	}

	giveUp() {
		this.state.update(state => {
			if (state.type === 'PLAYING') {
				const game = state.game;
				B.openBombsOnFailure(game.board);
				return {
					type: 'GAME-OVER',
					q: 'POPUP-OPEN',
					nextTime: 0,
					game
				};
			}
			return state;
		});

	}
}

function initGame({ width, height, getMinePositions, stageType, currentTime }: InitGameOptions): GameData {
	const board = B.createBoard({
		width,
		height,
		getBombPositions: getMinePositions
	});
	const bombCount = board.grids.filter(g => g.type === 'MINE').length;
	return {
		initialBombCount: bombCount,
		restBombCount: bombCount,
		restBlankCount: width * height - bombCount,
		elapsedSeconds: 0,
		board,
		stageType,
		currentTime
	};
}

function completeGame(state: PlayingState): CompleteState {
	const game = state.game;
	const bestTimeStr = window.localStorage.getItem('minesweeper.bestTime.' + game.stageType);
	let bestTime = bestTimeStr ? Number(bestTimeStr) : Number.MAX_SAFE_INTEGER;
	if (game.elapsedSeconds < bestTime) {
		bestTime = game.elapsedSeconds;
		window.localStorage.setItem('minesweeper.bestTime.' + game.stageType, '' + bestTime);
	}
	return {
		type: 'COMPLETE',
		q: 'SHOW-MINES',
		nextTime: game.currentTime + 400,
		bestTime,
		game: game
	};
}

export const gameStore = new GameStore();