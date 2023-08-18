import React, { useEffect } from "react";
import { Carousel } from "bootstrap";

const Home = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleControls");
    const carousel = new Carousel(carouselElement, {
      interval: 10000,
      keyboard: true,
    });

    return () => {
      carousel.dispose();
    };
  }, []);

  return (
    <div>
      <h1 className="mb-4" style={{ textAlign: "center", color: "#1DA1F2" }}>
        Welcome to ConnectX!
      </h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
        data-bs-keyboard="true"
        aria-label="Gallery"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/premium-photo/smiling-black-lady-hijab-sitting-home-with-cellphone-checking-social-network-browsing-web-video-chatting-online_116547-34223.jpg?w=2000"
              alt="Happy woman using phone"
              className="d-block w-100"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Staying connected</h5>
              <p>Using technology to stay in touch with friends and family</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://eadn-wc04-5142508.nxedge.io/wp-content/uploads/2018/07/078-social-media-website-links.jpg"
              alt="Social media icons"
              className="d-block w-100"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Connect on social media</h5>
              <p>
                We're active on platforms like Facebook, Instagram, and Twitter
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.builtinnyc.com/sites/www.builtinnyc.com/files/styles/ckeditor_optimize/public/inline-images/citizen-app-social-media-companies-nyc.jpg"
              alt="News article on social media"
              className="d-block w-100"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>The impact of social media</h5>
              <p>
                Social media has revolutionized the way we communicate and get
                news
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          aria-label="Previous"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          aria-label="Next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
