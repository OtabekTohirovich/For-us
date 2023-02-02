import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChanelCard = ({ vedio }) => {
  return (
    <Box
      // key={vedio.id.videoId}
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${vedio.snippet.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={vedio?.snippet?.thumbnails?.default?.url}
            alt={vedio?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant={"h6"}>
            {vedio?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {vedio?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", color: "gray", fontWeight: "500" }}
            >
              {parseInt(vedio?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChanelCard;
