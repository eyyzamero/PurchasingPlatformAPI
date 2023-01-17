import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/modules';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    forwardRef(() => DatabaseModule)
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }