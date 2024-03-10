// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { User } from './entities/user.entity';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessageModule } from './messages/message.module';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, MessageModule],
})
export class AppModule {}
