import axios from '../axios';

export const getBlogsData = async () => {
  try {
    const res = await axios.get('blogs?populate=*');
    return Promise.resolve(res?.data?.data);
  } catch (error) {
    console.error('error getting blogs page data');
  }
};
export const getBlogsDetails = async (idx: number) => {
  try {
    const res = await axios.get(`blogs/${idx}?populate=*`);
    return Promise.resolve(res?.data?.data);
  } catch (error) {
    console.error('error getting blogs page data');
  }
};
