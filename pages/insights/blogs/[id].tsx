import type { NextPage } from "next";
import Background from "../../../components/Background/Background";
import BlogDetailComponent from "../../../components/Blog/BlogDetail";
import ButtonHelp from "../../../components/Button/ButtonHelp";
import LightStick from "../../../components/LightStick/LightStick";
import SEO from "../../../components/SEO";

const BlogDetail: NextPage = (props: any) => {
    return (
        <div className="relative home-content">
            <SEO
                url={`${props?.url}/insights/blogs/${props?.data?.keyUrl}`}
                openGraphType="website"
                schemaType="article"
                title={props?.data?.title}
                description={props?.data?.shortDescription}
                image={props?.image}
            />
            <Background />
            <div className='home-line-left'>
                <LightStick position="Top" />
            </div>
            <div className='home-line-right'>
                <LightStick position="Bottom" />
            </div>
            <BlogDetailComponent/>
            <ButtonHelp />
        </div>
    )
}

export const getServerSideProps = async(context: any) => {
    const url = context?.req?.headers?.host
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_API_ENDPOINT}/web-api/blog/getBlogDetailKeyUrl/${context?.params?.id}`)
    const data = await res?.json()
    const image = `${process.env.NEXT_PUBLIC_WEB_API_ENDPOINT}/file/${data?.data?.mainPicId}`
    return {
        props: {
            data: data?.data,
            image: image,
            url: url
        },
    };
};

export default BlogDetail;