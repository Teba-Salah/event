import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import './Lastevents.css';

const videos = [
  "https://youtu.be/NBfGDZpUpSA?si=vTJbzLMPlQupd2S1",
  "https://youtu.be/u_qFlTu7HTw?si=_qnv_1jVIKEM0qu2",
  "https://youtu.be/kN89S_vflwI?si=Z_kTuxK8S9BYNRu8",
  "https://shiloh-events.com/wp-content/uploads/2024/08/Homepage-Hero.mp4"
];

function Lastevent() {
  const [videoIndex, setVideoIndex] = useState(0);

  const settings = {
    infinite: true, lazyLoad: true,speed: 300, slidesToShow: 3,centerMode: true,centerPadding: 0,dots: true, swipe: true, draggable: true, 
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false, 

    beforeChange: (current, next) => setVideoIndex(next),
    afterChange: (current) => setVideoIndex(current),
  };

  return (
    <div className='last'>
      <h2 className="Laste_Events">Laste Events</h2>
      <Slider {...settings}>
        {videos.map((video, idx) => (
          <div
            className={idx === videoIndex ? "slide activeSlide" : "slide"}
            key={idx}
            onClick={() => setVideoIndex(idx)} 
          >
            <ReactPlayer 
              url={video} 
              controls={true}
              width="100%" 
              height="315px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Lastevent;

