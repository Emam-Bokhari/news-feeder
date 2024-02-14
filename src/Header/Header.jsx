import { Fragment } from "react"
import Date from "./Date"
import Logo from "./Logo"
import Searchbox from "./Searchbox"
import NewsCategories from "./NewsCategories"

const Header = () => {
    return (
        <Fragment>
            {/* Navbar starts */}
            <nav className="border-b border-black py-6 md:py-8">
                <div
                    className="container mx-auto flex flex-wrap items-center justify-between gap-6"
                >
                    {/* Date */}
                    <Date />
                    {/* Logo */}
                    <Logo />

                    {/* Search */}
                    <Searchbox />
                </div>
                {/* Categories */}
                <NewsCategories />
            </nav>
            {/* Navbar Ends */}
        </Fragment>
    )
}
export default Header