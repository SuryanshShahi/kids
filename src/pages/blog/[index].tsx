import PageWrapper from '@/components/PageWrapper/PageWrapper';
import BlogDetail from '@/features/blogs/BlogDetail';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper isNavbar wrapperClass='!px-0 lg:!px-0'>
      <BlogDetail />
    </PageWrapper>
  );
};

export default Index;
