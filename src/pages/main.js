import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "../api/api";
import loader from "../img/200w.gif";

const MainPage = () => {

    const [planets, setPlanets] = useState(null);

    useEffect(() => {

        axios.get(API + 'planets/')
            .then(response => {
                setPlanets(response.data.results)
            });
    }, []);

    return (
        <>
            <h1>Список планет</h1>

            {
                planets ?

                    planets.map((el, i) => {
                        return (
                            <div key={el.name}>
                                <p>{el.name}</p>

                                <Link
                                    to={`post/${i + 1}`}
                                >
                                    <button>
                                        Перейти!
                                    </button>
                                </Link>


                            </div>
                        );
                    })
                    :
                    <img src={loader} />
            }

            
        </>
    )
}

export default MainPage;