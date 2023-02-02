import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import { collors } from "../../constants/collors";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Vediocard = ({ vedio }) => {
  console.log(vedio.id.videoId);
  return (
    // key={vedio.id.videoId}
    <Card
      sx={{
        width: { xs: "100%", sm: "350px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/vedio/${vedio.id.videoId}`}>
        <CardMedia
          image={vedio?.snippet?.thumbnails?.high?.url}
          alt={vedio?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "350px", md: "320px" },
            height: "180px",
            borderRadius: "1rem",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: collors.primry,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/vedio/${vedio.id.videoId}`}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {vedio?.snippet?.title.slice(0, 35)}
          </Typography>
          <Typography variant="subtitle2" sx={{ oposity: ".7" }}>
            {vedio?.snippet?.description.slice(0, 75)}
          </Typography>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(vedio?.snippet?.publishedAt).fromNow()}
          </Typography>
        </Link>
        <Link to={`/channel/${vedio.snippet.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={vedio?.snippet.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {vedio?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Vediocard;
