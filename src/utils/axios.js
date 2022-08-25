import react, {useState, useEffect} from 'react';
import axios from 'axios';

const useAxios = url => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const fetchData = () => {
    axios
      .get(url)
      .then(res => setResponse(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log('axios effect');
    fetchData();
  }, [url]);
  return {response, loading, error};
};

export default useAxios;
