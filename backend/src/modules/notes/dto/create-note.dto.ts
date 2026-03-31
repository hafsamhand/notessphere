import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  metadata?: any;

  @IsInt()
  categoryId: number;
}
