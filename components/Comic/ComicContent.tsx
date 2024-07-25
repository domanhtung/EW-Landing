import React, { useRef } from "react";
import { view1024, view700 } from "../../constants/Responsive";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import Slider from "react-slick";
import { useMediaQuery } from "../MediaQuery/MediaQuery";
import styles from './Comic.module.scss';
import CardActive from "../Card/CardActive";
import ROUTER_LINK from "../../constants/RouterLink";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";
import { comicList } from "../../Helpers/constants";

const ComicContent = () => {
    const isMobile = useMediaQuery(view700);
    const isTablet = useMediaQuery(view1024);
    const sliderRef = useRef<any>();

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : isTablet ? 3 : 4,
      slidesToScroll: 1,
    };

    const gotoPage = (page: any) => {
      window.location.pathname = page;
    }
  
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

    return (
        <div className={styles.comic}>
            <h1 className={styles.title}>READ OUR COMIC</h1>
            <div className={styles.content}>
                <div>
                    <PrevArrow className={styles.prev} onClick={() => prev()} />
                    <Slider className={styles.slickList} ref={sliderRef} {...settings}>
                      {
                        comicList?.map((item: any) => {
                          return (
                            <div key={item.id} className={styles.comicCard}>
                              <CardActive
                                type="Active"
                                onClick={() => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.FLIPBOOK}/${item.id}`)}
                                disabled={item.isReady ? false : true}
                              >
                                <div className={`${styles.comicBook} ${item.isReady ? "" : styles.comicBookDisable}`}>
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
                    <NextArrow className={styles.next} onClick={() => next()} />
                </div>
            </div>
            <Social />
            <Footer />
        </div>
    )
}
export default ComicContent;