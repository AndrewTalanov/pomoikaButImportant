import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../api/api";
import loader from "../img/200w.gif";   

const PostPage = () => {

    const { id } = useParams();
    
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(API + '/planets/' + id)
            .then((response) => {
                setPost(response.data)
            });
    });

    return (
        <>
            <Link to='..'>назад</Link>
            <h1>ПОСТ</h1>
            {
                post ? 
                 <>
                    <p>{post.name}</p>
                    <p>{post.terrain}</p>
                 </>
                 :
                 <img src={loader} />
            }

        </>
    )
}

export default PostPage;