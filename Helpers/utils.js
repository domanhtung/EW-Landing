import { mediaWidth } from "./enum";

export const formatDateDMY = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const newDate = new Date(date)
    return newDate.toLocaleDateString("en-US", options)
}

export const formatDateTime = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleString("pt-BR")
}

export const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(url, "", "width=500,height=600");
}

export const shareTwitter = () => {
    const url =`https://twitter.com/intent/tweet?url=${window.location.href}`;
    window.open(url, "", "width=500,height=600");
}

export const checkPathname = (pathname, windowPath) => {
    if(pathname === "/" && windowPath[windowPath.length - 1] === "/") {
        return true
    } else if(pathname === "/" && windowPath[windowPath.length - 1] !== "/") {
        return false;
    }
    const regex = new RegExp(pathname);
    const isTruePath = regex.test(windowPath);
    return isTruePath;
}

export const isCompleteByQuarter = (quarter, year) => {
    const yearNow = new Date().getFullYear();
    if(year < yearNow) {
        return true;
    }
    const today = new Date();
    var quarterNow = Math.floor((today.getMonth() + 3) / 3);
    return quarter < quarterNow;
}

export const getCurrentQuarter = () => {
    const yearNow = new Date().getFullYear();
    const today = new Date();
    var quarterNow = Math.floor((today.getMonth() + 3) / 3);
    const overYear = yearNow >= 2023 ? 2024 : yearNow;
    const overQuarter = yearNow >= 2023 ? 4 : quarterNow;
    console.log(yearNow)
    return {quarter: overQuarter, year: overYear}
}

export const getCurrentMedia = () => {
    const innerWidth = global.window !== undefined ? global.window.innerWidth : 0;
    if(innerWidth > 1024) {
        return mediaWidth.desktopMedia;
    } else if(innerWidth > 700) {
        return mediaWidth.tabletMedia;
    } else {
        return mediaWidth.mobileMedia;
    }
}