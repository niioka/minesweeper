import type { BoardData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';

export type InitGameOptions = {
	stageType: StageType;
	width: number;
	height: number;
	getMinePositions: (board: BoardData) => PositionData[];
}

type GameStatus = 'READY' | 'PLAYING' | 'COMPLETE' | 'GAMEOVER';

export type StageType = 'EASY' | 'NORMAL' | 'HARD';

export type GameData = {
	isGameOverPopupOpen: boolean;
	isCongratulationPopupOpen: boolean;
	startTime: number;
	initialBombCount: number;
	restBombCount: number;
	restBlankCount: number;
	elapsedSeconds: number;
	status: GameStatus;
	board: BoardData;
	/** ゲーム終了日時 */
	endTime?: number;
	/** ベストタイム */
	bestTime?: number;
	stageType: StageType;
}

export type StartGameEventPayload = {
	stageType: StageType
	width: number
	height: number
	bombCount: number
}
