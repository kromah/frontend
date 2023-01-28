import { useContext } from 'react';
import SearchContext from '../SearchContext';

const LeaseCheckbox = () => {
  const { lease, setLease } = useContext(SearchContext);

  return (
    <div>
      <input
        type="checkbox"
        name="Lease"
        value="Lease"
        onChange={() => setLease(!lease)}
      />
      <label htmlFor="Lease"> Houses For Lease</label>
    </div>
  );
};

export default LeaseCheckbox;
