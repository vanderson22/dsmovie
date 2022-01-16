import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_url } from "utils/requests";

function Listing() {

    // em português, fora do padrão, para lembrar a função useState
    //default - 0 
    const [numeroPagina , setNumeroPagina] =useState(0);
 
     useEffect( () => {
    // executa apenas uma vez de acordo com ciclo de vida.
        axios
        .get(`${BASE_url}/movies?size=10&page=0`)
        .then( 
               resposta => {
                    const data = resposta.data as MoviePage
                    setNumeroPagina(data.number)
                   console.log(data.number);
                   console.log(data);
               }
        )
        .catch( e => console.log(e) );

     }, []);

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