import type { NextPage } from "next";
import Background from "../../../components/Background/Background";
import ButtonHelp from "../../../components/Button/ButtonHelp";
import { comicChapter } from "../../../components/Comic/Chapter";
import FlipBook from "../../../components/Comic/ComicDetail";
import LightStick from "../../../components/LightStick/LightStick";
import SEO from "../../../components/SEO";

const ComicDetail: NextPage = (props: any) => {

    return (
        <div className="relative home-content">
            <SEO
                url={`${props?.url}/insights/comics/${props?.id}`}
                openGraphType="website"
                schemaType="article"
                title={props?.chapter?.title}
                description={`Epic War chapter ${props?.id}`}
                image={props?.chapter?.cover}
            />
            <Background />
            <div className='home-line-left'>
                <LightStick position="Top" />
            </div>
            <div className='home-line-right'>
                <LightStick position="Bottom" />
            </div>
            <FlipBook />
            <ButtonHelp />
        </div>
    )
}

export const getServerSideProps = async(context: any) => {
    const url = context?.req?.headers?.host
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_API_ENDPOINT}/web-api/blog/getBlogDetailKeyUrl/${context?.params?.id}`)
    const data = await res?.json()
    const image = `${process.env.NEXT_PUBLIC_WEB_API_ENDPOINT}/file/${data?.data?.mainPicId}`
    const id = context?.params?.id
    const chapter = comicChapter[id - 1];
    return {
        props: {
            chapter: chapter,
            url: url,
            id: id,
            data: data?.data,
            image: image,
        },
    };
};

export default ComicDetail;