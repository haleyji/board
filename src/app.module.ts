import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    BoardsModule],
})
export class AppModule {}
