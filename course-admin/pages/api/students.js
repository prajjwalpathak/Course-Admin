import axios from "axios";

//Creating the API instance
export default axios.create({
  baseURL: "http://localhost:3001/",
});
