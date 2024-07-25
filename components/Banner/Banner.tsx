import React from "react";
import ButtonLightBlue from "../Button/ButtonLightBlue";
import styles from './Banner.module.scss';
import Slider from "react-slick";
import { eventSlider } from "../../Helpers/constants";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return(
    <div className={`${styles.banner} d-flex`}>
      <div id={styles.bannerBox} className={`${styles.bannerBox} m-auto`}>
        <Slider {...settings}>
          {
            eventSlider.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <h6>{item.content}</h6>
                  <ButtonLightBlue onClick={() => item.action(item.page)}>
                    <div>{item.buttonTitle}</div>
                  </ButtonLightBlue>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Banner;