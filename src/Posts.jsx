import React from 'react'
import { useState, useEffect } from "react";
import './posts.css';
import PostForm from './PostForm';
function Posts() {

    // 1. Funkcijas kas veido vaicājumu uz: https://jsonplaceholder.typicode.com/posts/
    // 2. Funkcijas kas ielādē datus, kad React components tiek ielādēts



    async function loadPosts() {
        let response = await fetch('http://localhost:8888/web1_api/public/posts');
        let data = await response.json();
        return data;

    }

    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState([]);
    const [visiblePostDiv, setvisiblePostDiv] = useState(false);

    const [reload, setReload] = useState(false);

    const closeModal = ()=>{
        setvisiblePostDiv(false);
    }

    const doReload = ()=>{
        setReload(!reload);
    }




    const openPost = (e)=>{
        let id = e.target.dataset.id;
        console.log(id);

        setvisiblePostDiv(true);
    }

    useEffect(() => {
        loadPosts().then((data) => {
            setPosts(data);
        });

    }, [reload])

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
                <button type="button" className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 disabled:opacity-50'>Pievienot jaunu ziņu</button>
                <table className='border-collapse border border-slate-400'>
                    <thead>
                        <tr>
                            <th>Post</th>
                            <th>View post</th>
                        </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, i) => {
                        return (
                            <tr key={i}>
                                <td>{post.post_title}</td>
                                <td>
                                    <button data-id={post.id} onClick={openPost}>Skatīt postu</button>
                                </td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
             
                {visiblePostDiv?
                   (

                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className='bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative'>
                                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl" onClick={()=>{
                                    setvisiblePostDiv(false)
                                }}>x</button>
                                <h1>Ziņa</h1>
                                <PostForm  closeModal={closeModal}  reload={doReload}/>
                            </div>
                        </div>
                   ):""
                }   
            </>
        )
    }
}

export default Posts;

