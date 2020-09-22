import React from "react"
import "../assets/styles/components/CarouselItem.scss"
import Plus from "../assets/img/plus-icon.png"
import Play from "../assets/img/play-icon.png"


function CarouselItem({ cover, title, year, contentRating, duration }) {
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={Play} alt="Play Icon" />
                    <img className="carousel-item__details--img" src={Plus} alt="Plus Icon" />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    )
}

export default CarouselItem