import React from 'react';

function Home() {
  return (
    <div className="landing-page">
      <section className="hero-section" style={{ backgroundColor: '#f5f5f5', padding: '40px' }}>
        <div className="container">
          <h1 style={{ fontSize: '32px', color: '#333' }}>Welcome to My Sports Rentals</h1>
          <p style={{ fontSize: '18px', color: '#666' }}>Find the best sports equipment for rent!</p>
        </div>
      </section>
      
      <section className="slide-section" style={{ backgroundColor: '#fff', padding: '40px' }}>
        <div className="container">
          <div className="slider">
            {/* Add your slide images here */}
            <img src="https://example.com/image1.jpg" alt="Slide 1" style={{ maxWidth: '100%', height: 'auto' }} />
            <img src="https://example.com/image2.jpg" alt="Slide 2" style={{ maxWidth: '100%', height: 'auto' }} />
            <img src="https://example.com/image3.jpg" alt="Slide 3" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
      
      <section className="content-section" style={{ backgroundColor: '#f5f5f5', padding: '40px' }}>
        <div className="container">
          <h2 style={{ fontSize: '24px', color: '#333', textAlign: 'left' }}>Why Choose Us?</h2>
          <ul style={{ fontSize: '18px', color: '#666', textAlign: 'left' }}>
            <li>Wide selection of sports equipment</li>
            <li>Competitive rental prices</li>
            <li>Convenient online booking</li>
            <li>Flexible rental periods</li>
          </ul>
          
          <p style={{ fontSize: '18px', color: '#666', textAlign: 'left' }}>Start exploring our catalog now and rent the sports equipment you need for your next adventure!</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
