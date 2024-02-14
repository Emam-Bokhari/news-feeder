import { Fragment, useState} from "react"
import useNewsQuery from "../hooks/useNewsQuery"

const NewsCategories = () => {
    const [currentCategory,setCurrentCategory]=useState()
    const {newsData,loading,error}=useNewsQuery(currentCategory)

    const handleCategoryChange=(category)=>{
        setCurrentCategory(category)
    }


    return (
        <Fragment>
            <div className="container mx-auto mt-6">
                <ul
                    className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base"
                >
                    <li><a href="#" onClick={()=>handleCategoryChange("general")}>General</a></li>
                    <li><a href="#" onClick={()=>handleCategoryChange("business")}>Business</a></li>
                    <li><a href="#" onClick={()=>handleCategoryChange("entertainment")}>Entertainment</a></li>
                    <li><a href="#" onClick={()=>handleCategoryChange("health")}>Health</a></li>
                    <li><a href="#" onClick={()=>handleCategoryChange("science")}>Science</a></li>
                    <li><a href="#" onClick={()=>handleCategoryChange("sports")}>Sports</a></li>
                    <li><a href="#" onClick={()=>handleCategoryChange("technology")}>Technology</a></li>
                </ul>
            </div>
        </Fragment>
    )
}
export default NewsCategories