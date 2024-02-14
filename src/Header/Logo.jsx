import { Fragment } from "react"
import logoIcon from "../assets/logo.png"

const Logo = () => {
    return (
        <Fragment>
            <a href="/">
                <img
                    className="max-w-[100px] md:max-w-[165px]"
                    src={logoIcon}
                    alt="Lws"
                />
            </a>
        </Fragment>
    )
}
export default Logo