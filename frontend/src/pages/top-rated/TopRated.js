import React from "react";
import "./TopRated.css";
import CardHBox from "../../components/CardHBox/CardHBox";

export default function TopRated() {
  const data = {
    img: "https://i.scdn.co/image/ab67706c0000da844fc419eb9ee946468771f3d1",
    name: "Blinding Lights",
    singer: "The Weeknd",
  };

  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <div
        className="banner"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="content-detail">
        <div
          className="avt-song"
          style={{ backgroundImage: `url(${data.img})` }}
        ></div>

        <div className="detail-of-song">
          <h1
            className="roboto-bold"
            style={{ fontSize: "96px", color: "var(--primary-color)" }}
          >
            No. 1
          </h1>
          <h1 className="roboto-bold" style={{ fontSize: "64px" }}>
            {data.name}
          </h1>
          <h1 className="roboto-bold" style={{ fontSize: "36px" }}>
            {data.singer} - {data.name}
          </h1>
        </div>
      </div>

      <div className="btn-play">
        <button className="btn-primary roboto-bold">Play song</button>
      </div>

      <div className="other-song">
        {
            list.map((item, index) => (
                <div key={index} className="item-other">
                    <h1 style={{color: (index === 0 || index === 1) ? 'var(--primary-color)' : 'var(--white-color)'}}>{index+2}</h1>
                    <CardHBox img={data.img} singer={data.singer} name={data.name} type={'Top song'}></CardHBox>
                </div>
            ))
        }
        </div>
    </div>
  );
}
