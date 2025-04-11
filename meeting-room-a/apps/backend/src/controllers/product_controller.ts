import { Response, Request, NextFunction } from "express";
import FilterGenerator from "../utils/filter_generators/filter_generator.js";
import ProductService from "../services/product_service.js";
import ProductDTO from "../dtos/product_dto.js";
import { SuccessResponse } from "../utils/response-classes.ts/success-response.js";
import Constants from "../utils/constants.js";
import ErrorResponse from "../utils/response-classes.ts/error-response.js";

class ProductController {
  public static async find(req: Request, res: Response, next: NextFunction) {
    try {
      const { sort, skip, limit, page, query } = FilterGenerator.generateFilter(
        req.query,
        {},
        ["vendor"],
        ["vendor", "productName"]
      );
      const [products, productsCount] = await Promise.all([
        ProductService.find(query, sort, skip, limit),
        ProductService.getCount(query),
      ]);
      const prevPage = page - 1 !== 0 ? page - 1 : null;
      const nextPage = productsCount > skip + limit ? page + 1 : null;
      // const formattedProducts = products.map(
      //   (product) => new ProductDTO(product)
      // );
      return res.status(200).json(
        new SuccessResponse({
          data: {
            prevPage,
            nextPage,
            productsCount,
            products: products,
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
      const _id = req.params._id!;
      const product = await ProductService.findOne({ _id });
      if (!product) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.PRODUCT_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      const formattedProducts = new ProductDTO(product);
      return res
        .status(200)
        .json(new SuccessResponse({ data: formattedProducts }));
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

      // Update the product
      let product = await ProductService.updateOne({ _id }, { $set: req.body });
      if (!product) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.PRODUCT_NOT_FOUND_MESSAGE(_id),
          })
        );
      }

      // const formattedProducts = new ProductDTO(product);
      return res.status(200).json(new SuccessResponse({ data: product }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductService.create(req.body);
      // const formattedProducts = new ProductDTO(product);
      return res.status(200).json(new SuccessResponse({ data: product }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async getCount(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const productCount = await ProductService.getCount(req.body);
      return res
        .status(200)
        .json(new SuccessResponse({ data: { productCount } }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default ProductController;
