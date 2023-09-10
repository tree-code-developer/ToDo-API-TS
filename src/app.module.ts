import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';
import { config } from "dotenv";
import * as process from "process";
config();

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        password: process.env.DB_PASSWORD,
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
        entities: [Todo],
        synchronize: true,
        logging: true,
      }),
      TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
