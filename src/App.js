import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./style.css"
import data from "./data"

export default function App() {
    const dataElements = data.map(item =>{
         return < Card 
            // img={item.imageUrl}
            item={item}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}/>
         />
    })
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {dataElements}
            </section>

        </div>
    )
}