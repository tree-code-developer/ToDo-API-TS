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
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        password: process.env.POSTGRES_PASSWORD,
        username: process.env.POSTGRES_USER,
        database: process.env.POSTGRES_DATABASE,
        entities: [Todo],
        logging: true,
        ssl: true,
      }),
      TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
