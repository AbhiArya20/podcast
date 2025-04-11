import { Response, Request, NextFunction } from "express";
class UserController {
  public static async find(req: Request, res: Response, next: NextFunction) {}

  public static async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  public static async updateOne(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  public static async create(req: Request, res: Response, next: NextFunction) {}

  public static async getCount(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}
}

export default UserController;
