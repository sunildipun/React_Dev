import Cards from './Cards';
import { restaurantList } from '../../constants';
import { useState } from 'react';

filterRestaurant = (searchText, restaurants) => {
    const restros = restaurants.filter(restau => restau.data.name.includes(searchText));
    return restros;
};

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div>
                <input placeholder='Search' onChange={(e) => setSearchText(e.target.value)}/>
                <button onClick={() => {
                    const data = filterRestaurant(searchText, restaurantList);
                    setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="cards-container">
                {
                    restaurants.map(item => 
                        <Cards restaurant={item} key={item.data.uuid}/>
                    )
                }
            </div>
        </>
    )
};

export default Body;