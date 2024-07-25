/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { HeaderProvider, useHeaderContext } from "../../Context/header.context";
import { view1024 } from "../../constants/Responsive";
import ROUTER_LINK from "../../constants/RouterLink";
import { checkPathname } from "../../Helpers/utils";
import { useMediaQuery } from "../MediaQuery/MediaQuery";

const disableHeader = ["staking", "metaverse"];

const Header = function Header() {
  const [showEvent, setShowEvent] = useState(false);
  const [pathname, setPathname] = useState('/');
  const [isTabletRes, setIsTabletRes] = useState(false);

  const isTablet = useMediaQuery(view1024);

  useEffect(() => {
    if(typeof window !== 'undefined') {
        setPathname(window.location.href);
    }
  }, [global?.window?.location?.href]);

  useEffect(() => {
    setIsTabletRes(isTablet);
  }, [isTablet])

  const handlePage = (value: any) => {
    if(value.code === ROUTER_LINK.INSIGHTS) {
      handleShowMenuEvent();
    } else {
      value.action();
    }
  }

  const gotoPage = (page: any) => {
    window.location.pathname = page;
    handleShowMenuEvent();
  }

  const handleShowMenuEvent = () => {
    setShowEvent(false);
    setShowEvent(!showEvent);
  }

  const gotoHome = () => {
    window.location.pathname = ""
  }

  return (
    <HeaderProvider>
      {
        isTabletRes ?
        <MobileHeader handlePage={handlePage} pathname={pathname} gotoHome={gotoHome} />
        :
        <HeaderComponent handlePage={handlePage} gotoPage={gotoPage} pathname={pathname} gotoHome={gotoHome} />
      }
    </HeaderProvider>
  )
};

type PropsPC = {
  handlePage: any
  gotoPage: any
  pathname: any
  gotoHome: any
}

const HeaderComponent = ({handlePage, gotoPage, pathname, gotoHome}: PropsPC) => {
  const {states} = useHeaderContext() as any;
  
  const gotoEvent = () => {
    window.open("https://event.epicwar.io/","_blank");
  };

  return (
    <div className={styles.header}>
      <img className={styles.logo} onClick={() => gotoHome()} src="/assets/images/Home/Header/epic_logo.png" alt="" />
      {
        states.listNav.map((item: any, index: number) => {
          return (
            <div
              data-role={checkPathname(item.code, pathname) ? "active" : "un-active"}
              key={item.id}
              id={styles["navbarLink" + index]}
              className={`
                ${styles.navbarLink} 
                ${item.code === ROUTER_LINK.INSIGHTS ? "dropdown" : ""} 
                ${disableHeader.some(x => x === item.code) ? styles.navbarLinkDisable : ""}
              `}
              onClick={() => handlePage(item)}
            >
              <div className={styles.title}>
                {item.title}
              </div>
              {
                item.code === ROUTER_LINK.INSIGHTS  &&
                <div className={`${styles.newEventItemBar} dropdown-content`}>
                  <div onClick={() => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.BLOG}`)} data-role={checkPathname(ROUTER_LINK.BLOG, pathname) ? "active" : "un-active"}>Blogs</div>
                  <div onClick={() => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.FLIPBOOK}`)} data-role={checkPathname(ROUTER_LINK.FLIPBOOK, pathname) ? "active" : "un-active"}>Comics</div>
                </div>
              }
              <div className={styles.headerUnderLine}/>
            </div>
          )
        })
      }
    </div>
  )
}

type PropsIcon = {
  action: any
}

const MenuIcon = ({ action }: PropsIcon) => {
  return (
    <svg
      onClick={() => action()}
      style={{ cursor: "pointer" }}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="13" height="2" fill="#F2F2F2"/>
      <rect y="12" width="13" height="2" fill="#F2F2F2"/>
      <rect y="6" width="18" height="2" fill="#F2F2F2"/>
    </svg>
  );
};

const CloseIcon = ({ action }: PropsIcon) => {
  return (
    <svg
      onClick={() => action()}
      style={{ marginLeft: 5, cursor: "pointer", zIndex: 110 }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.0002 0L7.99929 6L1.99982 0L0 2L5.99947 8L0 14L1.99982 16L7.99929 10L14.0002 16L16 14L10.0005 8L16 2L14.0002 0Z" fill="white"/>
    </svg>
  );
};

type PropsMobile = {
  handlePage: any
  pathname: any
  gotoHome: any
}

const MobileHeader = ({handlePage, pathname, gotoHome}: PropsMobile) => {
  const {states} = useHeaderContext() as any;
  const [isShowMenu, setIsShowMenu] = useState<boolean>();
  const [transaction, setTransaction] = useState('');

  const handleShowMenu = () => {
    document.body.style.overflow = 'hidden';
    setIsShowMenu(true);
    waitTransaction();
  };

  const handleCloseMenu = () => {
    document.body.style.overflow = 'auto';
    setIsShowMenu(false);
    waitTransaction();
  }

  const waitTransaction = () => {
    setTransaction('transaction');
    setTimeout(() => {
      setTransaction('');
    }, 500);
  }

  return (
    <div className={styles.mobileHeader}>
      <MenuIcon action={handleShowMenu} />
      <nav className={
        isShowMenu ? 
        `${styles.navShow} ${styles["navShow" + transaction]}` : 
        `${styles.navHidden} ${styles["navHidden" + transaction]}`}
      >
        <div className={styles.navItemRight}>
          <span data-role="button">
            <CloseIcon action={handleCloseMenu} />
          </span>
        </div>
        {states.listNavMobile.map((item: any) => {
          const disabled = disableHeader.some(x => x === item.code);
          return (
            <div
              data-role={checkPathname(item.code, pathname) ? "active" : "un-active"}
              className={styles.navItem}
              key={item.id}
              style={{ cursor: disabled ? "auto" : "pointer", opacity: disabled ? 0.5 : 1 }}
            >
              <div onClick={() => handlePage(item)}>
                {item.title}
              </div>
            </div>
          );
        })}
      </nav>
      <img className={styles.logoHeader} onClick={() => gotoHome()} src="/assets/images/Home/Header/epic_logo.png" alt="" />
    </div>
  );
};

export default Header;
