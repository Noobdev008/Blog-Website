import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import { Grid } from '@mui/material'
import './Home.css'
import axios from 'axios'
import {GET_API} from '../../API/Api'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(GET_API);

                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='main-card'>
            <div className="container-card">

                {posts.map((val, index) => {
                    // console.log(val);
                    return (
                        <Cards
                            userId={val.userId}
                            title={val.title}
                            body={val.body}
                            id={val.id}
                        />
                    )

                })}

            </div>
        </div>
    )
}

export default Home
