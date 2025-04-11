import { Response, Request, NextFunction } from "express";
import FilterGenerator from "../utils/filter_generators/filter_generator.js";
import CollectionService from "../services/collection_service.js";
import CollectionDTO from "../dtos/collection_dto.js";
import { SuccessResponse } from "../utils/response-classes.ts/success-response.js";
import ErrorResponse from "../utils/response-classes.ts/error-response.js";
import Constants from "../utils/constants.js";
class CollectionController {
  public static async find(req: Request, res: Response, next: NextFunction) {
    try {
      const { sort, skip, limit, page, query } = FilterGenerator.generateFilter(
        req.query,
        {},
        ["status", "title"],
        ["title"]
      );
      const [collections, collectionsCount] = await Promise.all([
        CollectionService.find(query, sort, skip, limit),
        CollectionService.getCount(query),
      ]);

      const prevPage = page - 1 !== 0 ? page - 1 : null;
      const nextPage = collectionsCount > skip + limit ? page + 1 : null;
      const formattedCollections = collections.map(
        (collection) => new CollectionDTO(collection)
      );
      return res.status(200).json(
        new SuccessResponse({
          data: {
            prevPage,
            nextPage,
            collectionsCount,
            collections: formattedCollections,
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
      const collection = await CollectionService.findOne({ _id });
      if (!collection) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.COLLECTION_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedCollection = new CollectionDTO(collection);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedCollection }));
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
      let collection = await CollectionService.updateOne(
        { _id },
        { $set: req.body }
      );
      if (!collection) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.COLLECTION_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedCollection = new CollectionDTO(collection);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedCollection }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const collection = await CollectionService.create(req.body);
      const formattedCollection = new CollectionDTO(collection);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedCollection }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default CollectionController;
