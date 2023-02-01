import { Stack, Box } from "@mui/material";
import { Vediocard, ChanelCard, Loader } from "../";
const Vedios = ({ vedios }) => {
  if (!vedios.length) {
    return <Loader />
  }
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {vedios.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <Vediocard vedio={item} />}
          {item.id.channelId && <ChanelCard vedio={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Vedios;
