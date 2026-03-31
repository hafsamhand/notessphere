/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: any) {
    return this.prisma.note.create({
      data: {
        title: dto.title,
        content: dto.content,
        metadata: dto.metadata,
        categoryId: dto.categoryId,
        userId: userId,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.note.findMany({
      where: { userId },
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByCategory(userId: number, categoryId: number) {
    return this.prisma.note.findMany({
      where: { userId, categoryId },
      include: { category: true },
    });
  }

  async findOne(userId: number, noteId: number) {
    const note = await this.prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note) throw new NotFoundException('Note not found');

    if (note.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return note;
  }

  async update(userId: number, noteId: number, dto: any) {
    const note = await this.findOne(userId, noteId);
    if (!note) throw new NotFoundException('Note not found');

    if (note.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return this.prisma.note.update({
      where: { id: noteId },
      data: {
        ...dto,
      },
    });
  }

  async delete(userId: number, noteId: number) {
    const note = await this.findOne(userId, noteId);

    if (!note) throw new NotFoundException('Note not found');

    if (note.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }
    return this.prisma.note.delete({
      where: { id: noteId },
    });
  }
}
