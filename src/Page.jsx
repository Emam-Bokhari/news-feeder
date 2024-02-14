import { Fragment } from "react"
import Header from "./Header/Header"
import NewsBoard from "./NewsBoard/NewsBoard"

const Page = () => {
    return (
        <Fragment>
            <Header />
            <NewsBoard/>
        </Fragment>
    )
}
export default Page