import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/core/entities";
import { IUserModel } from "src/core/models";
import { EntitiesMapperService } from "src/core/services/mapper/entities/entities-mapper.service";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY') private _usersRepository: Repository<User>,
    private _entitiesMapperService: EntitiesMapperService
  ) { }

  async getOne(login: string): Promise<IUserModel> | null {
    const user = await this._usersRepository.findOneBy({
      login: login
    });
    if (user != null) {
      const mappedUser = this._entitiesMapperService.UserToIUserModel(user);
      return mappedUser;
    }
    return user;
  }
}