import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";
import { Link , useParams} from "react-router-dom"
import { ApiService } from "../../api";
import {Vedios} from "../";


const Chanel = () => {
  const { id } = useParams();
  const [vediosDetail, setVedioDetail] = useState([]);
  const [vediosRelated, setVedioRelated] = useState([]);
  useEffect(() => {
    ApiService.featching(`channels?part=snippet,statistics&id=${id}`).then(
      (data) => setVedioDetail(data.items[0])
    );
    ApiService.featching(`search?part=snippet&channelId=${id}`).then(
      (data) => setVedioRelated(data.items)
    );
  }, [id]);
  return (
    <Box>
      
        <Vedios vedios={vediosRelated} />
    </Box>
  )
}

export default Chanel