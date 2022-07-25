import { User, CatImage } from "../types/types";
import axios from "axios";

export const getUsers = async () => {
  const data = await axios.get<User[]>(
    "http://localhost:5000/api/users"
    );
  return data.data;
};

export const getRandomImage = async () => {
  const data = await axios.get<CatImage[]>(
    "http://localhost:5000/api/randomimage"
  );
  return data.data[0].imageUrl;
};
