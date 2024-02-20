import PageWrapper from '@/components/PageWrapper/PageWrapper';
import BookVisit from '@/features/bookVisit/BookVisit';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper isNavbar>
      <BookVisit />
    </PageWrapper>
  );
};

export default Index;
