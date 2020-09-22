import React, { useState, useEffect } from "react"


import Header from "../components/Header"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Carousel from "../components/Carrusel"
import CarouselItem from "../components/CarouselItem"
import Footer from "../components/Footer"
const App = () => {
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })

    useEffect(() => {
        fetch("http://localhost:3000/initialState")
            .then(response => response.json())
            .then(data => setVideos(data))


    }, [])

    return (
        <div>
            <Header></Header>
            <Search></Search>
            {videos.mylist.length > 0 &&

                <Categories title="MI LISTA" >
                    <Carousel>

                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>

                </Categories >

            }

            <Categories title="TENDENCIAS">
                <Carousel>
                    {videos.trends.map(item => (

                        <CarouselItem key={item.id} {...item} />
                    ))}



                </Carousel>

            </Categories >
            <Categories title="VIDEOS ORIGINALES">
                <Carousel>
                    <CarouselItem />

                </Carousel>

            </Categories>
            <Footer></Footer>
        </div>
    )
}

export default App;