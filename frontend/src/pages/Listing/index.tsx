import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { BASE_url } from "utils/requests";

function Listing() {

axios
     .get(`${BASE_url}/movies?size=10&page=0`)
     .then( 
            resposta => {
                console.log(resposta.data);
            }
     )
     .catch( e => console.log(e) );
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {/*    ocupa 6 colunas das 12 colunas do grid system do bootstrap  */}
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                </div>
            </div>


        </>
    );
}

export default Listing;