import Config from "./config/config.js"; // Always on top of all imports as it contains configuration from .env files
import http from "http";
import Server from "./server.js";
import AddressModel from "./models/address_model.js";
import AddressService from "./services/address_service.js";
import AddressController from "./controllers/address_controller.js";
import AddressDTO from "./dtos/address_dto.js";

const server = http.createServer(await Server.createServer());

const PORT = Config.PORT;

AddressDTO;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(`Server Error: ${error.message}`);
});
