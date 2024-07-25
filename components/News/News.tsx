import React, { useEffect, useState } from "react";
import styles from './News.module.scss';
import { getListTopBlog, mainPicture } from "../../services/BlogApi";
import CardActive from "../../components/Card/CardActive";
import { formatDateDMY } from "../../Helpers/utils";
import ROUTER_LINK from "../../constants/RouterLink";
import FadeInSection from "../../components/Fade/Fade";
import ItemLoading from "../../components/Loading/ItemLoading";
import { useMediaQuery } from "../MediaQuery/MediaQuery";
import ButtonLoadMore from "../Button/ButtonLoadMore";
const API_WEB_URL = process.env.NEXT_PUBLIC_URL_ENDPOINT

const News = function () {
  const [news, setNews] = useState<any>();

  useEffect(() => {
    const sizeParam = window.innerWidth <= 700 ? 1 : 3;
    getListTopBlog(1, 0, sizeParam).then(res => {
        if(res && res.data && res.data.content && res.data.content.length) {
            setNews(res.data.content);
        }
    }).catch((e) => {
      console.log(e)
    })
  }, []);

  const gotoPage = (page: any) => {
    window.open(page, '_blank');
  }

  return (
    <div className={`${styles.news} d-flex ${(news && news.length) ? "" : styles.newsHeightAuto}`}>
      <div className={`${styles.newsBox} m-auto`}>
        <FadeInSection>
          <div className={styles.newsTitle}>Latest updates</div>
        </FadeInSection>
        <FadeInSection className="glass-4">
          <>
              {
                news && news.length ?
                <div className={styles.newsContent}>
                  {news.map((item: any, index: number) => {
                    return (
                      <CardActive key={index} onClick={() => gotoPage(`${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.BLOG}/${item?.keyUrl}`)} type="Active" >
                        <div className={styles.newsContentBox} key={index}>
                          <img src={mainPicture(item.mainPicId)} alt="" />
                          <div className={styles.newContentText}>
                            <h5 className="text-overflow" >{item.title}</h5>
                            <h6 className="text-overflow">{item.shortDescription}</h6>
                          </div>
                          <div className={styles.bottomContent}>
                              <div className={styles.viewer} >
                                <i className="fa fa-eye" />
                                <span>{item?.view ? item.view : 0}</span>
                                <i className="fa fa-thumbs-o-up" />
                                <span>{item?.like ? item.like : 0}</span>
                                <i className="fa fa-commenting-o" />
                                <span>{item?.totalComment ? item.totalComment : 0}</span>
                              </div>
                              <div className={styles.blogDate}>{formatDateDMY(item.createdDate)}</div>
                          </div>
                        </div>
                      </CardActive>
                    )
                  })}
                </div>
                :
                <div className="d-flex" style={{justifyContent: 'center'}} >
                  <ItemLoading />
                </div>
              }
          </>
        </FadeInSection>
        <ButtonLoadMore onClick={() => gotoPage(`${API_WEB_URL}/${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.BLOG}`)} title="Read more" />
      </div>
    </div>
  );
};
export default News;
