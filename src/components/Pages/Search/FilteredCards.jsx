import Card from '../../card/Card';
import styles from './FilteredCards.module.scss';
import { useContext } from 'react';
import SearchContext from './SearchContext';

const checkHouseCategory = (house) => {
  const houseData = house.attributes.Categories.data;
  if (houseData.length === 3) return 'Buy / Rent / Lease';
  else {
    if (houseData[0].attributes.Category === 'Rent' || 'Lease')
      return 'Rent' || 'Lease';
    else return 'Buy';
  }
};

const FilteredCards = ({ houses }) => {
  const { buy, rent, lease } = useContext(SearchContext);

  const showPrice = (house) => {
    if (buy) if (house.attributes.Price > 0) return true;
  };

  const showRent = (house) => {
    if (rent) if (house.attributes.Rent > 0) return true;
  };

  const showLease = (house) => {
    if (lease) if (house.attributes.Lease > 0) return true;
  };

  return (
    <div className={styles.cards}>
      {houses.map((house, index) => (
        <Card
          key={index}
          secondClass={styles.card}
          info={{
            id: house.id,
            imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
            category: checkHouseCategory(house),
            city: `${house.attributes.Location.data.attributes.City}`,
            neighbourhood: `${house.attributes.Neighbourhood}`,
            street: `${house.attributes.Street}`,
            rooms: `${house.attributes.Rooms}`,
            bedrooms: `${house.attributes.Bedrooms}`,
            bathrooms: `${house.attributes.Bathrooms}`,
            shortAddress: `${house.attributes.Short_Address}`,
            price: house.attributes.Price,
            rent: house.attributes.Rent,
            lease: house.attributes.Lease,
          }}
          showInfo={{
            price: showPrice(house),
            rent: showRent(house),
            lease: showLease(house),
          }}
        />
      ))}
    </div>
  );
};

export default FilteredCards;
