/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import LightStick from '../components/LightStick/LightStick';
import Loading from '../components/Loading/Loading';
import SoldierBackground from '../components/SoldierBackground/SoldierBackground';
import { view1024, view700 } from '../constants/Responsive';
import LazyLoad from 'react-lazyload';
import {useMediaQuery} from '../components/MediaQuery/MediaQuery';
import { getCurrentMedia } from '../Helpers/utils';
import PlanetCloud from '../components/PlanetCloud/PlanetCloud';
import ButtonHelp from '../components/Button/ButtonHelp';
import SEO from '../components/SEO';

const Banner = dynamic(() => import('../components/Banner/Banner'));
const StoryLine = dynamic(() => import('../components/StoryLine/StoryLine'));
const CustomCharacter = dynamic(() => import('../components/CustomCharacter/CustomCharacter'));
const GameBattle = dynamic(() => import('../components/GameBattle/GameBattle'));
const GameFeatures = dynamic(() => import('../components/GameFeatures/GameFeatures'));
const Marketplace = dynamic(() => import('../components/Marketplace/Marketplace'));
const RoadMap = dynamic(() => import('../components/RoadMap/RoadMap'));
const News = dynamic(() => import('../components/News/News'));
const Social = dynamic(() => import('../components/Social/Social'));
const OurPartner = dynamic(() => import('../components/Partners/OurPartner'));
const PartnerShip = dynamic(() => import('../components/Partners/PartnerShip'));
const monsterBg = '/assets/images/Home/Body/monster_bg.png';
const cloud = '/assets/images/Home/Body/cloud.png';
const API_WEB_URL = process.env.NEXT_PUBLIC_URL_ENDPOINT

const desktopBg = '/assets/images/Home/Background/desktopBg.png';

const components = [
  {id: 0, component: <Banner />, isLazy: false},
  {id: 1, component: <StoryLine />, isLazy: false},
  {id: 2, component: <CustomCharacter />, isLazy: false},
  {id: 3, component: <GameBattle />, isLazy: true},
  {id: 4, component: <GameFeatures />, isLazy: true},
  {id: 5, component: <Marketplace />, isLazy: true},
  {id: 6, component: <RoadMap />, isLazy: false},
  {id: 7, component: <News />, isLazy: true},
  {id: 8, component: <Social />, isLazy: true},
  {id: 9, component: <OurPartner />, isLazy: true},
  {id: 10, component: <PartnerShip />, isLazy: true}
];

const pcHeights = [1000, 1000, 900, 900, 1000, 600, 900, 700, 300, 500, 800];
const tabletHeights = [1000, 1000, 800, 700, 800, 700, 800, 500, 350, 250, 600];

const Home: NextPage = () => {
  const [isBg, setIsBg] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(true);
  const [heights, setHeights] = useState<any>();
  const isTablet = useMediaQuery(view1024);
  const isMobile = useMediaQuery(view700);
  const [currentMedia] = useState(getCurrentMedia());

  useEffect(() => {
    const imgBg = new Image() as any;
    imgBg.onload = () => { 
      setIsBg(true);
      setTimeout(() => {
        setLoadingTimeout(false);
      }, 500);
    }
    imgBg.src = desktopBg;
  }, [])

  useEffect(() => {
    const heightList = isTablet ? tabletHeights : pcHeights;
    setHeights(heightList);
  }, [isTablet])

  useEffect(() => {
    const innerWidth = getCurrentMedia();
    if(innerWidth !== currentMedia) {
      window.location.reload();
    }
  }, [isTablet, isMobile])

  const validLoading = () => {
    return !isBg 
  }

  const validLoadingPage = () => {
    return validLoading() || loadingTimeout;
  }

  return (
    <div style={{height: validLoadingPage() ? 'calc(100vh / 2)' : 'auto'}} className="relative home">
      <SEO
          url={`${API_WEB_URL}/`}
          openGraphType="website"
          schemaType="article"
          title="The Epic War - the 1st FPS blockchain game."
          description="Battle&#128163;. Earn. Shoot&#127919;. Grow&#128684;. Be the Hero of Your Own Epic Story &#128740;. Let's build the world of dreamers together!"
          image="/thumbnail.jpg"
      />
      {
        validLoadingPage() &&
        <Loading />
      }
      <img className='monster-background' src={monsterBg} alt="" />
      <img className='cloud-background' src={cloud} alt="" />
      <PlanetCloud />
      <div className='home-line-left'>
        <LightStick position="Top" />
      </div>
      <div className='home-line-right'>
        <LightStick position="Bottom" />
      </div>
      <SoldierBackground />
      <div className='marketplace-background-under' />
      <div style={{position: 'relative', zIndex: 5}} >
        {
          validLoading() ?
          <div></div>
          :
          <div className="home-content">
            {
              components.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    {
                      !item.isLazy ?
                      item.component
                      :
                      <LazyLoad key={item.id} height={heights[item.id]} >
                        {item.component}
                      </LazyLoad>
                    }
                  </div>
                )
              })
            }
            <ButtonHelp />
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home
