import React, { useEffect, useRef } from 'react';
import CardInactive from '../../components/Card/CardInactive';
import styles from './GameFeatures.module.scss';
import FadeInSection from '../../components/Fade/Fade';

const GameFeatures = function () {
  const ref = useRef<any>();
  
  return (
    <div ref={ref} className={`${styles.gameFeatures} d-flex`}>
      <div className={`${styles.gameFeaturesBox} m-auto`}>
        <FadeInSection>
          <h1 className="home-title text-center">
            Trust-worthy technology<br/>
            leverages your stunning <br className='mobile-media' />
            gaming experience
          </h1>
        </FadeInSection>
          <FadeInSection className="glass-4">
          </FadeInSection>

        <div className={`${styles.gameFeaturesContent} Home-content-header tablet-bigger-media`}>
          <div className={styles.gameFeaturesContentTop} >
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/Blockchain_technology.png" alt="" />
                  <div className={styles.gameTitle}>Blockchain technology</div>
                  <div className={styles.gameContent}>Secure transparent in-game assets.</div>
                </div>
              </CardInactive>
            </FadeInSection>
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/First_person_shooting.png" alt='' />
                  <div className={styles.gameTitle}>First person Shooting</div>
                  <div className={styles.gameContent}>Brings you close to VR experience with 360 view.</div>
                </div>
              </CardInactive>
            </FadeInSection>
          </div>
          <div className={styles.gameFeaturesContentBottom}>
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/free_earn.png" alt='' />
                  <div className={styles.gameTitle}>Free-to-play-to-earn</div>
                  <div className={styles.gameContent}>Removes all barriers for you to start earning.</div>
                </div>
              </CardInactive>
            </FadeInSection>
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/Cooperation_role_play.png" alt='' />
                  <div className={styles.gameTitle}>Cooperation Role Play</div>
                  <div className={styles.gameContent}>Requires tactical teamwork and enhances team spirit.</div>
                </div>
              </CardInactive>
            </FadeInSection>
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/Gaming_DAO.png" alt='' />
                  <div className={styles.gameTitle}>Gaming DAO</div>
                  <div className={styles.gameContent}>Allows you to speak up for the community</div>
                </div>
              </CardInactive>
            </FadeInSection>
          </div>
        </div>

        <div className={`${styles.gameFeaturesContent} Home-content-header mobile-media`}>
          <div className={styles.gameFeaturesContentTop} >
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/Blockchain_technology.png" alt="" />
                  <div className={styles.gameTitle}>Blockchain technology</div>
                  <div className={styles.gameContent}>Secure transparent in-game assets.</div>
                </div>
              </CardInactive>
            </FadeInSection>
          </div>
          <div className={styles.gameFeaturesContentTop} >
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/First_person_shooting.png" alt='' />
                  <div className={styles.gameTitle}>First person Shooting</div>
                  <div className={styles.gameContent}>Brings you close to VR experience with 360 view.</div>
                </div>
              </CardInactive>
            </FadeInSection>
            <FadeInSection className="glass-4">
              <CardInactive className={styles.gameFeatureContentBox} type="Blue">
                <div className={styles.gameFeaturesItem}>
                  <img src="/assets/images/Home/Body/free_earn.png" alt='' />
                  <div className={styles.gameTitle}>Free to play to earn</div>
                  <div className={styles.gameContent}>Removes all barriers for you to start earning.</div>
                </div>
              </CardInactive>
            </FadeInSection>
          </div>
          <div className={styles.gameFeaturesContentBottom}>
          <FadeInSection className="glass-4">
            <CardInactive className={styles.gameFeatureContentBox} type="Blue">
              <div className={styles.gameFeaturesItem}>
                <img src="/assets/images/Home/Body/Cooperation_role_play.png" alt='' />
                <div className={styles.gameTitle}>Cooperation Role Play</div>
                <div className={styles.gameContent}>Requires tactical skill, enhances team spirit.</div>
              </div>
            </CardInactive>
          </FadeInSection>
          <FadeInSection className="glass-4">
            <CardInactive className={styles.gameFeatureContentBox} type="Blue">
              <div className={styles.gameFeaturesItem}>
                <img src="/assets/images/Home/Body/Gaming_DAO.png" alt='' />
                <div className={styles.gameTitle}>Gaming <br/> DAO</div>
                <div className={styles.gameContent}>Allows you to speak up for the community</div>
              </div>
            </CardInactive>
          </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  )
};
export default GameFeatures;
