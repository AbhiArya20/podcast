import { Response, Request, NextFunction } from "express";
import OrderModel from "../models/order_model";
class OrderController {
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

  public static async findForAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  public static async findOneForAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  public static async orderStats(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // Create date ranges for today and yesterday
      const today = new Date();
      const startOfToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      const endOfToday = new Date(startOfToday);
      endOfToday.setDate(startOfToday.getDate() + 1); // Midnight of the next day

      const startOfYesterday = new Date(startOfToday);
      startOfYesterday.setDate(startOfToday.getDate() - 1);
      const endOfYesterday = new Date(startOfToday); // Midnight of today

      // Aggregate stats for today
      const todayStats = await OrderModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: startOfToday,
              $lt: endOfToday,
            },
          },
        },
        {
          $group: {
            _id: null, // Group everything
            totalOrders: { $sum: 1 }, // Count orders
            totalRevenue: { $sum: "$totalPrice" }, // Sum totalPrice
          },
        },
      ]);

      // Aggregate stats for yesterday
      const yesterdayStats = await OrderModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: startOfYesterday,
              $lt: endOfYesterday,
            },
          },
        },
        {
          $group: {
            _id: null, // Group everything
            totalOrders: { $sum: 1 }, // Count orders
            totalRevenue: { $sum: "$totalPrice" }, // Sum totalPrice
          },
        },
      ]);

      // Extract stats or set default values
      const todayOrders = todayStats[0]?.totalOrders || 0;
      const todayRevenue = todayStats[0]?.totalRevenue || 0;

      const yesterdayOrders = yesterdayStats[0]?.totalOrders || 0;
      const yesterdayRevenue = yesterdayStats[0]?.totalRevenue || 0;

      // Calculate percentage differences
      const orderDifferencePercentage =
        yesterdayOrders === 0 ?
          todayOrders > 0 ?
            100 // If no orders yesterday and some today, it's a 100% increase
          : 0
        : ((todayOrders - yesterdayOrders) / yesterdayOrders) * 100;

      const revenueDifferencePercentage =
        yesterdayRevenue === 0 ?
          todayRevenue > 0 ?
            100 // If no revenue yesterday and some today, it's a 100% increase
          : 0
        : ((todayRevenue - yesterdayRevenue) / yesterdayRevenue) * 100;

      // Return the stats
      return res.status(200).json({
        today: {
          date: startOfToday.toISOString().split("T")[0],
          totalOrders: todayOrders,
          totalRevenue: todayRevenue,
        },
        yesterday: {
          date: startOfYesterday.toISOString().split("T")[0],
          totalOrders: yesterdayOrders,
          totalRevenue: yesterdayRevenue,
        },
        percentageDifference: {
          orders: orderDifferencePercentage.toFixed(2), // Percentage difference in orders
          revenue: revenueDifferencePercentage.toFixed(2), // Percentage difference in revenue
        },
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
}

export default OrderController;
