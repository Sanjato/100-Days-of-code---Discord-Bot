import { Command } from "../interface/Command"

import { oneHundred } from "./oneHundred";
import { edit } from "./edit";
import { view } from "./view";

export const commandList: Command[] = [oneHundred, edit, view];