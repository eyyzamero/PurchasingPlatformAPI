import { Injectable, Scope } from '@nestjs/common';
import { AppContext } from 'src/core/enums';
import { ConsoleColor, ConsoleStyle } from 'src/core/enums';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLoggerService {

  constructor(
    private _context: AppContext = AppContext.NONE
  ) { }

  debug(message: string): void {
    console.log(`${ConsoleColor.BACKGROUND_MAGENTA}[DEBUG]${ConsoleStyle.RESET} ${message}`);
  }

  info(message: string): void {
    console.log(`${ConsoleColor.FOREGROUND_CYAN}[INFO]${ConsoleStyle.RESET} ${message}`);
  }

  danger(message: string): void {
    console.log(`${ConsoleColor.FOREGROUND_YELLOW}[DANGER]${ConsoleStyle.RESET} ${message}`);
  }

  error(message: string): void {
    console.log(`${ConsoleColor.FOREGROUND_RED}[ERROR]${ConsoleStyle.RESET} ${message}`);
  }
}