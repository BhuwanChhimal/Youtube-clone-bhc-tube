import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import {ChannelCard, Videos} from "./"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  console.log(channelDetail,videos)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style = {{
            background: 'linear-gradient(90deg, rgba(195,192,255,1) 16%, rgba(85,13,121,1) 100%, rgba(93,10,23,1) 100%, rgba(64,24,88,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail}
          marginTop = "-110px"
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx = {{ mr: { sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail