import React from 'react';
import CardActive from '../../components/Card/CardActive';
import FadeInSection from '../../components/Fade/Fade';
import MiddleFade from '../Fade/MiddleFade';
import styles from './CustomCharacter.module.scss'

const CustomCharacter = () => {
  return (
    <div className={`${styles.customCharacter} d-flex`}>
      <div className={`${styles.customCharacterBox} m-auto`}>
        <FadeInSection>
          <h1 className={`home-title ${styles.customCharacterTitle}`}>
            Own the most<br/>
            advanced  warrior
          </h1>
        </FadeInSection>
        <div className={`${styles.customCharacterContent} Home-content-header`}>
          <MiddleFade className="glass-4">
            <CardActive className={styles.characterCard} type="Inactive" >
              <div className={styles.characterCardItem}>
                <div>Customize Face, Age &#38; Body</div>
                <ul>
                  <li>Real Facial Recognition</li>
                  <li>BODY: Ectomorph / Mesomorph / Endomorph</li>
                  <li>AGE: Young / Matured</li>
                </ul>
              </div>
            </CardActive>
          </MiddleFade>
          <MiddleFade className="glass-4">
            <CardActive className={styles.characterCard} type="Inactive" >
              <div className={styles.characterCardItem}>
                <div>Customize Weapon</div>
                <ul>
                  <li>Primary &#38; Secondary Gun</li>
                  <li>Melee weapon</li>
                  <li>Mode kit</li>
                </ul>
              </div>
            </CardActive>
          </MiddleFade>
          <MiddleFade className="glass-4">
            <CardActive className={styles.characterCard} type="Inactive" >
              <div className={styles.characterCardItem}>
                <div>Customize Gear</div>
                <ul>
                  <li>GEAR: Augmented Reaction / Resource Integration / Predator</li>
                  <li>SUIT: Bat / Nano / Variant</li>
                </ul>
              </div>
            </CardActive>
          </MiddleFade>
        </div>
      </div>
    </div>
  );
};

export default CustomCharacter;
