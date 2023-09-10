import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        password: 'djkim0318',
        username: 'postgres',
        database: 'postgres',
        entities: [],
        synchronize: true,
        logging: true,
      }),
      TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
