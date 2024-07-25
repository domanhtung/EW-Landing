import Footer from "../components/Footer/Footer"

const bg = '/assets/images/Home/Body/page_404.png'

export default function Custom404() {
    return (
        <div className="page-404">
            <img src={bg} alt="" />
            <span>
                <label>404</label>
                <label>Page Not Found</label>
            </span>
            <Footer />
        </div>
    )
}