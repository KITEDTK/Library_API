import { PrismaClient } from "@prisma/client";
import { User, UserArray } from './UsersType';

const prisma = new PrismaClient();

async function createManyUsers(UsersBody: UserArray) {
  const create = await prisma.users.createMany({
    data: UsersBody
  });
  return create;
}

export default { createManyUsers };
