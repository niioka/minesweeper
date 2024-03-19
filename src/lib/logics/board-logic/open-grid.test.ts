import { describe, expect, it } from 'vitest';
import { openGrid } from '$lib/logics/board-logic/open-grid';
import { createBoard } from '$lib/logics/board-logic/create-board';
import { gridAt, toTestString } from '$lib/logics/board-logic/base';

describe('マスを開く', () => {
	it('地雷と隣接しているマスを開く', () => {
		const board = createBoard({
			width: 4,
			height: 4,
			getBombPositions: () => [{ x: 1, y: 1 }]
		});
		openGrid(board, gridAt(board, { x: 0, y: 0 }));
		expect(toTestString(board, { showNeighborCount: true })).toBe('__1 #_1 #_1 #_0\n'
			+ '#_1 #x0 #_1 #_0\n'
			+ '#_1 #_1 #_1 #_0\n'
			+ '#_0 #_0 #_0 #_0\n');
	});

	it('地雷と隣接していないマスを開く(1)', () => {
		const board = createBoard({
			width: 4,
			height: 4,
			getBombPositions: () => [{ x: 1, y: 1 }]
		});
		openGrid(board, gridAt(board, { x: 3, y: 3 }));
		expect(toTestString(board, { showNeighborCount: true })).toBe('#_1 #_1 __1 __0\n'
			+ '#_1 #x0 __1 __0\n'
			+ '__1 __1 __1 __0\n'
			+ '__0 __0 __0 __0\n');
	});

	it('地雷と隣接していないマスを開く(2)', () => {
		const board = createBoard({
			width: 4,
			height: 4,
			getBombPositions: () => [{ x: 1, y: 1 }]
		});
		openGrid(board, gridAt(board, { x: 3, y: 0 }));
		expect(toTestString(board, { showNeighborCount: true })).toBe('#_1 #_1 __1 __0\n'
			+ '#_1 #x0 __1 __0\n'
			+ '__1 __1 __1 __0\n'
			+ '__0 __0 __0 __0\n');
	});
});