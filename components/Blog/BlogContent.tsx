/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from './Blog.module.scss';
import { getBlogFeature, getListBlog, mainPicture } from "../../services/BlogApi";
import Loading from "../Loading/Loading";
import { formatDateDMY } from "../../Helpers/utils";
import CardActive from "../Card/CardActive";
import ROUTER_LINK from "../../constants/RouterLink";
import ButtonLoadMore from "../Button/ButtonLoadMore";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";

const errorImg = "/assets/images/Blog/default-no-img.png";


const BlogContent = () => {
    const [greatBLog, setGreatBlog] = useState<any>();
    const [listBlogs, setListBlogs] = useState<any>();
    const [totalElements, setTotalElement] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        getBlogFeature(1, 0, 1).then(res => {
            if(res?.data?.content?.length) {
                setGreatBlog(res.data.content[0]);
            } else {
                setGreatBlog([]);
            }
        }).catch(err => {
            setGreatBlog([]);
        })
    }, [])

    useEffect(() => {
        getListBlog(1, currentPage, 6).then(res => {
            if(res?.data?.content?.length) {
                setListBlogs(res.data.content);
                setTotalElement(res.data?.totalElements);
            } else {
                setListBlogs([]);
            }
        }).catch(() => {
            setListBlogs([]);
        })
    }, [])

    const loadMore = () => {
        setLoading(true);
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        getListBlog(1, nextPage, 6).then(res => {
            if(res?.data?.content?.length) {
                const data = [...listBlogs, ...res.data.content];
                setListBlogs(data);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }).catch(() => {
            setLoading(false);
        })
    }

    if(!greatBLog || !listBlogs) {
        return (
            <Loading />
        )
    }

    const gotoPage = (id: any) => {
        const page = `${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.BLOG}/${id}`
        window.location.pathname = page;
    }

    return (
        <div className={styles.blogContent}>
            <h1 className={styles.title}>STAY UPDATED</h1>
            <div className={styles.greatBlog}>
                <div className={styles.contentLeft} onClick={() => gotoPage(greatBLog?.keyUrl)} >
                    <img
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = errorImg;
                        }}
                        src={mainPicture(greatBLog.mainPicId)}
                        alt=""
                    />
                    <div />
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.feature}>
                        <span>Feature&nbsp;</span>
                        <span>Article</span>
                    </div>
                    <h1 className="text-overflow" onClick={() => gotoPage(greatBLog?.keyUrl)}>{greatBLog.title}</h1>
                    <p className="text-overflow" onClick={() => gotoPage(greatBLog?.keyUrl)}>{greatBLog.shortDescription}</p>
                    <div className={styles.greatBottomContent}>
                        <div className={styles.viewer} >
                            <i className="fa fa-eye" />
                            <span>{greatBLog?.view ? greatBLog.view : 0}</span>
                            <i className="fa fa-thumbs-o-up" />
                            <span>{greatBLog?.like ? greatBLog.like : 0}</span>
                            <i className="fa fa-commenting-o" />
                            <span>{greatBLog?.totalComment ? greatBLog.totalComment : 0}</span>
                        </div>
                        <div className={styles.dataDate}>{formatDateDMY(greatBLog.createdDate)}</div>
                    </div>
                </div>
            </div>
            {
                !!listBlogs?.length &&
                <div className={styles.listBlog}>
                    <div className={styles.titleList}>Latest updates</div>
                    <div className={styles.contentList}>
                    {listBlogs.map((item: any, index: number) => {
                        return (
                        <CardActive key={index} className={`${styles.card} glass-4`} onClick={() => gotoPage(item?.keyUrl)} type="Active" >
                            <div className={styles.contentBox} key={index}>
                                <img
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = errorImg;
                                    }}
                                    src={mainPicture(item.mainPicId)}
                                    alt=""
                                />
                                <div className={styles.contentText}>
                                    <h5 className="text-overflow">{item.title}</h5>
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
                </div>
            }
            {
                totalElements > listBlogs.length &&
                <ButtonLoadMore className={styles.buttonLoadMore} loading={loading} onClick={() => loadMore()} title="Load more" />
            }
            <Social />
            <Footer />
        </div>
    )
}
export default BlogContent;