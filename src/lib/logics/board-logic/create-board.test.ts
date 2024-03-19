import { describe, expect, it } from 'vitest';
import { createBoard } from '$lib/logics/board-logic/create-board';
import { toTestString } from '$lib/logics/board-logic/base';

describe('ボードの作成', () => {
	it('4x4のボードを作成する', () => {
		const board = createBoard({
			width: 4,
			height: 4,
			getBombPositions: () => [{ x: 1, y: 1 }, { x: 2, y: 2 }]
		});
		expect(toTestString(board, { showNeighborCount: true })).toBe('#_1 #_1 #_1 #_0\n'
			+ '#_1 #x1 #_2 #_1\n'
			+ '#_1 #_2 #x1 #_1\n'
			+ '#_0 #_1 #_1 #_1\n');
	});
});