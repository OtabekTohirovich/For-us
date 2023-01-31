import { Routes, Route } from "react-router-dom";
import { Main, Chanel, Vediodetails, Search, Navbar } from "../";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Chanel />} />
        <Route path="/vedio/:id" element={<Vediodetails />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
