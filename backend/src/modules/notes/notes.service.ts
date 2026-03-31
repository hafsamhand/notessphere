/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
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
}
