import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessageModule } from './messages/message.module';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, MessageModule],
})
export class AppModule {}
