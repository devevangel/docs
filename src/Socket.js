import io from "socket.io-client";
const ENDPOINT = "http://localhost:8001";
export default io(ENDPOINT);
