import { useEffect } from 'react';
import { api } from '../../services/api';

export default function Test() {
  useEffect(() => {
    api.get('/categories').then(res => console.log(res.data));
  }, []);

  return <h1>Check console</h1>;
}