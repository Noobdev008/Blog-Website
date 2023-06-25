import { Card } from '@mui/material';
import React, { useState } from 'react'
import Cards from '../Cards/Cards';
import { useLocation, useNavigate } from 'react-router-dom';

import './Explore.css'

const Explore = () => {
  const navigate = useNavigate()
  const location = useLocation();
  // console.log(location)
  const [name, setName] = useState([location.state[0]])
  const [contentBody, setContentBody] = useState([location.state[1]])
  const [active, setActive] = useState(false);
  const [favPost] = useState(contentBody)



  const favouritePost = () => {
    // setFavPost(contentBody)
    setActive(!active);
    navigate('/favourites', { state: [favPost.length == 0 ? `You dont't have any favourite posts right now. 😊` : favPost] })
  };



  const handleClick = () => {
    navigate('/');
  }
  return (

    <div>

      {/* <a className="card-title">hfghhj</a> */}
      <button onClick={handleClick} style={{ float: 'right', borderRadius: '5px' }}>
        <i className='fa fa-toggle-left' style={{ marginRight: '5px', color: 'black' }}>
        </i> Home
      </button>

      <button
        onClick={favouritePost}
        style={{
          borderRadius: "5px",
          color: active ? "white" : "black",
          background: active ? "black" : "white"
        }}
      >Add To Favourites &nbsp;<i className='fa fa-heart' style={{ float: '', color: active ? 'white' : "black" }}>
        </i>
      </button>
      {
        name.map((val, index) => {
          // console.log(val[0], " val")
          return (
            <>
              <div class="card" style={{ width: "18rem" }}>

                <div class="card-body">
                  <p><b><u>AUTHOR-INFO</u></b></p>
                  <p class="card-text"><b>Author : {val[0].name}</b></p>
                  <p class="card-text"><b>Phone : {val[0].phone}</b></p>
                  <p class="card-text"><b>Username : {val[0].username}</b></p>
                  <p class="card-text"><b>Email : {val[0].email}</b></p>
                  <p class="card-text"><b>Address : {val[0].address.city}</b></p>
                  <p class="card-text"><b>Website : {val[0].website}</b></p>
                </div>
              </div>

            </>
          )
        })
      }
      {
        contentBody.map((item, index) => {
          console.log(item, "item")
          return (

            <>
              <ul class="list-group">
                <li></li>
                <li><h1><b><u>{item.title}</u></b></h1></li>
                <li className=''></li>
                <li className="list-group-item"><b><i>
                  {
                    Array.from(Array(10)).map((_, index) => (
                      (item.body)

                    ))
                  }
                  <br />
                  <br />

                  <br />
                  <br />
                  {
                    Array.from(Array(10)).map((_, index) => (
                      (item.body)

                    ))
                  }
                </i></b></li>
              </ul>
            </>
          )


        })
      }


    </div>
  )
}

export default Explore
