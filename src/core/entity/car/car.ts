import { ApiProperty } from '@nestjs/swagger';

export class Car {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  number: string;
}
