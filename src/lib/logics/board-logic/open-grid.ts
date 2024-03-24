import type { BoardData, GridData } from '$lib/models/board';
import { gridContains, isCoveredSafeGrid } from '$lib/logics/grid-logic';
import { getNeighborGrids8Way } from './base';
import { VisitTable } from './visit-table';

export function openGrid(board: BoardData, grid: GridData) {
	const openGrids =
		grid.neighborBombCount > 0 ? [grid] : getSafeGrids(board, grid);
	for (let g of openGrids) {
		if (gridContains(openGrids, g)) {
			g.displayType = 'BLANK';
		}
	}
}

function getSafeGrids(board: BoardData, grid: GridData) {
	const visitTable = new VisitTable();
	const targets = [grid];
	const results = [] as GridData[];

	while (true) {
		const target = targets.shift();
		// 対象がなくなれば終了
		if (!target) {
			break;
		}
		// 訪問済みならばスキップ
		if (visitTable.isVisited(target)) {
			continue;
		}
		visitTable.visit(target);
		results.push(target);
		const neighbors = getNearbyCoveredSafeGrids(board, target).filter(
			g => visitTable.isNotVisited(g)
		);
		for (let neighbor of neighbors) {
			if (neighbor.neighborBombCount > 0) {
				results.push(neighbor);
				visitTable.visit(neighbor);
			} else {
				targets.push(neighbor);
			}
		}
	}
	return results;
}

function getNearbyCoveredSafeGrids(
	board: BoardData,
	grid: GridData
): GridData[] {
	if (!grid.isCovered) {
		return [];
	}
	if (grid.type === 'MINE') {
		return [];
	}
	const neighbors = getNeighborGrids8Way(board, grid);
	return neighbors.filter(isCoveredSafeGrid);
}

export function showMinesOnSuccess(board: BoardData): void {
	for (let grid of board.grids) {
		if (grid.type === 'MINE') {
			grid.displayType = 'CLEARED_MINE';
		}
	}
}

/** 地雷を踏む */
export function openBombsOnFailure(board: BoardData): void {
	for (let grid of board.grids) {
		if (grid.type === 'MINE') {
			grid.displayType = 'MINE';
		}
	}
}
