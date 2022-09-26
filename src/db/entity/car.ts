import { ApiProperty } from '@nestjs/swagger';

export class Car {
  id: number;

  @ApiProperty({ type: String })
  number: string;
}
