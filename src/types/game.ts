export interface StartGameArgs {
  width: number;
  height: number;
  bombCount: number;
}

export type Instruction = { code: 'Sleep', seconds: number }
  | { code: 'OpenGameOverPopup' };