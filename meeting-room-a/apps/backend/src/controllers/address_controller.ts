import { Response, Request, NextFunction } from "express";
import AddressService from "../services/address_service.js";
import AddressDTO from "../dtos/address_dto.js";
import { SuccessResponse } from "../utils/response-classes.ts/success-response.js";
import Constants from "../utils/constants.js";
import ErrorResponse from "../utils/response-classes.ts/error-response.js";

class AddressController {
  public static async find(req: Request, res: Response, next: NextFunction) {
    try {
      // Fetch only active and default addresses for the user with the given ID.
      const addresses = await AddressService.find({
        user: req._id,
        status: { $in: ["Active", "Default"] },
      });

      // Format the fetched addresses using the AddressDTO class.
      const formattedAddress = addresses.map(
        (address) => new AddressDTO(address)
      );

      // Return the formatted addresses as a success response.
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedAddress }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      // Fetch the address with the given ID for the user who is requesting it.
      const _id = req.params._id!;
      const address = await AddressService.findOne({
        _id,
        user: req._id,
        status: { $in: ["Active", "Default"] },
      });

      // If no address is found, return a 404 response.
      if (!address) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.ADDRESS_NOT_FOUND,
          })
        );
      }

      // Format the fetched address using the AddressDTO class.
      const formattedAddress = new AddressDTO(address);

      // Return the formatted address as a success response.
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedAddress }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // Check if the user has more than 6 addresses.
      const addressCount = await AddressService.getCount({
        user: req._id,
        status: { $in: ["Active", "Default"] },
      });
      if (addressCount === 6) {
        return res.status(409).json(
          new ErrorResponse({
            code: Constants.ADDRESS_COUNT_EXCEEDED,
            message: Constants.ADDRESS_COUNT_EXCEEDED_MESSAGE,
          })
        );
      }

      // If the status is Default, update all other addresses to Active.
      if (req.body.status == "Default") {
        await AddressService.updateMany(
          { user: req._id, status: "Default" },
          { $set: { status: "Active" } }
        );
      }

      // Create the address
      const address = await AddressService.create({
        ...req.body,
        user: req._id,
      });

      // Format the created address using the AddressDTO class.
      const formattedAddress = new AddressDTO(address);

      // Return the formatted address as a success response.
      return res
        .status(201)
        .json(new SuccessResponse({ data: formattedAddress }));
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
      const _id = req.params._id!;

      // Find the address with the given ID for the user who is requesting it.
      let address = await AddressService.findOne({
        _id,
        user: req._id,
        status: { $in: ["Active", "Default"] },
      });

      // If no address is found, return a 404 response.
      if (!address) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.ADDRESS_NOT_FOUND,
          })
        );
      }

      // If the status is Default, update all other addresses to Active.
      if (req.body.status == "Default") {
        await AddressService.updateMany(
          { user: req._id, status: "Default" },
          { $set: { status: "Active" } }
        );
      }

      // Update the address with the given ID.
      address = await AddressService.updateOne(
        { _id, user: req._id, status: { $in: ["Active", "Default"] } },
        { $set: req.body }
      );

      // Format the updated address using the AddressDTO class.
      const formattedAddress = new AddressDTO(address!);

      // Return the formatted address as a success response
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedAddress }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async findForAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // Fetch all active and default addresses for the user with the given ID.
      const user = req.params.user;
      const addresses = await AddressService.find({
        user,
        status: { $in: ["Active", "Default"] },
      });

      // Format the fetched addresses using the AddressDTO class.
      const formattedAddress = addresses.map(
        (address) => new AddressDTO(address)
      );

      // Return the formatted addresses as a success response.
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedAddress }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default AddressController;
