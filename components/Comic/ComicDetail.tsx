/* eslint-disable react/display-name */
import React, {useEffect, useRef, useState} from 'react';
import styles from './Comic.module.scss';
import HTMLFlipBook from "react-pageflip";
import Slider from "react-slick";
import { useMediaQuery } from '../MediaQuery/MediaQuery';
import { view1024, view700 } from '../../constants/Responsive';
import Loading from "../../components/Loading/Loading";
import PrevArrow from '../Arrow/PrevArrow';
import NextArrow from '../Arrow/NextArrow';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';
import CardActive from '../Card/CardActive';
import BackArrow from '../Arrow/BackArrow';
import { useRouter } from "next/router";
import SEO from '../SEO';
import { comicChapter } from './Chapter';
import { comicList } from '../../Helpers/constants';

const Page = React.forwardRef((props: any, ref: any) => {
    const is640 = useMediaQuery(632);
    return (
        <div data-role={`page-${props.number}`} className="page" ref={ref}>
            <div className="page-content">
                {/*<h2 className="page-header">Page title - {props.number}</h2>*/}
                <div className="page-image">
                    <img className={(props.number ===11 && is640) ? 'float-right' : ""} src={props.image} alt="" />

                </div>
                <div className="page-text">{props.children}</div>
            </div>
        </div>
    );
});

const PageCover = React.forwardRef((props: any, ref: any) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard" >
            <div className="page-content">
                <div className="page-image">
                    <img src={props.image} alt="" />

                </div>
            </div>
        </div>
    );
});

const FlipBook = function FlipBook() {
    const router = useRouter()
    const flipBook = useRef<any>();
    const [isLoading, setIsLoading] = useState(true);
    const isMobile = useMediaQuery(view700);
    const isTablet = useMediaQuery(view1024);
    const sliderRef = useRef<any>();
    const [chapter, setChapter] = useState<any>();
    const { id } = router.query
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        if(id) {
            const currentChap = getChapter(id) as any;
            setChapter(currentChap);
        }
    }, [id])

    const getChapter = (key: any) => {
        return comicChapter[key - 1]
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

    const validSlide = () => {
        if(isMobile) {
            return 1;
        } else if(isTablet) {
            return 3;
        } else {
            return 4;
        }
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: validSlide(),
        slidesToScroll: 1,
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const onPage = (e: any) =>{}

    const onChangeOrientation = () => {}


    const prevButtonClick = () => {
        flipBook.current.pageFlip().flipPrev();
        // setPageIndex(flipBook?.current?.pageFlip()?.pages?.currentPageIndex);
        // console.log(flipBook?.current?.pageFlip()?.pages?.currentPageIndex)
    }

    const nextButtonClick = () =>{
        flipBook.current.pageFlip().flipNext();
    }

    const handleChangeComic = (e: any) => {
        const pageIdx = e?.object?.pages?.currentPageIndex ? e?.object?.pages?.currentPageIndex : 0;
        setPageIndex(pageIdx);
    }

    const gotoPage = (pageParam: any, isDisable: boolean) => {
        if(isDisable) {
            return;
        }
        window.location.href = pageParam;
    }

    if(!chapter) {
        return (
            <Loading />
        )
    }

    return (
        <div className={`${styles.comicDetail} ${styles.comic}`}>
            {
                isLoading  &&
                <Loading />
            }
            <div className={styles.buttonBackBox}>
                <div className={styles.buttonBack} onClick={() => router.back()}>
                    <BackArrow />
                    Back
                </div>
            </div>
            <div className={styles.titleDetail}>{chapter.title}</div>
            <div className={styles.flipBookDetail}>
                <HTMLFlipBook
                    width={550}
                    height={802}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onPage}
                    usePortrait={true}
                    onChangeOrientation={onChangeOrientation}
                    onChangeState={(e) => handleChangeComic(e)}
                    className={styles.flipBookDemo}
                    ref={flipBook}
                    style={{}}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={500}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={0}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    <PageCover image={chapter?.cover}/>
                    {chapter?.pages?.map((item: any) =>{
                        return (<Page number={item.id} image={item.image} key={item.id}/>)
                    })}
                </HTMLFlipBook>
                {
                    pageIndex > 0 &&
                    <PrevArrow className={styles.buttonPrev} onClick={() => prevButtonClick()} />
                }
                {
                    pageIndex < chapter?.pages?.length &&
                    <NextArrow className={styles.buttonNext} onClick={() => nextButtonClick()} />
                }
            </div>
            <div>
                <div className={styles.popular}>
                    <span>Popular&nbsp;</span>
                    <span>Now</span>
                </div>
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
                                        onClick={() => gotoPage(item.id, false)}
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
        </div>
    );
};

export default FlipBook;
