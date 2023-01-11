import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/core/modules";
import { UsersService } from "./services/users.service";

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }