import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly statusOption = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`${value} is not a valid status!`);
    }

    return value;
  }
  private isValidStatus(value: any) {
    const index = this.statusOption.indexOf(value);
    return index !== -1;
  }
}
