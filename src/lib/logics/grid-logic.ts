import type { GridData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';


export function changeMark(grid: GridData) {
	if (grid.displayType === 'COVERED') {
		grid.displayType = 'FLAG';
	} else if (grid.displayType === 'FLAG') {
		grid.displayType = 'UNKNOWN';
	} else if (grid.displayType === 'UNKNOWN') {
		grid.displayType = 'COVERED';
	}
}

export function gridPositionEqualsTo(grid: GridData, pos: PositionData): boolean {
	return grid.x === pos.x && grid.y === pos.y;
}

export function gridPositionEqualsAny(grid: GridData, positions: PositionData[]): boolean {
	return positions.some(pos => gridPositionEqualsTo(grid, pos));
}

export function gridContains(grids: GridData[], grid: GridData): boolean {
	return grids.some(g => g.index === grid.index);
}

export function isCoveredSafeGrid(grid: GridData): boolean {
	return grid.isCovered && grid.type !== 'MINE';
}

