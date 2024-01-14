import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/home/Home';

export default function Index() {
  return (
    <PageWrapper isNavbar wrapperClass='!px-0 lg:!px-0'>
      <Home />
    </PageWrapper>
  );
}
