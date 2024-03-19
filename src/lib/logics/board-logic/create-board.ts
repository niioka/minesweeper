import type { BoardData, CreateBoardOptions, GridData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';
import { gridPositionEqualsAny } from '$lib/logics/grid-logic';
import { getNeighborGrids8Way } from '$lib/logics/board-logic/base';

export function createBoard({
															width,
															height,
															getBombPositions
														}: CreateBoardOptions): BoardData {
	let board = createPlainBoard(width, height);
	putBombs(board, getBombPositions(board));
	updateNeighborBombCounts(board);
	return board;
}

export function createPlainBoard(width: number, height: number): BoardData {
	const grids: GridData[] = [];
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			grids.push({
				index: x + y * width,
				type: 'BLANK',
				isCovered: true,
				displayType: 'COVERED',
				x,
				y,
				neighborBombCount: 0
			});
		}
	}

	return {
		height,
		width,
		grids
	};
}

function putBombs(board: BoardData, positions: PositionData[]) {
	for (let grid of board.grids) {
		if (gridPositionEqualsAny(grid, positions)) {
			grid.type = 'MINE';
		}
	}
}

function updateNeighborBombCounts(board: BoardData): void {
	for (let grid of board.grids) {
		grid.neighborBombCount = calcNeighborBombCount(board, grid.x, grid.y);
	}
}

function calcNeighborBombCount(
	board: BoardData,
	x: number,
	y: number
): number {
	let count = 0;
	for (let grid of getNeighborGrids8Way(board, { x, y })) {
		if (grid.type === 'MINE') {
			count++;
		}
	}
	return count;
}
