/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('notes')
@UseGuards(JwtAuthGuard)
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  create(@Body() dto: CreateNoteDto, @Req() req: any) {
    return this.notesService.create(req.user.userId, dto);
  }

  @Get()
  getAll(@Req() req: any, @Query('categoryId') categoryId?: string) {
    if (categoryId) {
      return this.notesService.findByCategory(
        req.user.userId,
        parseInt(categoryId),
      );
    }

    return this.notesService.findAll(req.user.userId);
  }
}
