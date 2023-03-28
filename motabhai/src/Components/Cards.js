const Cards = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId} = props.restaurant.data;
    return (
        <div className="cards">
            <img alt="food" className="image" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}/> 
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h2>{avgRating} stars</h2>
        </div>
    )
}

export default Cards;