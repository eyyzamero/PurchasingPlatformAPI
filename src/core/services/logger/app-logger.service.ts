import { Injectable, Scope } from "@nestjs/common";
import { AppContext } from "src/core/enums";
import { ConsoleColor, ConsoleStyle } from "src/core/enums";

@Injectable({ scope: Scope.TRANSIENT })
export class AppLoggerService {

  constructor(
    private _context: AppContext = AppContext.NONE
  ) { }

  info(message: string): void {
    console.log(`${ConsoleColor.FOREGROUND_CYAN}[INFO]${ConsoleStyle.RESET} - ${message}`);
  }
}