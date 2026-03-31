import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
const adapter = new PrismaMariaDb({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  database: process.env['DB_NAME'] || 'notessphere',
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const categories = [
    'Travel',
    'Personal Journal',
    'Recipes',
    'Movies',
    'Series',
    'Books',
    'Memories',
  ];

  for (const name of categories) {
    const a = await prisma.category.create({
      data: { name },
    });
    console.log(a);
  }

  console.log('Categories seeded 🌱');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
