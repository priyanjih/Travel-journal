import React from "react"

export default function Card(props) {
    function addSpace(str) {
        return str.split('').join(' '); //split the string and join them with space between
    }
    return (
        <div className="card--div">
            <div className="card">
            <img src={props.item.imageUrl} className="one--card"/></div><div className="card--div2">
                <p className="location">{(addSpace(props.item.location)).toUpperCase()}</p>
                <h5><a href={props.item.googleMapsUrl} className="glink">View on Google Maps</a></h5></div>
                <div className="card--info">
                    <h1>{props.item.title}</h1>
                    <h6>{`${props.item.startDate}-${props.item.endDate}`}</h6>
                    <p className="des">{props.item.description}</p>
                </div>
                
                
        </div>
    )
}