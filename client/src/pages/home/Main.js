import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import PostList from "../../component/PostList";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {API_URL, InportAxios} from "../../config";

const Main = observer(() => {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get(`/posts` + search)
            setPosts(res.data)
        };
        fetchPosts();
    }, [search])

    return (
        <Container>
            <Row className="mt-2">
                <Col >
                    <PostList posts={posts}/>
                </Col>
            </Row>
        </Container>
    );
});

export default Main;