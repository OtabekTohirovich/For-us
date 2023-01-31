import { Paper, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { collors } from "../../constants/collors";

const Searchbar = () => {
  return (
    <Paper
      className="search__form"
      component={"form"}
      sx={{
        border: `1px solid ${collors.secondary}`,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input type="text" placeholder="Search..." className="search__bar" />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
