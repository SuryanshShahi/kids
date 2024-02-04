import { getBlogsDetails } from '@/utils/apis/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useBlogDetail = () => {
  const router = useRouter();
  const idx = Number(router?.query?.index);

  const [data, setData] = useState<any>();
  useEffect(() => {
    getBlogsDetails(idx as number)
      .then((res) => setData(res?.attributes))
      .catch((err) => console.log(err));
  }, [idx]);

  console.log({ data1111: data });

  const categories = [
    'Web Development',
    'Social Marketing',
    'Technology',
    'Business & Finance',
    'Digital Solution',
  ];
  return { categories, data };
};

export default useBlogDetail;
