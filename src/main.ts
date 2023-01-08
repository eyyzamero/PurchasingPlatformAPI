import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mssql from 'mssql';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './core/services/database/database.service';
import { INestApplication } from '@nestjs/common';
import { AppLoggerService } from './core/services/logger/app-logger.service';
import { AppContext } from './core/enums';

const DEFAULT_PORT = 3000;

class App {

  private _app!: INestApplication;
  private _configService: ConfigService;
  private _databaseService: DatabaseService;
  private readonly _logger: AppLoggerService = new AppLoggerService(AppContext.MAIN)

  constructor() {
    this._bootstrap();
  }

  private async _bootstrap(): Promise<void> {
    this._app = await NestFactory.create(AppModule);
    const port = process.env.PORT ?? DEFAULT_PORT;
    await this._app.listen(port, () => this._logger.info(`API launched on port: ${port}`));

    this._configService = this._app.get(ConfigService);
    this._databaseService = this._app.get(DatabaseService);

    this._initDbConnection();
    this._initEvents();
  }

  private async _initDbConnection(): Promise<void> {
    const dbConfig = this._configService.get('database') as mssql.config;
    const pool = new mssql.ConnectionPool(dbConfig);
    this._databaseService.pool = pool;

    try {
      await this._databaseService.pool.connect();
      this._logger.info('Connected to the database')
    } catch (err) {
      console.error(err);
    }
  }

  private _initEvents(): void {
    process.on('SIGINT', () => {
      this._databaseService.pool.close(() => this._logger.info('Disconnected from the database'));
      this._app.close();
    });
  }
}
new App();