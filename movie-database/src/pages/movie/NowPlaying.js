import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  async function getNowPlayingMovie() {
  
  const response = await axios(ENDPOINTS.NOW_PLAYING);
  dispatch(updateMovies(response.data.results));
}

  return (
    <>
    <Hero />
    <Movies title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;
