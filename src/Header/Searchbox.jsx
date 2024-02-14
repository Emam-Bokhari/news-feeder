import { Fragment } from "react"
import searchIcon from "../assets/icons/search.svg"

const Searchbox = () => {
    return (
        <Fragment>
            <div className="flex items-center space-x-3 lg:space-x-8">
                <img src={searchIcon} />
            </div>
        </Fragment>
    )
}
export default Searchbox