import type { BoardData } from '$lib/models/board';
import type { PositionData } from '$lib/models/position';

export type InitGameOptions = {
	stageType: StageType;
	width: number;
	height: number;
	getMinePositions: (board: BoardData) => PositionData[];
	currentTime: number;
}


export type StageType = 'EASY' | 'NORMAL' | 'HARD';


export type GameData = {
	initialBombCount: number;
	restBombCount: number;
	restBlankCount: number;
	elapsedSeconds: number;
	board: BoardData;
	currentTime: number;
	stageType: StageType;
}

export type SelectStageState = {
	type: 'SELECT-STAGE';
}

export type PlayingState = {
	type: 'PLAYING';
	startTime?: number;
	game: GameData;
}

export type GameOverState = {
	type: 'GAME-OVER';
	q: 'SHOW-MINES' | 'POPUP-PENDING' | 'POPUP-OPEN';
	nextTime: number;
	game: GameData;
}

export type CompleteState = {
	type: 'COMPLETE';
	q: 'SHOW-MINES' | 'POPUP-PENDING' | 'POPUP-OPEN';
	nextTime: number;
	/** ベストタイム */
	bestTime: number;
	game: GameData;
}

export type GameState = SelectStageState | PlayingState | GameOverState | CompleteState;
