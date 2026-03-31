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
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
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

  @Get(':id')
  getOne(@Req() req: any, @Param('id') id: string) {
    return this.notesService.findOne(req.user.userId, parseInt(id));
  }

  @Patch(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() dto: UpdateNoteDto) {
    return this.notesService.update(req.user.userId, parseInt(id), dto);
  }

  @Delete(':id')
  delete(@Req() req: any, @Param('id') id: string) {
    return this.notesService.delete(req.user.userId, parseInt(id));
  }
}
