import React, { useRef } from "react";
import styles from './StoryLine.module.scss';
import Slider from "react-slick";
import { view700 } from '../../constants/Responsive';
import ROUTER_LINK from "../../constants/RouterLink";
import PrevArrow from "../Arrow/PrevArrow";
import NextArrow from "../Arrow/NextArrow";
import CardActive from "../../components/Card/CardActive";
import FadeInSection from "../../components/Fade/Fade";
import { useMediaQuery } from "../MediaQuery/MediaQuery";
import { comicList } from "../../Helpers/constants";

const StoryLine = function () {
  const isMobile = useMediaQuery(view700);
  const sliderRef = useRef<any>();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };
  
  const next = () => {
    if(sliderRef) {
      sliderRef.current.slickNext();
    }
  }

  const prev = () => {
    if(sliderRef) {
      sliderRef.current.slickPrev();
    }
  }

  const gotoPage = (page: any) => {
    window.open(page, '_blank');
  }

  return (
    <div className={`${styles.storyLine} d-flex`}>
      <div className={`${styles.storyLineBox} m-auto`}>
        <img src="/assets/gifs/Onyscidus-Orb-min.gif" className={styles.storyLineMonster} alt="" />
        <FadeInSection>
          <>
            <h1 className="home-title">restore the planet</h1>
            <h5 className="Home-content-header">
              Nuclear war has brought Kepler 22-b to the edge of extinction.  
              Monsters are dominating the planet. Let&#39;s fight for the left alive. 
            </h5>
            <h6>Explore the whole stories</h6>
          </>
        </FadeInSection>
        <FadeInSection>
        </FadeInSection>
        <div className={styles.storyLineCommic}>
          <FadeInSection>
            <div className={styles.storyLineSlider}>
              <PrevArrow className={styles.prevArrow} onClick={() => prev()} />
              <Slider className={styles.slickList} ref={sliderRef} {...settings}>
                {
                  comicList?.map((item: any) => {
                    return (
                      <div key={item.id} className={styles.storyLineComicCard}>
                        <CardActive
                          type="Active"
                          onClick={() => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.FLIPBOOK}/${item.id}`)}
                          disabled={item.isReady ? false : true}
                        >
                          <div className={`${styles.storyComicBook} ${item.isReady ? "" : styles.storyComicBookDisable}`}>
                            <img src={item.cover} alt="" />
                          </div>
                        </CardActive>
                        <div className={styles.comicTitle}>{item.title}</div>
                        <div className={styles.comicChapter}>{item.chapter}</div>
                      </div>
                    )
                  })
                }
              </Slider>
              <NextArrow className={styles.nextArrow} onClick={() => next()} />
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
};
export default StoryLine;
