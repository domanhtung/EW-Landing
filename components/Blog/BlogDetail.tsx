/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from './Blog.module.scss';
import { getBlogDetailByKeyUrl, getListBlog, likeBlogDetail, mainPicture, postComment } from "../../services/BlogApi";
import Loading from "../Loading/Loading";
import { formatDateDMY, formatDateTime, shareFacebook, shareTwitter } from "../../Helpers/utils";
import CardActive from "../Card/CardActive";
import ROUTER_LINK from "../../constants/RouterLink";
import ButtonLoadMore from "../Button/ButtonLoadMore";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import BackArrow from "../Arrow/BackArrow";
import ButtonSendComment from "../Button/ButtonSendComment";

const errorImg = "/assets/images/Blog/default-no-img.png";


const BlogDetailComponent = () => {
    const [blogDetail, setBlogDetail] = useState<any>();
    const [listBlogs, setListBlogs] = useState<any>();
    const [totalElements, setTotalElement] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [comments, setComments] = useState<any>([]);
    const [dataRealTime, setDataRealTime] = useState<any>({});
    const [currentLike, setCurrentLike] = useState<any>(2);
    const [currentUser, setCurrentUser] = useState("");
    const [currentComment, setCurrentComment] = useState("");
    const [loadingSendCmt, setLoadingSendCmt] = useState(false);
    const [loadingLike, setLoadingLike] = useState(false);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if(id !== undefined) {
            getBlogDetailByKeyUrl(id).then(res => {
                setBlogDetail(res?.data);
                const dataReal = {
                    like: res?.data?.like,
                    totalComment: res?.data?.totalComment,
                }
                handleSetComment(res?.data?.listComment);
                setDataRealTime(dataReal);
                setLoading(false);
            }).catch(err => {
                setLoading(false)
            })
        }
    }, [id])

    useEffect(() => {
        const epicWarMember = localStorage.getItem("epicWarMember");
        if(!epicWarMember) {
            const member = JSON.stringify([{likeType: 2, id: id}]);
            localStorage.setItem("epicWarMember", member);
            setCurrentLike({likeType: 2, id: id});
        } else {
            const member = JSON.parse(epicWarMember);
            const currentDetail = member.filter((mem: any) => mem?.id === id);
            if(currentDetail.length) {
                setCurrentLike(currentDetail[0]);
            } else {
                currentDetail.push({likeType: 2, id: id});
                setCurrentLike(currentDetail[0]);
                member.push({likeType: 2, id: id});
                const memberData = JSON.stringify(member);
                localStorage.setItem("epicWarMember", memberData);
            }
        }
    }, [])

    useEffect(() => {
        getListBlog(1, currentPage, 3).then(res => {
            if(res?.data?.content?.length) {
                setListBlogs(res?.data?.content);
                setTotalElement(res?.data?.totalElements);
            } else {
                setListBlogs([]);
            }
        }).catch(() => {
            setListBlogs([]);
        })
    }, [])

    useEffect(() => {
        getBlogDetailByKeyUrl(id).then(res => {
            const dataReal = {
                like: res?.data?.like,
                totalComment: res?.data?.totalComment,
            }
            setDataRealTime(dataReal);
        })
    }, [currentLike, comments])

    const sortFunction = (after: any, before: any) => {
        const dateAfter = new Date(after.createdDate).getTime();
        const dateBefore = new Date(before.createdDate).getTime();
        return dateAfter > dateBefore ? -1 : 1;
    }

    const handleSetComment = (value: any) => {
        const sortedValue = value.sort(sortFunction);
        setComments(sortedValue);
    }

    const loadMore = () => {
        setLoading(true);
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        getListBlog(1, nextPage, 6).then(res => {
            if(res?.data?.content?.length) {
                const data = [...listBlogs, ...res?.data?.content];
                setListBlogs(data);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }).catch(() => {
            setLoading(false);
        })
    }

    const handleComment = () => {
        if(!currentUser || !currentComment) {
            return;
        }
        setLoadingSendCmt(true);
        setTimeout(() => {
            setLoadingSendCmt(false);
        }, 1000);
        const commentList = [...comments];
        const commentData = {
            blogId: Number(id),
            username: currentUser,
            comment: currentComment,
        }
        postComment(commentData).then(res => {
            if(res?.data) {
                commentList.push(res?.data);
                handleSetComment(commentList);
            }
            setCurrentComment("");
        }).catch(err => {
            setCurrentComment("");
        })
    }

    const handleLike = () => {
        if(loadingLike) {
            return;
        }
        setLoadingLike(true);
        const like = (currentLike?.likeType === 1) ? 2 : 1;
        likeBlogDetail(blogDetail?.id, like).then(res => {
            if(res.code === "OK") {
                const currentData = {...currentLike};
                currentData.likeType = like;
                setCurrentLike(currentData);
                const storage = localStorage.getItem("epicWarMember") as any;
                const epicWarMember = JSON.parse(storage);
                const idx = epicWarMember.findIndex((x: any) => x?.id === currentData?.id);
                epicWarMember[idx].likeType = like;
                const member = JSON.stringify(epicWarMember);
                localStorage.setItem("epicWarMember", member);
                setLoadingLike(false);
            }else {
                setLoadingLike(false);
            }
        })
    }

    const goToComment = () => {
      const registerSection = document.getElementById("comment-zone");
      if (registerSection) registerSection.scrollIntoView();
    };

    const gotoPage = (param: any) => {
        const page = `${ROUTER_LINK.INSIGHTS}/${ROUTER_LINK.BLOG}/${param}`
        window.location.pathname = page;
    }

    if(!listBlogs || !blogDetail) {
        return (
            <Loading />
        )
    }

    return (
        <div className={styles.blogContent}>
            <div className={styles.blogDetail}>
                <div className={styles.buttonBack} onClick={() => router.back()}>
                    <BackArrow />
                    Back
                </div>
                <div className={styles.titleDetail}>{blogDetail.title}</div>
                <div className={styles.blogDateDetail}>{formatDateDMY(blogDetail.createdDate)}</div>
                <div className="blog-detail-content relative">
                    <div className="blog-detail-icon">
                        <div data-role="icon" className={`tooltip ${currentLike.likeType === 1 ? "liked" : ""}`} onClick={() => handleLike()}>
                            {
                                loadingLike ?
                                <i className="fa fa-spinner wait-like"/>
                                :
                                <i className="fa fa-thumbs-o-up"/>
                            }
                            <div className="tooltip-text">{dataRealTime.like}</div>
                        </div>
                        <div onClick={() => goToComment()} data-role="icon" className="tooltip">
                            <i className="fa fa-commenting-o"/>
                            <div className="tooltip-text">{dataRealTime.totalComment}</div>
                        </div>
                        <div data-role="icon" onClick={() => shareFacebook()}>
                            <i className="fa fa-facebook-f"/>
                        </div>
                        <div data-role="icon" onClick={() => shareTwitter()}>
                            <i className="fa fa-twitter"/>
                        </div>
                    </div>
                </div>
                <div className={styles.blogDetailContent} dangerouslySetInnerHTML={{__html: blogDetail.content}}/>
            </div>
            <div id="comment-zone" className={styles.commentHead}>
                <div>Comments ({dataRealTime.totalComment})</div>
            </div>
            <div className={styles.commentBox}>
            { !!comments && !!comments.length &&
                comments.map((item: any, index: number) => {
                    return (
                        <div className={styles.commentBoxItem} key={index}>
                            <div>
                                <span>{item.username}</span>
                                <br className="mobile-media" />
                                <span>({formatDateTime(item.createdDate)})</span>
                            </div>
                            <div>{item.comment}</div>
                        </div>
                    )
                })
            }
            </div>
            <div className={styles.input}>
                <input className="glass-4" value={currentUser} placeholder="Username" onChange={e => setCurrentUser(e.target.value)}/>
                <textarea className="glass-4" value={currentComment} placeholder="Leave your comment here." onChange={e => setCurrentComment(e.target.value)}/>
            </div>
            <div>
                <ButtonSendComment onClick={() => handleComment()} loading={loadingSendCmt} />
            </div>
            {
                !!listBlogs?.length &&
                <div className={styles.listBlog}>
                    <div className={styles.titleList}>Read more relevant news</div>
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
export default BlogDetailComponent;