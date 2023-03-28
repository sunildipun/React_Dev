import Cards from './Cards';
import { restaurantList } from '../../constants';

const Body = () => {
    return (
        <div className="cards-container">
            {
                restaurantList.map(item => 
                    <Cards restaurant={item} key={item.data.uuid}/>
                )
            }
        </div>
    )
};

export default Body;