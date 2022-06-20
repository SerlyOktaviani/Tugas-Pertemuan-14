import axios from "axios";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {

  const dispatch = useDispatch();

  useEffect(() => {
    getTopRated();
  }, []);

  async function getTopRated() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    
    const response = await axios(ENDPOINTS.TOP_RATED);

    /**
     * Simpan data movies dari axios ke state movies.
     * Upadte state menggunakan setMovies().
     */
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
    <Hero />
    <Movies title="Top Rated" />
    </>
  );
}

export default TopRatedMovie;
