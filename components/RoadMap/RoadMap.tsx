import React, { useEffect, useRef, useState } from "react";
import SelectLightBlue from "../../components/Button/SelectLightBlue";
import styles from './RoadMap.module.scss';
import PrevArrow from '../../components/Arrow/PrevArrow';
import NextArrow from '../../components/Arrow/NextArrow';
import CardActive from '../../components/Card/CardActive';
import { isCompleteByQuarter, getCurrentQuarter } from "../../Helpers/utils";
import { timeLines, quarterSelectData } from "../../Helpers/constants";
import FadeInSection from "../../components/Fade/Fade";


const RoadMap = function () {
  const sliderRef = useRef<any>();
  const [currentMode, setCurrentMode] = useState(1);
  const [quarterValue, setQuarterValue] = useState(quarterSelectData[0]);
  const [quarterSelect, setQuarterSelect] = useState([quarterSelectData[0]]);
  const [yearSelect] = useState([{title: 2021, value: 2021}, {title: 2022, value: 2022}, {title: 2023, value: 2024}]);

  useEffect(() => {
    const current = getCurrentQuarter();
    const value = quarterSelectData.find(data => (data.value === current.quarter) && (data.year === current.year)) as any;
    const quarterSelectList = quarterSelectData.filter(data => data.year === current.year);
    const currentTimeLine = timeLines.find(timeLine => (timeLine.value === current.quarter) && (timeLine.year === current.year)) as any;
    setCurrentMode(currentTimeLine.id)
    const translateData = (currentTimeLine.id - 1) * (250 + 20);
    handleTransform(translateData);
    setQuarterValue(value);
    setQuarterSelect(quarterSelectList);
  }, [])

  const handleSelectValue = (key: any) => {
    const current = timeLines.find(timeLine => timeLine.id === key) as any;
    const value = quarterSelectData.find(data => (data.value === current.value) && (data.year === current.year)) as any;
    const quarterSelectList = quarterSelectData.filter(data => data.year === current.year);
    setQuarterValue(value);
    setQuarterSelect(quarterSelectList);
  }

  const handleTransform = (number: number) => {
    sliderRef.current.style.transform = `translateX(-${number}px)`;
  }

  const next = () => {
    if(currentMode === timeLines.length) {
      return;
    }
    const translateData = currentMode * (250 + 20);
    handleTransform(translateData);
    setCurrentMode(currentMode + 1);
    handleSelectValue(currentMode + 1);
  }

  const prev = () => {
    if(currentMode === 1) {
      return;
    }
    const translateData = (currentMode - 2) * (250 + 20);
    handleTransform(translateData);
    setCurrentMode(currentMode - 1);
    handleSelectValue(currentMode - 1);
  }

  const onSelectQuarter = (value: any) => {
    const current = timeLines.find(timeLine => (timeLine.value === value) && (timeLine.year === quarterValue.year)) as any;
    const quarterSelectList = quarterSelectData.filter(data => data.year === current.year);
    setQuarterSelect(quarterSelectList);
    setQuarterValue(current);
    const translateData = (current.id - 1) * (250 + 20);
    setCurrentMode(current.id);
    handleTransform(translateData);
  }

  const onSelectYear = (value: any) => {
    const quarterSelectList = quarterSelectData.filter(data => data.year === value) as any;
    const currentTransform = timeLines.find(timeLine => (timeLine.value === quarterSelectList[0].value) && (timeLine.year === quarterSelectList[0].year)) as any;
    setQuarterSelect(quarterSelectList);
    setQuarterValue(currentTransform);
    const translateData = (currentTransform.id - 1) * (250 + 20);
    setCurrentMode(currentTransform.id);
    handleTransform(translateData);
  }

  return (
    <div className={`${styles.roadMap} d-flex`}>
      <div className={`${styles.roadMapBox} m-auto`}>
        <FadeInSection>
          <h1 className="home-title text-center">We are moving forwards</h1>
        </FadeInSection>
        <div className={`Home-content-header ${styles.roadMapContent}`}>
          <div className="mobile-media">
            <PrevArrow className={styles.prevArrow} onClick={() => prev()} />
          </div>
          <FadeInSection>
            <>
              <div className={styles.roadMapSelect}>
                <SelectLightBlue value={quarterValue.title}  options={quarterSelect} onClick={onSelectQuarter} />
                <SelectLightBlue value={quarterValue.year} options={yearSelect} onClick={onSelectYear} />
              </div>
              <div className={styles.roadMapSlide}>
                <div className="tablet-bigger-media">
                  <PrevArrow className={styles.prevArrow} onClick={() => prev()} />
                </div>
                <div ref={sliderRef} className={styles.roadMapZone}>
                  {
                    timeLines.map((item) => {
                      return (
                        <div className={`${styles.roadMapSlide} ${currentMode === item.id ? styles.slideCenter : styles.slideNear}`} key={item.id}>
                          <CardActive type={currentMode === item.id ? "Active" : "Inactive"} >
                            <div className={styles.roadMapItem}>
                              <div className={styles.roadMapItemIn}>
                                <div style={{color: (!isCompleteByQuarter(item.value, item.year) ? 'rgba(122, 201, 226, 1)' : '')}} className={styles.roadMapItemTextFirst}>
                                {
                                  item.id !== currentMode &&
                                  <div>{item.time}</div>
                                }
                                </div>
                                {
                                  item.texts.map((text, index) => {
                                    return (
                                      <div key={index} className={styles.roadMapItemTextIn}>
                                        <div className={styles.roadMapSlideContent}>
                                          {text.value}
                                          <div className={`${styles.roadMapDot} ${!!text.isDone ? styles.roadMapDone : ""}`}/>
                                        </div>
                                        <div className={styles.roadMapLine}/>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </CardActive>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="tablet-bigger-media">
                  <NextArrow className={styles.nextArrow} onClick={() => next()} />
                </div>
              </div>
            </>
          </FadeInSection>
          <div className="mobile-media">
            <NextArrow className={styles.nextArrow} onClick={() => next()} />
          </div>
        </div>
      </div>
    </div>
  )
};
export default RoadMap;
