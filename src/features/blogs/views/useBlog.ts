import { getBlogsData } from '@/utils/apis/api';
import { useEffect, useState } from 'react';

const useBlog = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getBlogsData()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  console.log({ data1111: data });

  return { data };
};

export default useBlog;
