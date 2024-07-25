import React from 'react';
import styles from './Partners.module.scss';
import CardPartner from '../../components/Card/CardPartner';
import FadeInSection from '../../components/Fade/Fade';

const iceteaLab = '/assets/images/Home/Body/iceteaLab.png';
const hg = '/assets/images/Home/Body/HGventureslogo.png';
const vc = '/assets/images/Home/Body/vesCapLogo.png';
const shima = '/assets/images/Home/Body/shimaLogo.png';
const kiwi = '/assets/images/Home/Body/KiwiLogo.png';
const appota = '/assets/images/Home/Body/appotaLogo.png';
const coinF = '/assets/images/Home/Body/LogoCoinF.png';
const crytoTime = '/assets/images/Home/Body/logoCryptoTime.png';
const deo = '/assets/images/Home/Body/DEOLogo.png';
const gts = '/assets/images/Home/Body/Logo GTS VENTURES_color 1.png';
const mh = '/assets/images/Home/Body/MH Ventures.png';
const cabo = '/assets/images/Home/Body/CaboCapital.png';
const kondr = '/assets/images/Home/Body/DAO-KONDR.png';

const partners = [
    {img: iceteaLab, key: 'iceteaLab'},
    {img: shima, key: 'shima'},
    {img: vc, key: 'vc'},
    {img: cabo, key: 'cabo'},
    {img: kiwi, key: 'kiwi'},
    {img: hg, key: 'hg'},
    {img: appota, key: 'appota'},
    {img: coinF, key: 'coinF'},
    {img: crytoTime, key: 'crytoTime'},
    {img: deo, key: 'deo'},
    {img: gts, key: 'gts'},
    {img: mh, key: 'mh'},
    // {img: kondr, key: 'kondr'}
];

const PartnerShip = function () {
  const handleRedirectPartner = (e: any) => {
    switch (e) {
      case 'shima':
        window.open('https://shima.capital/', '_blank');
        break;
      case 'iceteaLab':
          window.open('https://icetea.io/#/', '_blank');
          break;
      case 'vc':
        window.open('https://www.vespertine.capital/', '_blank');
        break;
      case 'hg':
        window.open('https://www.hgventures.io/', '_blank');
        break;
      case 'kiwi':
        window.open('https://kiwigroup.com.vn/', '_blank');
        break;
      case 'appota':
        window.open('https://appota.com/', '_blank');
        break;
      case 'coinF':
        window.open('https://coinf.io/', '_blank');
        break;
      case 'crytoTime':
        window.open('https://crypto-times.jp/', '_blank');
        break;
      case 'deo':
        window.open('http://deo.network/', '_blank');
        break;
      case 'cabo':
        window.open('https://cabocapital.io/', '_blank');
        break;
      case 'mh':
        window.open('https://www.mhventures.io/', '_blank');
        break;
      case 'gts':
        window.open('https://gts.ventures/?page_id=4460&lang=en', '_blank');
        break;
      case 'kondr':
        window.open('https://kondr.io/', '_blank');
        break;
    }
  };

  return (
    <div className={`${styles.invesPartner} d-flex`}>
      <div className={`${styles.invesPartnerBox} m-auto`}>
        <FadeInSection>
          <h1 className="home-title text-center">Investment partners</h1>
        </FadeInSection>
        <div className={`${styles.invesPartnerContent} Home-content-header`}>
          {
            partners.map((item, index) => {
              return (
                <FadeInSection className="glass-4" key={index}>
                  <div className={styles.partnerCard}>
                    <CardPartner onClick={() => handleRedirectPartner(item.key)} >
                      <div className={styles.partnerItem}>
                        <img src={item.img} alt="" />
                      </div>
                    </CardPartner>
                  </div>
                </FadeInSection>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
export default PartnerShip;
