import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { collors } from "../../constants/collors";
import { Searchbar } from "../";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: collors.primry,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={35} />
      </Link>
      <Searchbar />
      <Box />
    </Stack>
  );
};

export default Navbar;
