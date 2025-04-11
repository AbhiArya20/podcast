import { Response, Request, NextFunction } from "express";
import FilterGenerator from "../utils/filter_generators/filter_generator.js";
import VendorService from "../services/vendor_service.js";
import VendorDTO from "../dtos/vendor_dto.js";
import { SuccessResponse } from "../utils/response-classes.ts/success-response.js";
import ErrorResponse from "../utils/response-classes.ts/error-response.js";
import Constants from "../utils/constants.js";
class VendorController {
  public static async find(req: Request, res: Response, next: NextFunction) {
    try {
      const { sort, skip, limit, page, query } = FilterGenerator.generateFilter(
        req.query,
        {},
        ["status", "vendorName"],
        ["vendorName"]
      );
      const [vendors, vendorsCount] = await Promise.all([
        VendorService.find(query, sort, skip, limit),
        VendorService.getCount(query),
      ]);

      const prevPage = page - 1 !== 0 ? page - 1 : null;
      const nextPage = vendorsCount > skip + limit ? page + 1 : null;
      const formattedVendors = vendors.map((vendor) => new VendorDTO(vendor));
      return res.status(200).json(
        new SuccessResponse({
          data: {
            prevPage,
            nextPage,
            vendorsCount,
            vendors: formattedVendors,
          },
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const _id = req.params._id;
      const vendor = await VendorService.findOne({ _id });
      if (!vendor) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.VENDOR_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedVendor = new VendorDTO(vendor);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedVendor }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async updateOne(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const _id = req.params._id;
      // Update the product
      let vendor = await VendorService.updateOne({ _id }, { $set: req.body });
      if (!vendor) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.VENDOR_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedVendor = new VendorDTO(vendor);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedVendor }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const vendor = await VendorService.create(req.body);
      const formattedVendor = new VendorDTO(vendor);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedVendor }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default VendorController;
