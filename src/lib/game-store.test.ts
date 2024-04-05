import { describe, expect, it } from 'vitest';
import { toTestString } from '$lib/logics/board-logic/base';
import { gameStore } from '$lib/game-store';
import { get } from 'svelte/store';
import type { PlayingState } from '$lib/models/game';

describe('GameStore', () => {
	describe('初期化', () => {
		it('9x9のゲームを作成', () => {
			gameStore.init({
				stageType: 'EASY',
				width: 9,
				height: 9,
				getMinePositions: () => [
					{ x: 1, y: 1 },
					{ x: 2, y: 2 },
					{ x: 3, y: 3 },
					{ x: 4, y: 4 },
					{ x: 5, y: 5 }
				],
				currentTime: 1700000000
			});
			const state = get(gameStore.state);
			expect(state.type).toEqual('PLAYING');
			const { board, ...game_ } = (state as PlayingState).game;
			expect(game_).toEqual({
				elapsedSeconds: 0,
				initialBombCount: 5,
				restBlankCount: 81 - 5,
				restBombCount: 5,
				stageType: 'EASY',
				currentTime: 1700000000
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
			gameStore.init({
				stageType: 'EASY',
				width: 4,
				height: 4,
				getMinePositions: (board) => [{ x: 1, y: 1 }],
				currentTime: 1700000000
			});
			gameStore.openCover({ x: 1, y: 1 });
			const state = get(gameStore.state);
			expect(state.type).toBe('GAME-OVER');
		});

		it('地雷を踏まない場合はマスを開いて続行', () => {
			gameStore.init({
				stageType: 'EASY',
				width: 4,
				height: 4,
				getMinePositions: (board) => [{ x: 1, y: 1 }],
				currentTime: 1700000000
			});
			gameStore.openCover({ x: 0, y: 0 });
			const state = get(gameStore.state);
			expect(state.type).toBe('PLAYING');
			const state_ = state as PlayingState;
			expect(state_.startTime).toBe(1700000000);
			const { board, ...game_ } = state_.game;
			expect(game_).toEqual({
				elapsedSeconds: 0,
				initialBombCount: 1,
				restBlankCount: 14,
				restBombCount: 1,
				currentTime: 1700000000,
				stageType: 'EASY'
			});
		});
	});
});