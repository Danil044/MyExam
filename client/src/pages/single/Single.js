import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import MyPostList from "../../component/MyPosts/MyPostList";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {InportAxios} from "../../config";

const Single = observer(() => {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    return (
        <Container>
            <Row className="mt-2">
                <Col >
                    <MyPostList posts={posts}/>
                </Col>
            </Row>
        </Container>
    );
});

export default Single;