-- DropForeignKey
ALTER TABLE `note` DROP FOREIGN KEY `Note_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `note` DROP FOREIGN KEY `Note_userId_fkey`;

-- AlterTable
ALTER TABLE `note` ADD COLUMN `metadata` JSON NULL;
