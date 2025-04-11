import { IPhoneNumber } from "../models/user_model.js";
import { IAddressSchema } from "../models/address_model.js";
import StringFunction from "../utils/string_functions.js";

class AddressDTO {
  _id: string;
  addressType: string;
  firstName: string;
  lastName?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  landmark?: string;
  phoneNumber: IPhoneNumber;
  user: string;
  status: "Active" | "Default" | "Deleted";
  createdAt: Date;
  updatedAt: Date;

  constructor(address: IAddressSchema) {
    this._id = address._id.toString();
    this.addressType = address.addressType;
    this.firstName = StringFunction.capitalize(address.firstName);
    this.lastName =
      address.lastName ?
        StringFunction.capitalize(address.lastName)
      : undefined;
    this.address = address.address;
    this.city = address.city;
    this.state = address.state;
    this.country = address.country;
    this.pinCode = address.pinCode;
    this.landmark = address.landmark;
    this.phoneNumber = address.phoneNumber;
    this.user = address.user?.toString();
    this.status = address.status;
    this.createdAt = address.createdAt;
    this.updatedAt = address.updatedAt;
  }
}

export default AddressDTO;
