import React from "react";
import Slider from "react-slick";
import { FaLightbulb, FaHandsHelping, FaAward } from "react-icons/fa"; // استيراد الأيقونات الجديدة
import './About.css';
import Eventimage from './imges/about (1).png'; 
import Aboutnm from "./Aboutnum";

const About = () => {
  const speakers = [
    { name: "Mark", image: "https://images.squarespace-cdn.com/content/v1/5fffa96b879bf154c30d506d/665435b4-e45d-4b0a-81b4-41b45a98e7a9/DSC07519.jpg?format=1500w" },
    { name: "Jean", image: "https://amyallmandphotography.com/wp-content/uploads/sites/7906/2022/10/Sapphire-Suite-Branding-Session_Csilla-Muscan_Amy-Allmand-Photography_13-scaled.jpg" },
    { name: "Steven", image: "https://images.squarespace-cdn.com/content/v1/66c7189e8e003d54bfc12a16/6565ebb8-987d-4344-a3a0-da008be936ef/Wendy_OBeirne_Brand_Photography_Bry_Penney-7634.jpg?format=1500w"},
    { name: "Sarah", image: "https://images.squarespace-cdn.com/content/v1/54c45370e4b060a8975bb8f0/1662072550815-CG8ME9HBJX6EUKBV6FZG/katrina-scott-headshot.jpeg?format=500w" }
  ];

  const attendees = [
    { id: 1, image: 'https://images.squarespace-cdn.com/content/v1/5fffa96b879bf154c30d506d/3a2588f2-b352-4f0d-bef3-7bc51ad79669/DSC06565.jpg?format=1500w' },
    { id: 2, image: 'https://images.squarespace-cdn.com/content/v1/61abaaf83ae5707469273975/1653612120170-JZ0Y0R9S3U1DZZMAWO2S/Go-Live-April-2019-83.jpg?format=750w' },
    { id: 3, image: 'https://i.pinimg.com/564x/a4/3f/58/a43f583177e416909fd192816e5e893c.jpg' },
    { id: 4, image: 'https://coffeecontracts.com/_next/image?url=%2Fimages%2Fblocks%2Ffifty-fifty%2Fabout-fifty-1.png&w=640&q=75' },
    { id: 5, image: 'https://amyallmandphotography.com/wp-content/uploads/sites/7906/2022/10/Sapphire-Suite-Branding-Session_Csilla-Muscan_Amy-Allmand-Photography_15.jpg' },
    { id: 6, image: 'https://media.licdn.com/dms/image/D4D12AQEQKBAJHNKVQw/article-cover_image-shrink_720_1280/0/1698485630678?e=2147483647&v=beta&t=T1aOC9Fap8PeQU58Kz7Oew50WKxgBOeh-MI8XSk0BHA' },
    { id: 7, image: 'https://images.squarespace-cdn.com/content/v1/5fffa96b879bf154c30d506d/91b95642-d632-49f5-abb0-7bf4459de16c/DSC07648.jpg?format=1500w' }
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="AppContainer">
      {/* Background Cover */}
      <div className='cover-event'>
        <img src={Eventimage} className='backgrounddd' alt='Event background'></img>
      </div>

      {/* Features */}
      <section className="EventFeatures">
        <div className="FeaturesLeft">
          <h2>Elevating Events with Innovation, Collaboration, and Excellence</h2>
        </div>

        <div className="FeaturesRight">
          <div className="FeatureBox">
            <div className="FeatureIcon">
              <FaLightbulb size={50} color="#ffffff" /> {/* Icon with white color */}
            </div>
            <div className="FeatureContent">
              <h3 className="hh3">Innovation</h3>
              <p className="pabout">
                At Gravity, we're committed to staying ahead of the curve with cutting-edge technology 
                and forward-thinking ideas. We're always pushing boundaries to deliver unique and 
                unforgettable experiences, constantly looking for new ways to help our clients stand apart.
              </p>
              <div className="LineSeparator"></div>
            </div>
          </div>

          <div className="FeatureBox">
            <div className="FeatureIcon">
              <FaHandsHelping size={50} color="#ffffff" /> {/* Icon with white color */}
            </div>
            <div className="FeatureContent">
              <h3 className="hh3">Collaboration</h3>
              <p className="pabout">
                We believe that collaboration is key to any successful event planning. Our team works 
                alongside you, ensuring your vision is clearly understood and executed to perfection.
              </p>
              <div className="LineSeparator"></div>
            </div>
          </div>

          <div className="FeatureBox">
            <div className="FeatureIcon">
              <FaAward size={50} color="#ffffff" /> {/* Icon with white color */}
            </div>
            <div className="FeatureContent">
              <h3 className="hh32">Excellence</h3>
              <p className="pabout2">
                At Gravity, we're dedicated to excellence in everything we do. Attention to detail, 
                creativity, and precision in execution ensure that every event exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Aboutnm/>

      {/* Speakers */}
      <section className="EventSpeakers" id="speakerSection">
        <h2 className="speaker22">Speakers</h2>
        <div className="SpeakerGrid">
          {speakers.map((speaker, index) => (
            <div key={index} className="SpeakerCard">
              <img src={speaker.image} alt={speaker.name} className="SpeakerImage" />
              <div className="SpeakerOverlay">
                <h3 className="SpeakerName">{speaker.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attendees (Slider) */}
      <section className="EventAttendees">
        <Slider {...sliderSettings}>
          {attendees.map((attendee) => (
            <div key={attendee.id} className="AttendeeCard">
              <img src={attendee.image} alt={`Attendee ${attendee.id}`} className="AttendeeImage" />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default About;
