import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../api";
import ReactPlayer from "react-player";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader } from "../";

const Vediodetails = () => {
  const { id } = useParams();
  const [vediosDetail, setVedioDetail] = useState(null);
  useEffect(() => {
    ApiService.featching(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVedioDetail(data.items[0])
    );
  }, [id]);

  if (!vediosDetail?.snippet) {
    return <Loader />;
  }

  // const {
  //   snippet: { title, channelId, categoryId, channelTitle, description, thumbnails },
  //   statistics: { commentCount, likeCount, viewCount },
  // } = vediosDetail
  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {/* {vediosDetail.snippet?.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))} */}
          <Typography variant="h5" fontFamily={"bold"} p={2}>
            {vediosDetail.snippet.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".7" }} p={2}>
            {vediosDetail.snippet.description}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems="center"
            py={1}
            px={2}
          >
            <Stack
              sx={{ opocity: 0.7 }}
              direction={"row"}
              alignItems="center"
              gap="3px"
            >
              <Visibility />
              {parseInt(vediosDetail.statistics.viewCount)} Views
            </Stack>
            <Stack
              sx={{ opocity: 0.7 }}
              direction={"row"}
              alignItems="center"
              gap="3px"
            >
              <FavoriteOutlined />
              {parseInt(vediosDetail.statistics.likeCount)} Like
            </Stack>
            <Stack
              sx={{ opocity: 0.7 }}
              direction={"row"}
              alignItems="center"
              gap="3px"
            >
              <MarkChatRead />
              {parseInt(vediosDetail.statistics.commentCount)} Comments
            </Stack>
          </Stack>
          <Stack direction={"row"} py={1} px={2}>
            <Stack
              direction={"row"}
              alignItems="center"
              gap={"5px"}
              marginTop="5px"
            >
              <Avatar
                alt={vediosDetail.snippet.channelTitle}
                src={vediosDetail.snippet.thumbnails.default.url}
              />
              <Typography variant="subtitle2" color={"gray"}>
                {vediosDetail.snippet.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box width={"25%"}> suggesdtesk</Box>
      </Box>
    </Box>
  );
};

export default Vediodetails;
