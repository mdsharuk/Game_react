import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bedbd2c4003949f497fd9eb0f5cac0a4",
  },
});
