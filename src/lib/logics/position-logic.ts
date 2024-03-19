import type { PositionData } from '$lib/models/position';

export function top({ x, y }: PositionData): PositionData {
	return { x, y: y - 1 }
}

export function left({ x, y }: PositionData): PositionData {
	return { x: x - 1, y }
}

export function right({ x, y }: PositionData): PositionData {
	return {
		x: x + 1,
		y,
	}
}
export function bottom({ x, y }: PositionData): PositionData {
	return {
		x,
		y: y + 1,
	}
}
