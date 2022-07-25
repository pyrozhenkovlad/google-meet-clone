import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { User } from "../types/types";
import { getUsers } from "../api/api";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const Item = styled(Paper)(() => ({
    backgroundColor: "#202124",
    borderRadius: "20px",
    boxShadow: "none",
    textAlign: "center",
  }));

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={1}>
          {users.map((e,i) => (
            <Grid key={i} item xs={3}>
              <Item>
                <UserCard name={e.name} avatarUrl={e.avatarUrl} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsersList;
