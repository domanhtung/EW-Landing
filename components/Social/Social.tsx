import React from 'react';
import ButtonLightBlue from '../../components/Button/ButtonLightBlue';
import styles from './Social.module.scss';
const discord = '/assets/images/Home/Body/icon_discord.png';
const linkedIn = '/assets/images/Home/Body/icon_LinkedIn.png';
const telegram = '/assets/images/Home/Body/icon_telegram.png';
const tiktok = '/assets/images/Home/Body/icon_tiktok.png';
const facebook = '/assets/images/Home/Body/icon_facebook.png';
const medium = '/assets/images/Home/Body/icon_medium.png';
const twitter = '/assets/images/Home/Body/icon_twitter.png';
const youtube = '/assets/images/Home/Body/icon_youtube.png';
import FadeInSection from '../../components/Fade/Fade';
import { IconDiscord, IconLinkedIn, IconTelegram, IconTikTok, IconFacebook, IconMedium, IconTwitter, IconYoutube } from '../../Helpers/socialIcon';

const socials = [
  {component: <IconDiscord />, key: 'discord'}, 
  {component: <IconLinkedIn />, key: 'linkedIn'}, 
  {component: <IconTelegram />, key: 'telegram'}, 
  {component: <IconTikTok />, key: 'tiktok'}, 
  {component: <IconFacebook />, key: 'facebook'}, 
  {component: <IconMedium />, key: 'medium'}, 
  {component: <IconTwitter />, key: 'twitter'}, 
  {component: <IconYoutube />, key: 'youtube'}
];

const Social = function () {
  const handleRedirectCommunity = (e: any) => {
    switch (e) {
      case 'telegram':
        window.open('https://t.me/epicwarglobal', '_blank');
        break;
      case 'discord':
        window.open('https://discord.com/invite/j8ZgAkgRg6', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/the_epic_war', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/EpicWar.official', '_blank');
        break;
      case 'linkedIn':
        window.open('https://www.linkedin.com/company/epicwar/', '_blank');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/channel/UCf5wiedwlGCm1F-bmYND72g', '_blank');
        break;
      case 'tiktok':
        window.open('https://www.tiktok.com/@epicwarofficial', '_blank');
        break;
      case 'medium':
        window.open('https://medium.com/epicwar', '_blank');
        break;
      default: break;
    }
  };
  return (
    <div className={`${styles.social} d-flex`}>
      <div className={`${styles.socialBox} m-auto`}>
        <FadeInSection>
          <div className={styles.socialTitle}>want to join us now?</div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.socialIcon}>
            {
              socials.map((item, index) => {
                return (
                  <ButtonLightBlue key={index} isSmall onClick={() => handleRedirectCommunity(item.key)}>
                    <div className={styles.socialItem}>
                      {item.component}
                    </div>
                  </ButtonLightBlue>
                )
              })
            }
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};
export default Social;
