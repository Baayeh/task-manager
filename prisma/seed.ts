import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
  const password = await hash('password', 12);

  const user = await prisma.user.upsert({
    where: {
      email: 'admin@admin.com',
    },
    update: {},
    create: {
      email: 'admin@admin.com',
      name: 'Admin User',
      hashedPassword: password,
    },
  });

  console.log(user);
};

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
