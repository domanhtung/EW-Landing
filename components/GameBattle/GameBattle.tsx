import React, { useRef, useState } from 'react';
import styles from './GameBattle.module.scss';
import Slider from "react-slick";
import { listBattleImg } from '../../Helpers/constants';
import PrevArrow from '../../components/Arrow/PrevArrow';
import NextArrow from '../../components/Arrow/NextArrow';
import CardActive from '../../components/Card/CardActive';
import ButtonLightBlue from '../../components/Button/ButtonLightBlue';
import FadeInSection from '../../components/Fade/Fade';

const GameBattle = function () {
  const sliderRef = useRef<any>();
  const [currentMode, setCurrentMode] = useState(1);
  const [isNextBack, setIsNextBack] = useState(true);
  const [currentBattleLevel, setCurrentBattleLevel] = useState(listBattleImg[0].image[0]);
  const [otherBattleLevel, setOtherBattleLevel] = useState([listBattleImg[0].image[1], listBattleImg[0].image[2]])

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const next = () => {
    if(sliderRef && isNextBack) {
      setIsNextBack(false);
      sliderRef.current.slickNext();
      const nextMode = currentMode === 3 ? 1 : currentMode + 1;
      handleNextBack(nextMode)
      setTimeout(() => {
        setIsNextBack(true);
      }, 600);
    }
  }

  const prev = () => {
    if(sliderRef && isNextBack) {
      setIsNextBack(false);
      sliderRef.current.slickPrev();
      const prevMode = currentMode === 1 ? 3 : currentMode - 1;
      handleNextBack(prevMode)
      setTimeout(() => {
        setIsNextBack(true);
      }, 600);
    }
  }

  const handleNextBack = (mode: any) => {
    setCurrentMode(mode);
    const level = listBattleImg[mode - 1]?.image.find(x => x.id === 0) as any;
    const otherLevel = listBattleImg[mode - 1]?.image.filter(X => X.id !== 0) as any;
    setTimeout(() => {
      setCurrentBattleLevel(level);
      setOtherBattleLevel(otherLevel);
    }, 400);
  }

  const handleChangeBattleLevel = (key: any) => {
    const level = listBattleImg[currentMode - 1]?.image.find(x => x.id === key) as any;
    const otherLevel = listBattleImg[currentMode - 1]?.image.filter(X => X.id !== key) as any;
    setCurrentBattleLevel(level);
    setOtherBattleLevel(otherLevel);
  }

  const handleAfterChange = (e: any) => {
    handleNextBack(e + 1)
  }

  return (
    <div className={`${styles.gameBattle} d-flex`}>
      <div className={`${styles.gameBattleBox} m-auto`}>
        <FadeInSection>
          <h1 className="home-title">
            Win The most cinematic<br/>
            and adventurous battles
          </h1>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.sliderZone}>
            <PrevArrow className={styles.prevArrow} onClick={() => prev()} />
            <Slider
              className={styles.gameBattleSlider}
              ref={sliderRef}
              afterChange={(e: any) => handleAfterChange(e)}
              {...settings}
            >
              {
                listBattleImg.map((item) => {
                  return (
                    <div key={item.id} className={`${styles.gameBattleContent} Home-content-header`}>
                      <div className={styles.gameBattleContentText}>
                        <h5>Game modules</h5>
                        <h1 className='linear-blue-text'>{item.title}
                        </h1>
                        <p>{item.content}</p>
                        <ButtonLightBlue className="tablet-bigger-media" >
                          <div>Play now for free!</div>
                        </ButtonLightBlue>
                      </div>
                      <div className={styles.gameBattleContentImage}>
                        <div key={item.id} className={styles.gameBattleContentCard}>
                          <div className={styles.smallBattleImg}>
                            {
                              otherBattleLevel.map((item: any, index: number) => {
                                return (
                                  <img key={index} src={item.img} alt="" onClick={() => handleChangeBattleLevel(item.id)} />
                                )
                              })
                            }
                          </div>
                          <CardActive type="Inactive" >
                            <img className={styles.gameBattleImageItem} src={currentBattleLevel.img} alt="" />
                          </CardActive>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
            <NextArrow className={styles.nextArrow} onClick={() => next()} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <ButtonLightBlue className="mobile-media button-battle">
            <div>Play now for free!</div>
          </ButtonLightBlue>
        </FadeInSection>
      </div>
    </div>
  );
};
export default GameBattle;
