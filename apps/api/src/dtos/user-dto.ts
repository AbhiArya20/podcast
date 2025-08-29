import userModel, { UserType } from "@/models/user-model";

class UserDto {
  id;
  email;
  name;
  avatar;
  activated;
  createdAt;

  constructor(user: UserType) {
    this.id = user._id;
    this.email = user.email;
    this.name = user.name;
    this.avatar = user.avatar;
    this.activated = user.activated;
    this.createdAt = user.createdAt;
  }
}

export default UserDto;
