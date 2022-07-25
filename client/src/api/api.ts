import { User, CatImage } from "../types/types";
import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get<User[]>("http://localhost:5000/api/users");
  return response.data;
};

export const getRandomImage = async () => {
  const response = await axios.get<CatImage>(
    "http://localhost:5000/api/randomimage"
  );
  return response.data.imageUrl;
};
