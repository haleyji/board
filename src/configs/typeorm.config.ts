import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Board } from 'src/board/board.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // postgres db를 명시
  host: 'localhost', // postgres host
  port: 5432, // postgres port
  username: 'root', // db username
  password: '0325', // db password
  database: 'board', // database name
  entities: [__dirname + '/../**/*.entity.{js,ts}', Board, User], // entity class를 기반으로 테이블을 생성할 수 있도록 entity 파일 규칙 정의
  synchronize: true,
  autoLoadEntities: true,
};
