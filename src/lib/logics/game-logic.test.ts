import { describe, expect, it } from 'vitest';
import { initGame, openCover } from '$lib/logics/game-logic';
import { toTestString } from '$lib/logics/board-logic/base';

describe('ゲーム関連ロジック', () => {
	describe('ゲームの初期化', () => {
		it('9x9のゲームを作成', () => {

			const game = initGame({
				stageType: 'EASY',
				width: 9,
				height: 9,
				getMinePositions: () => [
					{ x: 1, y: 1 },
					{ x: 2, y: 2 },
					{ x: 3, y: 3 },
					{ x: 4, y: 4 },
					{ x: 5, y: 5 }
				]
			});
			const { board, ...gameWithoutBoard } = game;
			expect(gameWithoutBoard).toEqual({
				bestTime: -1,
				elapsedSeconds: 0,
				endTime: -1,
				initialBombCount: 5,
				isCongratulationPopupOpen: false,
				isGameOverPopupOpen: false,
				restBlankCount: 81 - 5,
				restBombCount: 5,
				startTime: 0,
				status: 'READY',
				stageType: 'EASY'
			});
			expect(board.width).toBe(9);
			expect(board.height).toBe(9);
			expect(toTestString(board, { showNeighborCount: true })).toBe(
				'#_1 #_1 #_1 #_0 #_0 #_0 #_0 #_0 #_0\n' +
				'#_1 #x1 #_2 #_1 #_0 #_0 #_0 #_0 #_0\n' +
				'#_1 #_2 #x2 #_2 #_1 #_0 #_0 #_0 #_0\n' +
				'#_0 #_1 #_2 #x2 #_2 #_1 #_0 #_0 #_0\n' +
				'#_0 #_0 #_1 #_2 #x2 #_2 #_1 #_0 #_0\n' +
				'#_0 #_0 #_0 #_1 #_2 #x1 #_1 #_0 #_0\n' +
				'#_0 #_0 #_0 #_0 #_1 #_1 #_1 #_0 #_0\n' +
				'#_0 #_0 #_0 #_0 #_0 #_0 #_0 #_0 #_0\n' +
				'#_0 #_0 #_0 #_0 #_0 #_0 #_0 #_0 #_0\n'
			);
		});
	});

	describe('セルを開く', () => {
		it('地雷を踏んだ場合はゲームオーバー', () => {
			const game = initGame({ stageType: 'EASY', width: 4, height: 4, getMinePositions: (board) => [{ x: 1, y: 1 }] });
			openCover(game, { x: 1, y: 1 });
			expect(game.status).toBe('GAMEOVER');
		});

		it('地雷を踏まない場合はマスを開いて続行', () => {
			const game = initGame({ stageType: 'EASY', width: 4, height: 4, getMinePositions: (board) => [{ x: 1, y: 1 }] });
			openCover(game, { x: 0, y: 0 }, { getTime: () => 1700000000 });
			const { board, ...game_ } = game;
			expect(game_).toEqual({
				bestTime: -1,
				elapsedSeconds: 0,
				endTime: -1,
				initialBombCount: 1,
				isCongratulationPopupOpen: false,
				isGameOverPopupOpen: false,
				restBlankCount: 14,
				restBombCount: 1,
				startTime: 1700000000,
				status: 'PLAYING',
				stageType: 'EASY'
			});
		});
	});
});