/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './boards-stauts.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { pipe } from 'rxjs';
import { BoardStatusValidationPipe } from './pipe/board-status-validation.pipe';
import { Board } from './boards.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/:id')
  getBoardbyId(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }

  @Get()
  getBoards(): Promise<Board[]> {
    return this.boardService.getBoards();
  }

  // @Get('/')
  // getAllBoards(): Board[] {
  //   return this.boardService.getAllBoards();
  // }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
