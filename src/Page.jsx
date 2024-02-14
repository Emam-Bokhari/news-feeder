import { Fragment } from "react"
import Header from "./Header/Header"
import NewsBoard from "./NewsBoard/NewsBoard"
import Footer from "./Footer"


const Page = () => {
    
    return (
        <Fragment>
            <Header />
            <NewsBoard/>
            <Footer/>
        </Fragment>
    )
}
export default Page