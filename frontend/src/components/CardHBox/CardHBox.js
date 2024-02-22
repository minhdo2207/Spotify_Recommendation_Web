import React from "react";
import "./CardHBox.css";

export default function CardHBox(props) {
  return (
    <div className="card-hbox">
      <div className="each-img each-img-newsong">
        <div style={{ backgroundImage: `url(${props.img})` }}>
          {/* <span>Slide 1</span> */}
        </div>
      </div>

      <div style={{marginLeft: '3rem'}}>
        <h2 className="mb-3" style={{color: 'var(--white-color)', backgroundColor: 'transparent'}}>{props.name}</h2>
        <h3 style={{color: 'var(--gray-color)', backgroundColor: 'transparent'}}>{props.singer}</h3>
        <h3 style={{color: 'var(--gray-color)', backgroundColor: 'transparent'}}>{props.type}</h3>
      </div>
    </div>
  );
}
