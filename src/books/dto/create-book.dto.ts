import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'title is mandatory' })
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'isbn is mandatory' })
  @IsString()
  isbn: string;
}
