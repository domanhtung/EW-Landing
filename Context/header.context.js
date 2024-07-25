import * as React from "react";
import ROUTER_LINK from "../constants/RouterLink";

const HeaderContext = React.createContext(undefined);

function HeaderProvider({ children }) {
  const gotoWhitePaper = () => {
    fbq('init', '5236573753075681');
    fbq('track', 'ViewWhitePaper');
    window.open("https://whitepaper.epicwar.io","_blank");
  };

  const gotoPage = (key) => {
    window.location.pathname = key
  }

  const gotoOtherWindow = (key) => {
    window.open(key,"_blank");
  }

  const listNavMobile = [
    { id: 1, code: ROUTER_LINK.HOME, title: "Home", action: () => gotoPage("") },
    { id: 2, code: ROUTER_LINK.TESTNET, title: "Testnet", action: () => gotoOtherWindow("https://guide.epicwar.io/") },
    { id: 3, code: ROUTER_LINK.MARKETPLACE, title: "Marketplace", action: () => gotoOtherWindow("https://marketplace.epicwar.io/") },
    { id: 4, code: ROUTER_LINK.PORTAL, title: "Portal", action: () => gotoOtherWindow("https://portal.epicwar.io/") },
    { id: 5, code: ROUTER_LINK.BLOG, title: "Blogs", action: () => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.BLOG}`) },
    { id: 8, code: ROUTER_LINK.FLIPBOOK, title: "Comics", action: () => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.FLIPBOOK}`) },
    { id: 9, code: ROUTER_LINK.WHITEPAPER, title: "Whitepaper", action: () => gotoWhitePaper() },
  ]

  const listNav = [
    { id: 1, code: ROUTER_LINK.HOME, title: "Home", action: () => gotoPage("") },
    { id: 2, code: ROUTER_LINK.TESTNET, title: "Testnet", action: () => gotoOtherWindow("https://guide.epicwar.io/") },
    { id: 3, code: ROUTER_LINK.MARKETPLACE, title: "Marketplace", action: () => gotoOtherWindow("https://marketplace.epicwar.io/") },
    { id: 4, code: ROUTER_LINK.PORTAL, title: "Portal", action: () => gotoOtherWindow("https://portal.epicwar.io/") },
    { id: 5, code: ROUTER_LINK.INSIGHTS, title: "Insights", action: () => gotoPage(ROUTER_LINK.INSIGHTS) },
    { id: 6, code: ROUTER_LINK.WHITEPAPER, title: "Whitepaper", action: () => gotoWhitePaper() },
  ]

  return (
    <HeaderContext.Provider
      value={{
        states: {
          listNav: listNav,
          listNavMobile: listNavMobile,
        },
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
function useHeaderContext() {
  const context = React.useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
export { HeaderProvider, useHeaderContext };
