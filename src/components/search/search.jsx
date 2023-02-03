import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiService } from "../../api";
import { collors } from "../../constants/collors";
import { Box, Container, Typography } from "@mui/material";
import { Vedios } from "../";
const Search = () => {
  const [value, setValue] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    try {
      ApiService.featching(`search?part=snippet&q=${id}`).then((data) =>
        setValue(data.items)
      );
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <Box p={2} sx={{hight:'90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant="h5" fontFamily={'bold'} mb={2}>
          Search results from <span style={{color: collors.secondary}}>{id}</span> vedios
        </Typography>
        <Vedios vedios={value} />
      </Container>
    </Box>
  )
  
};



export default Search;
