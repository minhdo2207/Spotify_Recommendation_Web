import React, { Fragment } from "react";
import './Header.css';
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListMenu = ['POPULAR', 'TOP RATED', 'UPCOMING', 'RECOMMEND'];

function ButtonHeader(){
    return(
        <Fragment>
            <button className="btn-primary roboto-regular">Login</button>
        </Fragment>
    )
}

function AvatarUser(){
    return(
        <Avatar>H</Avatar>
    )
}

export default function Header(){

    var isLogin = false;
    const navigate = useNavigate();

    function handleNavigate(val){
      switch(val){
        case 'POPULAR':{
          navigate('/');
          break;
        }
        case 'TOP RATED':{
          navigate('/top-rated');
          break;
        }
        case 'UPCOMING':{
          navigate('/upcoming');
          break;
        }
        case 'RECOMMEND':{
          navigate('/recommend');
          break;
        }
        default: {
          navigate('/notfound')
        }
      }
    }

    return (
      <div className="header">
        <div className="container">
            {/* menu item */}
            <div className="left-section">
              <div className="logo roboto-bold" onClick={() => handleNavigate('POPULAR')}>L O G O</div>
              {ListMenu.map((item, index) => (
                <div key={index}>
                  <h2 onClick={() => handleNavigate(item)} className="menu-item-text roboto-medium">{item}</h2>
                </div>
              ))}
            </div>
            {/* avatar */}
            <div>
              {
                isLogin ? (<AvatarUser/>) : (<ButtonHeader/>)
              }
            </div>
        </div>
      </div>
    );
}