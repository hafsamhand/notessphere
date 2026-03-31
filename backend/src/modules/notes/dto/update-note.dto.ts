import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  metadata?: any;

  @IsOptional()
  @IsInt()
  categoryId?: number;
}
