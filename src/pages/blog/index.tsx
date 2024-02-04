import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Blog from '@/features/blogs/Blog';
import { getBlogsData } from '@/utils/apis/api';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper isNavbar wrapperClass='!px-0 lg:!px-0'>
      <Blog />
    </PageWrapper>
  );
};

export default Index;
