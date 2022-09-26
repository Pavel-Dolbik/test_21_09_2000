import { ApiProperty } from '@nestjs/swagger';

export class Rental {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({
    type: String,
    example: new Date().toISOString().split('T')[0],
  })
  start: Date;

  @ApiProperty({ type: String })
  end: Date;

  @ApiProperty({ type: Number })
  carId: number;
}
