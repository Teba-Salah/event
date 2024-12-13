

import './Blogs.css';
import React, { useState } from 'react';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const posts = [
   
    { category: 'Leadership and Management', date:'December 2024', title: '10 TIPS FOR SUCCESSFUL EVENT PLANNING', author: 'Paul Anderson', image: 'https://i.pinimg.com/564x/67/c5/af/67c5affec1f91e9b23377b10b563ad8e.jpg' },
    { category: 'Innovation and Technology', date: 'December 2024', title: 'WHY EVENTS MATTER: THE POWER OF FACE-TO-FACE INTERACTION', author: 'Mary Vidal', image: 'https://i.pinimg.com/564x/58/88/3e/58883ef2b7e6d63cf6b15ce54368d800.jpg' },
    { category: 'Entrepreneurship and Startups', date: 'December 2024', title: 'THE FUTURE OF EVENT TECHNOLOGY: WHAT TO EXPECT IN 2023', author: 'Anthony Huges', image: 'https://saintlucyrepresents.com/images/2018-10-19_nespresso1379_desktop_large.jpg?crc=3805918392' },
    { category: 'Business Strategy and Growth', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/ef/dc/32/efdc32e80ea36042fa60b6fb6a7cabfc.jpg' },
    { category: 'Workforce and Talent Management', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/29/d7/6e/29d76e75e29b7dc91f085410b6d77107.jpg' },
    { category: 'Leadership and Management', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/35/80/01/358001821e94b2cd80574f2a5dac2043.jpg' },
    { category: 'Innovation and Technology', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/9c/2f/e6/9c2fe63ea94c71fa41095ca2c6d254ec.jpg' },
    { category: 'Entrepreneurship and Startups', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/de/e9/3a/dee93aafe2a6398a54f4dc9a343e2d82.jpg' },
    { category: 'Business Strategy and Growth', date: 'December 2024', title: 'The Future of Work: How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/81/89/3d/81893d3dc1d5882d5a7f2813190dd9b6.jpg' },
  
  
  
    { category: 'Leadership and Management', date:'December 2024', title: '10 TIPS FOR SUCCESSFUL EVENT PLANNING', author: 'Paul Anderson', image: 'https://i.pinimg.com/564x/bc/44/cf/bc44cf574899caa83bd42b592621ded2.jpg' },
    { category: 'Innovation and Technology', date: 'December 2024', title: 'WHY EVENTS MATTER: THE POWER OF FACE-TO-FACE INTERACTION', author: 'Mary Vidal', image: 'https://i.pinimg.com/564x/19/b6/84/19b6849d3648e50fee1dea402f2cc4cc.jpg' },
    { category: 'Entrepreneurship and Startups', date: 'December 2024', title: 'THE FUTURE OF EVENT TECHNOLOGY: WHAT TO EXPECT IN 2023', author: 'Anthony Huges', image: 'https://i.pinimg.com/564x/c5/ff/49/c5ff49fe809b1cb9171eac4fc7ce1e6e.jpg' },
    { category: 'Business Strategy and Growth', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/ea/31/20/ea31205cc37e387a310e4e4bb2b4f920.jpg' },
    { category: 'Workforce and Talent Management', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/c8/63/d7/c863d7c6d975acc724db4192ecf2b6cf.jpg' },
    { category: 'Leadership and Management', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/9a/81/3f/9a813fc6f487e50bdb5f48d92136bcd6.jpg' },
    { category: 'Innovation and Technology', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/13/8d/35/138d352e4b094971fbbd21a618cf6840.jpg' },
    { category: 'Entrepreneurship and Startups', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/7c/5c/b8/7c5cb8c3ba1d004f78010979b787179b.jpg' },
    { category: 'Business Strategy and Growth', date: 'December 2024', title: 'The Future of Work: How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/c8/20/7f/c8207fdd32e2299f6350a6a7d1da6540.jpg' },
  
  
  
  
    { category: 'Leadership and Management', date: 'December 2024', title: '10 TIPS FOR SUCCESSFUL EVENT PLANNING', author: 'Paul Anderson', image: 'https://i.pinimg.com/564x/bc/44/cf/bc44cf574899caa83bd42b592621ded2.jpg' },
    { category: 'Innovation and Technology', date: 'December 2024', title: 'WHY EVENTS MATTER: THE POWER OF FACE-TO-FACE INTERACTION', author: 'Mary Vidal', image: 'https://i.pinimg.com/564x/19/b6/84/19b6849d3648e50fee1dea402f2cc4cc.jpg' },
    { category: 'Entrepreneurship and Startups', date: 'December 2024', title: 'THE FUTURE OF EVENT TECHNOLOGY: WHAT TO EXPECT IN 2023', author: 'Anthony Huges', image: 'https://i.pinimg.com/564x/c5/ff/49/c5ff49fe809b1cb9171eac4fc7ce1e6e.jpg' },
    { category: 'Business Strategy and Growth', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/ea/31/20/ea31205cc37e387a310e4e4bb2b4f920.jpg' },
    { category: 'Workforce and Management', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/c8/63/d7/c863d7c6d975acc724db4192ecf2b6cf.jpg' },
    { category: 'Leadership and Management', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/9a/81/3f/9a813fc6f487e50bdb5f48d92136bcd6.jpg' },
    { category: 'Innovation and Technology', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/13/8d/35/138d352e4b094971fbbd21a618cf6840.jpg' },
    { category: 'Entrepreneurship and Startups', date: 'December 2024', title: 'How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/7c/5c/b8/7c5cb8c3ba1d004f78010979b787179b.jpg' },
    { category: 'Business Strategy and Growth', date: 'December 2024', title: 'The Future of Work: How to adapt and thrive in a rapidly changing world', author: 'Leah Kimby', image: 'https://i.pinimg.com/564x/c8/20/7f/c8207fdd32e2299f6350a6a7d1da6540.jpg' },
  
  ];

  const categories = [
    'All', 'Innovation and Technology', 'Leadership and Management', 'Entrepreneurship and Startups' ,'Business Strategy and Growth','Workforce and Management'
  ];

  
  const sortedAndFilteredPosts = [...posts]
    .filter(post => selectedCategory === "All" || post.category === selectedCategory) 
    .sort((a, b) => new Date(b.date) - new Date(a.date)); 

  const totalPages = Math.ceil(sortedAndFilteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedAndFilteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className='tt'>
      <section className="sidebarrr">
        <div className="categoriesblogs">
          <h2 className='h2blogshh'>Categories</h2>
          <div>
            {categories.map((category, index) => (
              <p
                key={index}
                className={`pblogs ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1); 
                }}
                style={{ cursor: 'pointer' }}
              >
                {category}
              </p>
            ))}
          </div>
        </div>

        <div className="latest-postss">
          <h2 className='h2blogs'>Latest posts</h2>
          {sortedAndFilteredPosts.slice(0, 3).map((post, index) => (
            <div key={index} className="post-item">
              <p className="post-dateblogs">{post.date}</p>
              <p className="post-titleblogs">{post.title}</p>
              <p className="post-authorblogs">by {post.author}</p>
            </div>
          ))}
        </div>

        <div className="tagsblogs">
          <h2 className='pop'>Popular Tags</h2>
          <div className="tag-containerblogs">
            <span className="tagblogs">leadership</span>
            <span className="tagblogs">innovation</span>
            <span className="tagblogs">entrepreneurship</span>
            <span className="tagblogs">strategy</span>
            <span className="tagblogs">workforce</span>
            <span className="tagblogs">digital transformation</span>
          </div>
        </div>
      </section>

      <section className="contentblogss">
        <div className="post-gridblogs">
          {currentPosts.map((post, index) => (
            <div key={index} className="postblogs">
              <img className='imgblogs' src={post.image} alt={`Post ${index + 1}`} />
              <h3 className='h33blo'>{post.date}</h3>
              <p className='ppblo'>{post.title}</p>
              <p className='ppblo'>by {post.author}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            className="pagination-button"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;


