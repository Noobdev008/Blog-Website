import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_API, GET_API_POSTID, GET_API_USERID } from '../../API/Api'





const Cards = (props) => {

    // console.log(props.id ,  " props");
    const navigate = useNavigate()

    const [name, setName] = useState([]);
    const [contentBody, setContentBody] = useState([])




    useEffect(() => {
        async function fetchData() {
            try {

                const userDetail = await axios.get(`${GET_API_USERID}${props.id}`);

                setName(userDetail.data);

                const blogDetail = await axios.get(`${GET_API}/${props.id}`)

                setContentBody(blogDetail.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);



    const handleClick = () => {

        navigate('/explore', { state: [name, contentBody] });
    }



    return (
        <div>

            <div className="card" style={{ width: '240px', background: 'grey', marginBottom: '10px' }}>
                <img className="card-img-top" src="https://img.freepik.com/free-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink_140725-28168.jpg?size=626&ext=jpg" alt="Card image cap" />
                <div className="card-body">
                    <a className="card-title" onClick={handleClick}>{props.title}</a>
                    <p className="card-text">{props.body.slice(0, 60)}</p>
                </div>
            </div>

        </div>
    )
}

export default Cards
