import type { NextPage } from "next";
import Background from "../../../components/Background/Background";
import BlogContent from "../../../components/Blog/BlogContent";
import ButtonHelp from "../../../components/Button/ButtonHelp";
import LightStick from "../../../components/LightStick/LightStick";
import SEO from "../../../components/SEO";
const API_WEB_URL = process.env.NEXT_PUBLIC_URL_ENDPOINT


const Blogs: NextPage = () => {
    return (
        <div className="relative home-content">
            <SEO
                url={`${API_WEB_URL}/insights/blogs`}
                openGraphType="website"
                schemaType="article"
                title="The Epic War - the 1st FPS blockchain game."
                description="Battle&#128163;. Earn. Shoot&#127919;. Grow&#128684;. Be the Hero of Your Own Epic Story &#128740;. Let's build the world of dreamers together!"
                image="/thumbnail.jpg"
            />
            <Background />
            <div className='home-line-left'>
                <LightStick position="Top" />
            </div>
            <div className='home-line-right'>
                <LightStick position="Bottom" />
            </div>
            <BlogContent />
            <ButtonHelp />
        </div>
    )
}

export default Blogs;