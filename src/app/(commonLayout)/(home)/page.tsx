import HomeBanner from '@/components/modules/home/HomeBanner';
import HomeGallery from '@/components/modules/home/HomeGallery';
// import { HotSale } from '@/components/modules/home/HotSale';
import LatestBlog from '@/components/modules/home/LatestBlog';
import PopularBrands from '@/components/modules/home/PopularBrands';
import PopularCategories from '@/components/modules/home/PopularCategories';
import ServiceMarquee from '@/components/modules/home/ServiceMarquee';
import Testimonials from '@/components/modules/home/Testimonials';
import TopCategories from '@/components/modules/home/TopCategories';
import { TrendingItems } from '@/components/modules/home/TrendingItems';
import WorkProcess from '@/components/modules/home/WorkProcess';

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <ServiceMarquee />
      <TopCategories />
      <TrendingItems />
      {/* <HotSale /> */}
      <PopularCategories />
      <PopularBrands />
      <WorkProcess />
      <Testimonials />
      <LatestBlog />
      <HomeGallery />
    </div>
  );
}
