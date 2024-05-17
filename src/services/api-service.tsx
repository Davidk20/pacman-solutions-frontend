import { GameResponse } from "@models/game-state";
import { config } from "../constants";


/**
 * Fetch an overview of all available levels.
 * @returns A list containing the available levels.
 */
export async function fetchOverview(): Promise<string[]> {
  const queryUrl = `${config.url.API_URL}/get_levels`;
  const response = await fetch(queryUrl);
  const data = await response.json();
  return data;
}


/**
 * Fetch a single level, provided the level number.
 * @param levelNum The level being requested.
 */
export async function fetchGame(levelNum: number): Promise<GameResponse> {
  const queryUrl = `${config.url.API_URL}/get_game?level_num=${levelNum}`;
  const response = await fetch(queryUrl);
  const data = await response.json();
  return data;
}
