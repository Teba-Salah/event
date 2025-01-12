
import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import eventData1 from './EventData'; 
import calendarIcon from './imges/Calendar.png';
import clockIcon from './imges/image 35.png';
import locationIcon from './imges/location_on.png';
import userIcon from './imges/image 34.png';
import speakerImage from './imges/Wendy_OBeirne_Brand_Photography_Bry_Penney-7634.jpg';
import event1Image from './imges/jjj(3).png';
import event2Image from './imges/image22 (3).png';
import event3Image from './imges/image33 (3).png';
import './DateAndTimeCard.css';
import { Link } from 'react-router-dom';



const EventDetail = () => {
  const { eventId } = useParams();
  const Navigate = useNavigate();
  const event = eventData1[eventId]; 

  if (!event) return <div>Event not found</div>;

  const EventCard = ({ image, title, date }) => (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-details">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h2 style={styles.logo}>EVENTIFY</h2 >
        
      </header>

      {/* Main Content */}
     
      <main style={styles.mainContent}>
     
        {/* Event Info Section */}
        <div style={{ ...styles.eventInfo, backgroundImage: `url(${event.image})` }} >
        
          <button style={styles.backButton} onClick={() =>Navigate(-1)}>← BACK</button>
          <h2 className='hh222' style={styles.eventTitle}>Digital Marketing Conference</h2>
          <p style={styles.eventDescription} className="color" >
            Join us for a full-day conference on the latest trends and best practices in digital marketing. Led by renowned digital marketing expert Mark Johnson, this conference will cover topics such as SEO, PPC, social media marketing, and more. Don't miss this opportunity to learn from the best and take your digital marketing skills to the next level.
          </p>
        </div>

        {/* Content Container */}
        <div style={styles.contentContainer}>
         
          {/* About Event Section */}
          <div style={styles.aboutEvent}>
            <h3 style={styles.sectionTitle}>About Event</h3>
            <p style={styles.aboutDescription} className='marg'> 
              Join us for an exciting one-day conference on the latest trends and best practices in digital marketing. Led by renowned digital marketing expert Mark Johnson, this conference will provide valuable insights and practical tips for marketers looking to elevate their digital marketing strategies.
              <br /><br />
              The conference will cover a wide range of topics, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and more. Attendees will have the opportunity to learn from industry experts, network with peers, and gain valuable insights into the latest digital marketing trends.
              <br /><br />
              In addition to the informative sessions, the conference will also feature interactive workshops and panel discussions, where attendees can get hands-on experience and learn from real-world case studies. Whether you're a seasoned digital marketer or just starting out, this conference is the perfect opportunity to learn from the best and take your digital marketing skills to the next level.
            </p>
          </div>

          {/* Date and Time Card */}
          <div className="card-Date">
      <div className="card-Date-header">Date and Time</div>
      <div className="card-Date-content">
        <div className="info-Date">
          <img src={calendarIcon} alt="Calendar" className="icon-Date" />
          <span>March 17 / 2025</span>
        </div>
        <div className="info-Date">
          <img src={clockIcon} alt="Clock" className="icon-Date" />
          <span>9:00AM - 6:00PM</span>
        </div>
        <div className="info-Date">
          <img src={locationIcon} alt="Location" className="icon-Date" />
          <span>Baghdad-Hub200</span>
        </div>
        <div className="info-Date">
          <img src={userIcon} alt="User" className="icon-Date" />
          <span>Ammar Ali</span>
        </div>
      </div>
      <button className="buy-ticket"> <Link to="/Ti" >BUY TICKET </Link></button>
    </div>


    
        </div>
        <div className="speaker-section">
        <h2 className='h2j'>Speaker</h2>
      <div className="speaker-info">
        <img src={speakerImage} alt="Speaker" className="speaker-image" />
        <div className='speaker-content'>
        <h3 className='speakerinfo'>Mina Johnson</h3>
        <p className='speakerinfo'>
          A leading digital marketing expert with over 15 years of experience in the industry.
          He has worked with some of the biggest brands in the world and has helped numerous
          businesses improve their online presence and drive revenue growth through digital marketing.
        </p>
        <p className='speakerinfo'>
          <strong>Contact Info:</strong> <br />
          <a href="http://www.markjohnson.com">www.markjohnson.com</a> <br />
          <a href="mailto:mark@markjohnson.com">mark@markjohnson.com</a>
        </p>
      </div>
      </div>
      
      <div className="events-list">
        <EventCard
          image={event1Image}
          title="Creative Industries Symposium"
         
        />
        <EventCard
          image={event2Image}
          title="Social Media Marketing Summit"
          
        />
        <EventCard
          image={event3Image}
          title="Search Engine Optimization Expo"
          
        />
      </div>
    </div>
      </main>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    backgroundColor: '#0b132b',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  header: {
    width: '100%',
    maxWidth: '1024px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '5px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #1e2a47',
    color: '#ffffff',
    backgroundColor: '#1e2a47',
  },
  contactButton: {
    backgroundColor: '#AF621B',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  mainContent: {
    width: '100%',
    maxWidth: '1024px',
  },
  eventInfo: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  backButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  eventTitle: {
    fontSize: '50px',
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: '20px',
    lineHeight: '1.5',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '60px',
  },
  aboutEvent: {
    width: '60%',
    paddingRight: '20px',
  },
  sectionTitle: {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  aboutDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  dateTimeCard: {
    width: '35%',
    height: '400px',

    backgroundColor: '#ff5c3c',
    padding: '20px',
    borderRadius: '25px',
    color: 'white',
  },
  dateTimeList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '16px',
    lineHeight: '1.8',
  },
  buyTicket: {
    width: '100%',
    padding: '10px',
    color: '#ff5c3c',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default EventDetail;
