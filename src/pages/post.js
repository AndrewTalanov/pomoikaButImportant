import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const url = "https://swapi.dev/api/";

const PostPage = () => {

    const { id, name } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(url + '/planets/' + id + 1)
            .then((response) => {
                setPost(response.data)
                console.log(response);
            });
    });

    return (
        <>
            <Link to='..'>назад</Link>
            <h1>ПОСТ</h1>
            <div>
                {name}
            </div>
            <p>
                {post && post.terrain}
            </p>

        </>
    )
}

export default PostPage;