import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../api";
import { Vedios, ChanelCard } from "../";
import { Container } from "@mui/system";

const Chanel = () => {
  const { id } = useParams();
  const [vediosDetail, setVedioDetail] = useState([]);
  const [vediosRelated, setVedioRelated] = useState([]);
  useEffect(() => {
    try {
      ApiService.featching(`channels?part=snippet,statistics&id=${id}`).then(
        (data) => setVedioDetail(data.items[0])
      );
      ApiService.featching(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) =>
        setVedioRelated(data.items)
      );
    } catch (err) {
      console.log(err);
    }
  }, [id]);
  return (
    <Box minHeight={"95vh"} >
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${vediosDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat'

          }}
        />
        <ChanelCard vedio={vediosDetail} marginTop={'-100px'} />
      </Box>
      <Container maxWidth={'90%'}>
      <Vedios vedios={vediosRelated} />
      </Container>
    </Box>
  );
};

export default Chanel;
