import RoomDto from "@/dtos/room.dto";
import roomService from "@/services/room-service";
import type { Request, Response } from "express";

class RoomsController {
  async create(req: Request, res: Response) {
    // room
    const { topic, roomType } = req.body;

    if (!topic || !roomType) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const room = await roomService.create({
      topic,
      roomType,
      owner: req.user._id,
    });

    return res.json(new RoomDto(room));
  }

  async index(req: Request, res: Response) {
    const rooms = await roomService.getAllRooms(["open"]);
    const allRooms = rooms.map((room) => new RoomDto(room));
    return res.json(allRooms);
  }

  async show(req: Request, res: Response) {
    const room = await roomService.getRoom(req.params.roomId);
    return res.json(room);
  }
}

export default new RoomsController();
