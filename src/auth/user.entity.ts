import { Board } from 'src/board/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
  @OneToMany(type => Board, board => board.user, {eager: true})
  boards: Board[];
}
