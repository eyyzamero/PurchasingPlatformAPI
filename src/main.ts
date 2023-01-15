import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { AppLoggerService } from './core/services/logger/app-logger.service';
import { AppContext } from './core/enums';
import * as cors from 'cors';

const DEFAULT_PORT = 3000;

class App {

  private _app!: INestApplication;
  private readonly _logger: AppLoggerService = new AppLoggerService(AppContext.MAIN)

  constructor() {
    this._bootstrap();
  }

  private async _bootstrap(): Promise<void> {
    this._app = await NestFactory.create(AppModule);
    this._app.use(cors())
    const port = process.env.PORT ?? DEFAULT_PORT;
    await this._app.listen(port, () => this._logger.info(`API launched on port: ${port}`));

    this._initEvents();
  }

  private _initEvents(): void {
    process.on('SIGINT', () => {
      this._logger.info('API shutdown')
      this._app.close();
    });
  }
}
new App();