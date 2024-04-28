import { PrismaClient } from "@prisma/client";
import { User, UserArray } from "./UsersType";

const prisma = new PrismaClient();

async function createManyUsers(UsersBody: UserArray) {
  const create = await prisma.users.createMany({
    data: UsersBody,
  });
  return create;
}
async function updateUser(UserBody: User, userId: string) {
  const { ...rest } = UserBody;
  const update = await prisma.users.update({
    where: {
      id: userId,
    },
    data: {...rest}
  });
  return update;
}
async function deleteUser(userId: string){
    const deleteUser = await prisma.users.delete({
        where: {
            id: userId
        }
    });
    return deleteUser;
}
async function getAllUsers(){
    const users = await prisma.users.findMany({});
    return users;
}
async function getSingleUser(userId: string){
    const user = await prisma.users.findUnique({
        where:{
            id: userId
        }
    });
    return user;
}
export default { createManyUsers, updateUser, deleteUser, getAllUsers, getSingleUser };
