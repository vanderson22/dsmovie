import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_url } from "utils/requests";

function Listing() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }


    // em português, fora do padrão, para lembrar a função useState
    // manter estado na aplicação.
    const [numeroPagina, setNumeroPagina] = useState(0);

    //setando usestate default para MoviePage
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,

    });

    useEffect(() => {
        // executa apenas uma vez de acordo com ciclo de vida. init - destroy
        axios
            .get(`${BASE_url}/movies?size=10&page=${numeroPagina}&sort=title`)
            .then(
                resposta => {
                    //resposta da api
                    const data = resposta.data as MoviePage
                    //setando  useState MoviePage
                    setPage(data)
                }
            )
            .catch(e => console.log(e));

    }, [numeroPagina]);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(item => (

                        //   {/*    ocupa 6 colunas das 12 colunas do grid system do bootstrap  */ }
                        < div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                            <MovieCard movie={item} key={item.id} />
                        </div>

                    )
                    )}

                </div>
            </div>


        </>
    );
}

export default Listing;