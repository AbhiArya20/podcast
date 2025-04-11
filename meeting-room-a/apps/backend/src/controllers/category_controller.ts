import { Response, Request, NextFunction } from "express";
import FilterGenerator from "../utils/filter_generators/filter_generator.js";
import CategoryService from "../services/category_service.js";
import CategoryDTO from "../dtos/category_dto.js";
import { SuccessResponse } from "../utils/response-classes.ts/success-response.js";
import ErrorResponse from "../utils/response-classes.ts/error-response.js";
import Constants from "../utils/constants.js";
class CategoryController {
  public static async find(req: Request, res: Response, next: NextFunction) {
    try {
      const { sort, skip, limit, page, query } = FilterGenerator.generateFilter(
        req.query,
        {},
        ["status", "title"],
        ["title"]
      );
      const [categories, categoriesCount] = await Promise.all([
        CategoryService.find(query, sort, skip, limit),
        CategoryService.getCount(query),
      ]);

      const prevPage = page - 1 !== 0 ? page - 1 : null;
      const nextPage = categoriesCount > skip + limit ? page + 1 : null;
      const formattedCategories = categories.map(
        (category) => new CategoryDTO(category)
      );
      return res.status(200).json(
        new SuccessResponse({
          data: {
            prevPage,
            nextPage,
            categoriesCount,
            categories: formattedCategories,
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
      const category = await CategoryService.findOne({ _id });
      if (!category) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.CATEGORY_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedCategory = new CategoryDTO(category);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedCategory }));
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
      let category = await CategoryService.updateOne(
        { _id },
        { $set: req.body }
      );
      if (!category) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.CATEGORY_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedCategory = new CategoryDTO(category);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedCategory }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await CategoryService.create(req.body);
      const formattedCategory = new CategoryDTO(category);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedCategory }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default CategoryController;
