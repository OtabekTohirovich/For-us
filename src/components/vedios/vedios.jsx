import { Stack, Box } from "@mui/material";
import { Vediocard } from "../";
const Vedios = ({ vedios }) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {vedios.map(item=>(
        <Box key={item.id.videoId}>
          <Vediocard vedio={item}/>
        </Box>
      ))}
    </Stack>
    
  );
};

export default Vedios;
