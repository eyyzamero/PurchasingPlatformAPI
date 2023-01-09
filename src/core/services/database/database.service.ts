import { Injectable } from '@nestjs/common';
import * as mssql from 'mssql';

@Injectable()
export class DatabaseService {

  set pool(value: mssql.ConnectionPool) {
    this._pool = value;
  }

  get pool(): mssql.ConnectionPool {
    return this._pool;
  }

  private _pool!: mssql.ConnectionPool
}