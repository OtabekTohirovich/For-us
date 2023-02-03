import { Paper, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { collors } from "../../constants/collors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate()
  const submithandler = (e) => {
    e.preventDefault()
   if(value){
    navigate(`/search/${value}`)
   }
  };
  return (
    <Paper
      className="search__form"
      component={"form"}
      onSubmit={submithandler}
      sx={{
        border: `1px solid ${collors.secondary}`,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search__bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
