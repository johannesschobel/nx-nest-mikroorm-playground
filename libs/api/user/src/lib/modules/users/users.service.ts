import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '@nx-nest-mikroorm-playground/api/data';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: EntityRepository<UserEntity>
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new UserEntity();
    user.username = createUserDto.username;
    return this.repository.persistAndFlush(user)
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.repository.findOne(id);
    wrap(user).assign(updateUserDto);
    return this.repository.persistAndFlush(user);
  }

  remove(id: number) {
    return this.repository.remove({id: id})
  }
}
