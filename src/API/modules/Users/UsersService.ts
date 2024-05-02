import { PrismaClient } from "@prisma/client";
import { User, UserArray, Roles } from "./UsersType";

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
async function createUserRoles(userId: string, roleIdsInput: Roles){
  const {roleIds} = roleIdsInput;
  roleIds.forEach( async (r)=>{
    const checkExistRoles = await prisma.roles.findUnique({
      where: {
        id: r
      }
    });
    if(checkExistRoles){
      throw 'error';
    }
  })
  const dataInput = roleIds.map((r)=>{
    return {
      roleId: r,
      userId: userId
    }
  })
  const result = await prisma.userRole.createMany({
    data: {
      ...dataInput
    }
  })
  return result;
}
async function updateUserRoles(userId: string, roleIdsInput: Roles){
  const {roleIds} = roleIdsInput;
  roleIds.forEach( async (r)=>{
    const checkExistRoles = await prisma.roles.findUnique({
      where: {
        id: r
      }
    });
    if(checkExistRoles){
      throw 'error';
    };
  });
  const dataInput = roleIds.map((r)=>{
    return {
      roleId: r,
      userId: userId
    }
  });
  const result = await prisma.userRole.updateMany({
    where:{
      userId: userId
    },
    data:{
      ...dataInput
    }
  });
  return result;
}
export default { createManyUsers, updateUser, deleteUser, getAllUsers, getSingleUser, createUserRoles, updateUserRoles };
