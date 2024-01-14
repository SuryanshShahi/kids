import PageWrapper from '@/components/PageWrapper/PageWrapper';
import BookVisit from '@/features/bookVisit/BookVisit';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper isNavbar wrapperClass='!px-0 lg:!px-0'>
      <BookVisit />
    </PageWrapper>
  );
};

export default Index;
