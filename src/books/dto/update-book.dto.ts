import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBookDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'title is mandatory' })
  @IsString()
  title: string;
}