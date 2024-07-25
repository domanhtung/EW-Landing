import React from 'react';
import styles from './Partners.module.scss';
import CardPartner from '../../components/Card/CardPartner';
import FadeInSection from '../../components/Fade/Fade';

const iceteaLab = '/assets/images/Home/Body/iceteaLab.png';
const ebiz = '/assets/images/Home/Body/ebizWorld.png';
const ncc = '/assets/images/Home/Body/NCC.png';

const partners = [{img: iceteaLab, key: 'iceteaLab'}, {img: ebiz, key: 'ebiz'}, {img: ncc, key: 'ncc'}];

const OurPartner = function () {
  const handleRedirectPartner = (e: any) => {
    switch (e) {
      case 'ebiz':
        window.open('https://ebizworldsolutions.com/', '_blank');
        break;
      case 'ncc':
        window.open('https://ncc.asia/', '_blank');
        break;
      case 'iceteaLab':
        window.open('https://icetea.io/', '_blank');
        break;
    }
  };

  return (
    <div className={`${styles.developPartner} d-flex`}>
      <div className={`${styles.developPartnerBox} m-auto`}>
        <FadeInSection>
          <h1 className="home-title text-center">Development partners</h1>
        </FadeInSection>
        <div className={`${styles.developPartnerContent} Home-content-header`}>
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
export default OurPartner;
