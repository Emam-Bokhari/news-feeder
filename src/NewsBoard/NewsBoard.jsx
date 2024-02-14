import { Fragment } from "react"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const NewsBoard = () => {
    return (
        <Fragment>
            {/* main */}
        <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8">
               {/* left */}
               <LeftSide/>
                {/* right */}
                <RightSide/>
            </div>
        </main>
        {/* main ends */}
        </Fragment>
    )
}
export default NewsBoard
