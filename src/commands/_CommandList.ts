import { Command } from "../interface/Command"

import { oneHundred } from "./oneHundred";
import { edit } from "./edit";
import { view } from "./view";
import { help } from "./help";

export const commandList: Command[] = [oneHundred, edit, view, help];