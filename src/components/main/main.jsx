import { Stack, Box, Container, Typography } from "@mui/material";
import { useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import { collors } from "../../constants/collors";
import { Category, Vedios } from "../";
import { ApiService } from "../../api/index";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [vedios, setvedios] = useState([]);

  const selectedCategoryHandelar = (category) => setSelectedCategory(category);

  useEffect(()=>{
    ApiService.featching(`search?part=snippet&q=New`).then(data=> setvedios(data.items))
  }, [])


  return (
    <Stack>
      <Category
        selectedCategoryHandelar={selectedCategoryHandelar}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h5"} fontWeight={"bold"} mb={"2"}>
            {selectedCategory}{" "}
            <span style={{ color: collors.secondary }}>Vedios</span>
          </Typography>
          <Vedios vedios={vedios} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
