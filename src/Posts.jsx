import React from 'react'
import { useState, useEffect } from "react";
import './posts.css';

function Posts() {

    // 1. Funkcijas kas veido vaicājumu uz: https://jsonplaceholder.typicode.com/posts/
    // 2. Funkcijas kas ielādē datus, kad React components tiek ielādēts
    
    
    
    async function loadPosts(){
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        let data = await response.json();
        return data;
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(loadPosts())
    },[])



    return (
    <>
        <h1>Ziņas</h1>  


    </>
    );
}

export default Posts;

