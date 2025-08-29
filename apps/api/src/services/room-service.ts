import RoomModel, { RoomType } from "@/models/room-model";
class RoomService {
  async create(payload: Partial<RoomType> ) {
    const { topic, roomType, owner } = payload;
    const room = await RoomModel.create({
      topic,
      roomType,
      owner,
      participants: [owner],
    });
    return room;
  }

  async getAllRooms(types: string[]) {
    const rooms = await RoomModel.find({ roomType: { $in: types } })
      .populate("participants")
      .populate("owner")
      .exec();
    return rooms;
  }

  async getRoom(roomId: string) {
    const room = await RoomModel.findOne({ _id: roomId });
    return room;
  }
}
export default new RoomService();
