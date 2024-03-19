import type { PositionData } from '$lib/models/position';

export class VisitTable {
	private visited = new Set<string>();

	isVisited(pos: PositionData): boolean {
		return this.visited.has(`${pos.x}-${pos.y}`);
	}

	isNotVisited(pos: PositionData): boolean {
		return !this.isVisited(pos);
	}

	visit(pos: PositionData): void {
		this.visited.add(`${pos.x}-${pos.y}`);
	}

}
