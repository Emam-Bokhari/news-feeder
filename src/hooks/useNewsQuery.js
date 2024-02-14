import { useEffect } from "react"
import { useState } from "react"

const useNewsQuery = (category) => {

    const [newsData, setNewsData] = useState({
        title: "",
        description: "",
        publishTime: "",
        image: ""
    })

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    })

    const fetchNewsData = async () => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching News Data..."
            })

            let url=`http://localhost:8000/v2/top-headlines`

            if(category){
                url+=`?category=${category}`
            }

            const response = await fetch(url)

            if (!response.ok) {
                const errorMessage = `Fetching News Data failed!${response.status}`
                throw new Error(errorMessage)
            }

            const data = await response.json()

            const updateNewsData = {
                ...newsData,
                title: data?.articles[0]?.title,
                description: data?.articles[0]?.description,
                publishTime: data?.articles[0]?.publishedAt,
                image: data?.articles[0]?.urlToImage
            }

            setNewsData(updateNewsData)

        } catch (err) {
            setError(err)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            })
        }
    }

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding News"
        })
        fetchNewsData()
    }, [category])

    return {
        newsData,
        loading,
        error
    }
}
export default useNewsQuery