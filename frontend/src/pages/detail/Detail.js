import React from "react";
import "./Detail.css";

export default function Detail() {
  const data = {
    img: "https://i.scdn.co/image/ab67706c0000da844fc419eb9ee946468771f3d1",
    name: "Blinding Lights",
    singer: "The Weeknd",
  };

  return (
    <div>
      <div
        className="banner"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="content-detail">
        <div className="avt-song" style={{backgroundImage: `url(${data.img})`}}></div>

        <div className="detail-of-song">
          <h1 className="roboto-bold" style={{fontSize: '32px'}}>Name of song</h1>
          <h1 className="roboto-bold" style={{fontSize: '64px'}}>{data.name}</h1>
          <h1 className="roboto-bold" style={{fontSize: '36px'}}>
            {data.singer} - {data.name}
          </h1>
        </div>
      </div>

      <div className="btn-play">
        <button className="btn-primary roboto-bold">Play song</button>
      </div>
     
    </div>
  );
}
