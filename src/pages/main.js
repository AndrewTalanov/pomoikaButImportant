import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://swapi.dev/api/";

const MainPage = () => {

    const [planets, setPlanets] = useState(null);

    useEffect(() => {

        axios.get(url + 'planets/')
            .then(response => {
                setPlanets(response.data.results)
            });
    }, []);

    return (
        <>
            <h1>Список планет</h1>
            {
                planets && planets.map((el, i) => {
                    return (
                        <div key={el.name}>
                            <p>{el.name}</p>

                            <Link
                                to={`post/${i}/${el.name}`}
                            >
                                <button>
                                    Перейти!
                                </button>
                            </Link>    
                            
                        
                        </div>
                    );
                })
            }
        </>
    )
}

export default MainPage;