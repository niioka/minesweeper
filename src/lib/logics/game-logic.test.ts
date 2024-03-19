import { describe, expect, it } from 'vitest';
import { initGame, openCover } from '$lib/logics/game-logic';


describe('セルを開く', () => {
	it('地雷を踏んだ場合はゲームオーバー', () => {
		const game = initGame({ width: 4, height: 4, getMinePositions: (board) => [{ x: 1, y: 1 }] });
		openCover(game, { x: 1, y: 1 });
		expect(game.status).toBe('GAMEOVER');
	});

	it('地雷を踏まない場合はマスを開いて続行', () => {
	});
});