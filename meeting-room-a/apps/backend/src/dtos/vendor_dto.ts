import { IVendorSchema } from "../models/vendor_model.js";
import { IImages } from "../models/user_model.js";
import StringFunction from "../utils/string_functions.js";

class VendorDTO {
  _id: string;
  vendorName: string;
  description?: string;
  logo: IImages;
  status: "Active" | "Deactivated" | "Deleted";
  createdAt: Date;
  updatedAt: Date;

  constructor(vendor: IVendorSchema) {
    this._id = vendor._id.toString();
    this.vendorName = StringFunction.capitalize(vendor.vendorName);
    this.description = vendor.description;
    this.logo = vendor.logo;
    this.status = vendor.status;
    this.createdAt = vendor.createdAt;
    this.updatedAt = vendor.updatedAt;
  }
}

export default VendorDTO;
