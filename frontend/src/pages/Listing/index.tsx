import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_url } from "utils/requests";

function Listing() {

     
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
            .get(`${BASE_url}/movies?size=10&page=${numeroPagina}&sort=score,desc`)
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

    const handlePageChange = (newPageNumber : number) =>{
        //Quando o número da pagina mudou de valor, uma nova requisição com useEffect é realizado.
        setNumeroPagina(newPageNumber); 
    
    };
    return (
        <>

          {/*enviando função  handlePageChange */}
            <Pagination  page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">
                    {page.content.map(item => (

                        //   {/*    ocupa 6 colunas das 12 colunas do grid system do bootstrap  */ }
                        < div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={item.id}>
                            <MovieCard  key={item.id} movie={item} />
                        </div>

                    )
                    )}

                </div>
            </div>


        </>
    );
}

export default Listing;