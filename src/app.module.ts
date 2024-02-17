import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    BoardModule, AuthModule],
})
export class AppModule {}
