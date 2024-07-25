import React, { useRef, useState } from 'react';
import styles from './Marketplace.module.scss';
import CheckBox from '../../components/CheckBox/CheckBox';
import CardActive from '../../components/Card/CardActive';
import FadeInSection from '../../components/Fade/Fade';
import PrevArrow from '../Arrow/PrevArrow';
import NextArrow from '../Arrow/NextArrow';
import ButtonLightBlue from '../Button/ButtonLightBlue';

const map = '/assets/images/Home/Body/Battle_Map.png';
const gear = '/assets/images/Home/Body/Scifi_Armor.png';
const weapon = '/assets/images/Home/Body/Scifi_Gun.png';

const supplies = [
  { id: -2, title: 'Maps', image: map, data: 1 },
  { id: -1, title: 'Gears', image: gear, data: 2 },
  { id: 0, title: 'Weapons', image: weapon, data: 3 },
  { id: 1, title: 'Maps', image: map, data: 1 },
  { id: 2, title: 'Gears', image: gear, data: 2 },
  { id: 3, title: 'Weapons', image: weapon, data: 3 },
  { id: 4, title: 'Maps', image: map, data: 1 },
  { id: 5, title: 'Gears', image: gear, data: 2 },
  { id: 6, title: 'Weapons', image: weapon, data: 3 },
]

const Marketplace = function () {
  const sliderRef = useRef<any>();
  const [currentMode, setCurrentMode] = useState(1);
  const [isNextBack, setIsNextBack] = useState(true);

  const handleTransform = (number: number, mode: any, isTransition?: boolean) => {
    sliderRef.current.style.transition = isTransition ? '0.5s linear' : 'none';
    sliderRef.current.style.transform = `translateX(${number - 660}px)`;
    setCurrentMode(mode);
  }
  
  const next = () => {
    if(sliderRef && isNextBack) {
      setIsNextBack(false);
      const translateData = currentMode * (200 + 20);
      const nextMode = currentMode + 1;
      handleTransform(translateData * -1, nextMode, true);
      setTimeout(() => {
        setIsNextBack(true);
        if(currentMode === 3) {
          handleTransform(0, 0, false);
          setCurrentMode(1);
          const element1 = document.getElementById("card-4") as any;
          const element2 = document.getElementById("card-1") as any;
          const element3 = document.getElementById("image-1") as any;
          element1.style.transition = "none";
          element2.style.transition = "none";
          element3.style.transition = "none";
          setTimeout(() => {
            element1.style.transition = "0.5s linear";
            element2.style.transition = "0.5s linear";
            element3.style.transition = "0.5s linear";
          }, 100);
        }
      }, 600);
    }
  }

  const prev = () => {
    if(sliderRef && isNextBack) {
      setIsNextBack(false);
      const translateData = (currentMode - 2) * (200 + 20);
      const prevMode = currentMode - 1;
      handleTransform(translateData * -1, prevMode, true);
      setTimeout(() => {
        setIsNextBack(true);
        if(currentMode === -1) {
          handleTransform(0, 0, false);
          setCurrentMode(1);
          const element1 = document.getElementById("card-1") as any;
          const element2 = document.getElementById("card--2") as any;
          const element3 = document.getElementById("image-1") as any;
          element1.style.transition = "none";
          element2.style.transition = "none";
          element3.style.transition = "none";
          setTimeout(() => {
            element1.style.transition = "0.5s linear";
            element2.style.transition = "0.5s linear";
            element3.style.transition = "0.5s linear";
          }, 100);
        }
      }, 600);
    }
  }

  const gotoSlide = (value: any) => {
    if(sliderRef && isNextBack) {
      setIsNextBack(false);
      console.log(value + 2)
      const translateData = (1 - value) * (200 + 20);
      handleTransform(translateData, value, true);
      setCurrentMode(value);
      setTimeout(() => {
        setIsNextBack(true);
      }, 600);
    }
  }

  return (
    <div className={`${styles.marketplace} d-flex`}>
      <div className={`${styles.marketplaceBox} m-auto`}>
        <FadeInSection>
          <h1 className="home-title text-center">Epic Supplies</h1>
        </FadeInSection>
        <FadeInSection>
          <div className={`Home-content-header ${styles.marketplaceContent}`}>
            <div className={styles.marketplaceContentText}>
              <h6>Equip advanced NFT items on cross-chain marketplace to become mighty Epiceros on the battlefield!</h6>
              <ButtonLightBlue className={styles.buttonMarket} >
                <div>Go to Marketplace</div>
              </ButtonLightBlue>
              <div className='tablet-bigger-media'>
                <div className={styles.controlSlider}>
                  <PrevArrow className={styles.prevArrow} onClick={() => prev()} />
                  <CheckBox value={1} checked={[-2, 1, 4].some(x => x === currentMode)} onClick={gotoSlide} className={styles.checkBox} />
                  <CheckBox value={2} checked={[-1, 2, 5].some(x => x === currentMode)} onClick={gotoSlide} className={`${styles.checkBox} ${styles.checkBoxCenter}`} />
                  <CheckBox value={3} checked={[0, 3, 6].some(x => x === currentMode)} onClick={gotoSlide} className={styles.checkBox} />
                  <NextArrow className={styles.nextArrow} onClick={() => next()} />
                </div>
              </div>
            </div>
            <div className={styles.marketplaceContentLeft}>
              <div className={styles.marketplaceSlider}>
                <div ref={sliderRef} className={styles.marketplaceSliderAbsolute} >
                  {
                    supplies.map((item) => {
                      return (
                        <div
                          id={`card-${item.id}`}
                          key={item.id}
                          className={
                            `${styles.marketplaceContentCard} 
                            ${
                              currentMode === item.id ? 
                              styles.marketplaceSlideCurrent : 
                              styles.marketplaceSlideOther
                            }`
                          }
                        >
                          <CardActive type="Inactive" >
                            <div data-role={`item-${item.data}`} className={styles.marketplaceContentCardItem}>
                              <span>{item.title}</span>
                              <img id={`image-${item.id}`} className={styles.marketplaceContentItem} src={item.image} alt="" />
                            </div>
                          </CardActive>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='mobile-media'>
              <div className={styles.marketplaceContentText}>
                <div className={styles.controlSlider}>
                  <PrevArrow className={styles.prevArrow} onClick={() => prev()} />
                  <CheckBox value={1} checked={[-2, 1, 4].some(x => x === currentMode)} onClick={gotoSlide} className={styles.checkBox} />
                  <CheckBox value={2} checked={[-1, 2, 5].some(x => x === currentMode)} onClick={gotoSlide} className={`${styles.checkBox} ${styles.checkBoxCenter}`} />
                  <CheckBox value={3} checked={[0, 3, 6].some(x => x === currentMode)} onClick={gotoSlide} className={styles.checkBox} />
                  <NextArrow className={styles.nextArrow} onClick={() => next()} />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};
export default Marketplace;
