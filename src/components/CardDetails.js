import { useParams } from 'react-router-dom';
import tokyo_ghoul from './collections/tokyo_ghoul';

const lookup = {
  1: tokyo_ghoul,
  // Add more mappings as needed
};

const CardDetails = () => {
  const { id } = useParams();
  const Details = lookup[id];

  return Details ? <Details /> : <div>No data found for id: {id}</div>;
};

export default CardDetails;