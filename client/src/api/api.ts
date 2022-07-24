import { User } from "../types/types";
import axios from "axios";

export const getUsers = async () => {
    const data = await axios.get<User[]>("http://localhost:5000/api/users");
    return data.data;
  };