import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  number: string;
}
