import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
// or: import dotenv from 'dotenv'; dotenv.config()
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
const adapter = new PrismaMariaDb({
  host: 'localhost',
  port: 3306,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    await prisma.$connect();
    console.log('Prisma Client connected successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
