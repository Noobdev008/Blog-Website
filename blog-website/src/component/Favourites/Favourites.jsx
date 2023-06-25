import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GET_API, GET_API_USERID } from '../../API/Api';


const Favourites = () => {

  const [active, setActive] = useState(false);
  const location = useLocation()

  const navigate = useNavigate()
  // if (location) {
  //   navigate('/')
  // }

  let userid = location.state[0].map((_id, i) => {
    return _id;
  })
  // console.log(userid[0].id , "id");

  const [name, setName] = useState([]);
  const [contentBody, setContentBody] = useState([])


  useEffect(() => {
    async function fetchData() {
      try {

        const userDetail = await axios.get(`${GET_API_USERID}${userid[0].id}`);

        setName(userDetail.data);
        console.log(userDetail.data);

        const blogDetail = await axios.get(`${GET_API}/${userid[0].id}`)

        setContentBody(blogDetail.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);



  const handleClick = () => {
    console.log(name)
    navigate('/explore', { state: [name, contentBody] });
  }


  const disfavor = () => {
    setActive(true)
    navigate('/')
  }

  return (
    <div>
      <button
        onClick={disfavor}
        style={{
          borderRadius: "5px",
          color: active ? "white" : "black",
          background: active ? "black" : "white"
        }}
      >Disfavor &nbsp;<i className='fa fa-heart' style={{ float: '', color: active ? 'white' : "black" }}>
        </i>
      </button>
      {



        location.state[0].map((item, index) => {
          return (<>
            <div className="card" style={{ width: '240px', background: 'grey', marginBottom: '10px' }}>
              <img className="card-img-top" src="https://img.freepik.com/free-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink_140725-28168.jpg?size=626&ext=jpg" alt="Card image cap" />
              <div className="card-body">
                <a className="card-title" onClick={handleClick}>{item.title}</a>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          </>)
        })
      }


    </div>

  )
}

export default Favourites
