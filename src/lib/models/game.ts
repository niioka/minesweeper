import type { BoardData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';

export type InitGameOptions = {
	width: number;
	height: number;
	getMinePositions: (board: BoardData) => PositionData[];
}

export type GameData = {
	isGameOverPopupOpen: boolean;
	isCongratulationPopupOpen: boolean;
	startTime: number;
	initialBombCount: number;
	restBombCount: number;
	restBlankCount: number;
	elapsedSeconds: number;
	status: 'READY' | 'PLAYING' | 'COMPLETE' | 'GAMEOVER';
	board: BoardData;
	endTime: number;
	bestTime: number;
}

export type StartGameEventPayload = {
	width: number
	height: number
	bombCount: number
}
