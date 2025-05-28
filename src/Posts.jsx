import React from 'react'
import { useState, useEffect } from "react";
import './posts.css';

function Posts() {

    // 1. Funkcijas kas veido vaicājumu uz: https://jsonplaceholder.typicode.com/posts/
    // 2. Funkcijas kas ielādē datus, kad React components tiek ielādēts



    async function loadPosts() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        let data = await response.json();
        return data;

    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts().then((data) => {
            setPosts(data);
        });

    }, [])

    if (!posts) {
        return (
            <>
                <h1>Ziņas</h1>
                <p>Ielādē...</p>
            </>
        )
    } else {
        return (
            <>
                <h1>Ziņas</h1>
                <table>
                    <tr>
                        <th>Post</th>
                        <th>View post</th>
                    </tr>
                    {posts.map((post, i) => {
                        return (
                            <tr>
                                <td>{post.title}</td>
                                <td>
                                    <button data-id={post.id}>Skatīt postu</button>
                                </td>
                            </tr>)
                    })
                    }
                </table>
            </>
        )
    }
}

export default Posts;

