import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities';
import { IUserModel, UserModel } from 'src/core/models';

@Injectable()
export class EntitiesMapperService {

  UserToIUserModel(src: User): IUserModel {
    const dest = new UserModel(src.id, src.login, src.password);
    return dest;
  }
}