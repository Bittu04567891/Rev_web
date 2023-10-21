import React from "react";
import { all, events, manufacturing, leads } from "../gallery/data";
const Portfolio = () => {
  // const handleClick = (e) => {
  //   let images;
  //   if (e === "all")
  //     <div className="gallery">
  //       {images?.map((image, index) => (
  //         <div className="gallery-item" key={index}>
  //           <img src={image} alt={`Image ${index + 1}`} />
  //         </div>
  //       ))}
  //     </div>;
  // };
  return (
    <div className="sub_page">
      <section className="portfolio_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Work Portfolio</h2>
          </div>
          <div className="carousel-wrap ">
            <div className="filter_box">
              <nav className="owl-filter-bar">
                <a
                  href="#"
                  className="item active"
                  data-owl-filter="*"
                  // onClick={handleClick("all")}
                >
                  All
                </a>
                <a
                  href="#"
                  className="item"
                  data-owl-filter=".decorative"
                  // onClick={handleClick("manufacturing")}
                >
                  MANUFACTURING
                </a>
                <a
                  href="#"
                  className="item"
                  data-owl-filter=".facade"
                  // onClick={handleClick("induction")}
                >
                  INDUCTION
                </a>
                <a
                  href="#"
                  className="item"
                  data-owl-filter=".perforated"
                  // onClick={handleClick("events")}
                >
                  EVENTS
                </a>
                <a
                  href="#"
                  className="item"
                  data-owl-filter=".railing"
                  // onClick={handleClick("leads")}
                >
                  Leads
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="owl-carousel portfolio_carousel">
          <div className="item decorative">
            <div className="box">
              <div className="img-box">
                <img src="images/p1.jpg" alt="no image" />
                <div className="btn_overlay">
                  <a href="" className="">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item facade">
            <div className="box">
              <div className="img-box">
                <img src="images/p2.jpg" alt="" />
                <div className="btn_overlay">
                  <a href="" className="">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item perforated decorative">
            <div className="box">
              <div className="img-box">
                <img src="images/p3.jpg" alt="" />
                <div className="btn_overlay">
                  <a href="" className="">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item railing">
            <div className="box">
              <div className="img-box">
                <img src="images/p1.jpg" alt="" />
                <div className="btn_overlay">
                  <a href="" className="">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Portfolio;
