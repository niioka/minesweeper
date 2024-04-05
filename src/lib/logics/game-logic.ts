import type { BoardData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';

export function getRandomBombPositions(bombCount: number): (board: BoardData) => PositionData[] {
	return (board) => {
		const results: PositionData[] = [];
		const keys = new Set<string>();
		while (results.length < bombCount) {
			const x = Math.floor(Math.random() * board.width);
			const y = Math.floor(Math.random() * board.height);
			const key = `${x}|${y}`;
			if (keys.has(key)) {
				continue;
			}
			results.push({ x, y });
			keys.add(key);
		}
		return results;
	};
}

