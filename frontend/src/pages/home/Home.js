import React from "react";
import './Home.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Home(){

    const images = [
        "https://i.scdn.co/image/ab67616d0000b273aaabd35dde0cfc0bcf315d3e",
        "https://www.songmeaningsandfacts.com/wp-content/uploads/2019/08/Teeth.png",
        "https://i.scdn.co/image/ab67616d0000b273e42cb2ca56e0ab0c53bd6475"
    ];

    const buttonStyle = {
        width: "30px",
        background: "transparent !important",
        border: '0px'
    };
    
    const properties = {
      prevArrow: (
        <button style={{ ...buttonStyle }}>
          <svg
            width="17"
            height="28"
            viewBox="0 0 17 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 28C13.8672 28 13.3047 27.7891 12.8828 27.3672L1.63281 16.1172C0.71875 15.2734 0.71875 13.7969 1.63281 12.9531L12.8828 1.70312C13.7266 0.789062 15.2031 0.789062 16.0469 1.70312C16.9609 2.54688 16.9609 4.02344 16.0469 4.86719L6.41406 14.5L16.0469 24.2031C16.9609 25.0469 16.9609 26.5234 16.0469 27.3672C15.625 27.7891 15.0625 28 14.5 28Z"
              fill="#66B2FF"
            />
          </svg>
        </button>
      ),
      nextArrow: (
        <button style={{ ...buttonStyle }}>
          <svg
            width="18"
            height="28"
            viewBox="0 0 18 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 28C2.86719 28 2.30469 27.7891 1.88281 27.3672C0.96875 26.5234 0.96875 25.0469 1.88281 24.2031L11.5156 14.5L1.88281 4.86719C0.96875 4.02344 0.96875 2.54688 1.88281 1.70312C2.72656 0.789062 4.20312 0.789062 5.04688 1.70312L16.2969 12.9531C17.2109 13.7969 17.2109 15.2734 16.2969 16.1172L5.04688 27.3672C4.625 27.7891 4.0625 28 3.5 28Z"
              fill="#66B2FF"
            />
          </svg>
        </button>
      ),
    };

    return (
        <div>
            <div style={{marginTop: '3rem'}}>
                <Slide slidesToShow={3} {...properties}>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                            {/* <span>Slide 1</span> */}
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                            {/* <span>Slide 2</span> */}
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                            {/* <span>Slide 3</span> */}
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}