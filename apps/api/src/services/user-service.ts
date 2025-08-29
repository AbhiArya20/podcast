import UserModel, { UserType } from "@/models/user-model";
import { QueryOptions } from "mongoose";
class UserService {
  async findUser(filter: QueryOptions<UserType>) {
    const user = await UserModel.findOne(filter);
    return user;
  }

  async createUser(data: Partial<UserType>) {
    const user = await UserModel.create(data);
    return user;
  }

  async updateUser(id: string, data: Partial<UserType>) {
    const updatedUser = await UserModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedUser;
  }
}

export default new UserService();
