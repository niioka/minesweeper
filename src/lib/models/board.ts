import type { PositionData } from '$lib/models/position';

export type BoardData = {
	width: number,
	height: number,
	grids: GridData[],
}

export type GridData = {
	index: number;
	type: GridType;
	isCovered: boolean;
	displayType: DisplayType;
	x: number;
	y: number;
	neighborBombCount: number;
}


export type GridType = 'BLANK' | 'MINE'
export type DisplayType = 'BLANK' | 'COVERED' | 'UNKNOWN' | 'MINE' | 'CLEARED_MINE' | 'FLAG'

export type CreateBoardOptions = {
	width: number,
	height: number,
	getBombPositions: (board: BoardData) => PositionData[],
}