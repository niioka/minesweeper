import type { BoardData, GridData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';
import * as P from '$lib/logics/position-logic';

export function getNeighborGrids8Way(board: BoardData, pos: PositionData): GridData[] {
	const results = getNeighborGrids4Way(board, pos);
	const cornerGrids: GridData[] = gridsAt(board, [
		P.top(P.left(pos)),
		P.top(P.right(pos)),
		P.bottom(P.left(pos)),
		P.bottom(P.right(pos))
	]);
	return results.concat(cornerGrids);
}

function getNeighborGrids4Way(board: BoardData, pos: PositionData): GridData[] {
	return gridsAt(board, [
		P.top(pos),
		P.left(pos),
		P.right(pos),
		P.bottom(pos)
	]);
}

export function gridsAt(board: BoardData, positions: PositionData[]): GridData[] {
	let results: GridData[] = [];
	for (let pos of positions) {
		const grid = gridAtSafe(board, pos);
		if (grid) {
			results.push(grid);
		}
	}
	return results;
}

export function gridAtSafe(
	board: BoardData,
	{ x, y }: PositionData
): GridData | undefined {
	if (!isValidPos(board, x, y)) {
		return undefined;
	}
	return board.grids[x + y * board.width];
}


/** 🚩の個数を数える */
export function countFlags(board: BoardData): number {
	return board.grids.filter((g) => g.displayType === 'FLAG').length;
}

export function gridAt(board: BoardData, { x, y }: PositionData): GridData {
	if (!isValidPos(board, x, y)) {
		throw new Error(`x, y must be valid position: x=${x}, y=${y}`);
	}
	return board.grids[indexOf(board, { x, y })];
}

export function isValidPos({ height, width }: BoardData, x: number, y: number) {
	return !(x < 0 || x >= width || y < 0 || y >= height);
}

export function indexOf(board: BoardData, { x, y }: PositionData) {
	if (!isValidPos(board, x, y)) {
		throw new Error(`x, y must be valid position: x=${x} y=${y}`);
	}
	return x + y * board.width;
}

export function countRestBlankCount(board: BoardData): number {
	return board.grids.filter((g) => g.type === 'BLANK' && g.displayType !== 'BLANK').length;
}

export function toTestString(board: BoardData, { showNeighborCount = false }: {
	showNeighborCount?: boolean
} = {}): string {
	const symbolByDisplayType = {
		'BLANK': '_',
		'COVERED': '#',
		'UNKNOWN': '?',
		'MINE': 'x',
		'CLEARED_MINE': 's',
		'FLAG': '!'
	};

	let results = '';
	for (let y = 0; y < board.height; y++) {
		for (let x = 0; x < board.width; x++) {
			const grid = gridAt(board, { x, y });
			if (x > 0) {
				results += ' ';
			}
			results += symbolByDisplayType[grid.displayType] + (grid.type === 'MINE' ? 'x' : '_');
			if (showNeighborCount) {
				results += grid.neighborBombCount;
			}
		}
		results += '\n';
	}
	return results;
}

