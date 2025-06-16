import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FeaturedSection from '@/app/home_page/components/FeaturedSection';
import MostReadSection from '@/app/home_page/components/MostReadSection';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      
      <main className={styles.mainContent}>
        <h1>Home</h1>
        <FeaturedSection />
        <MostReadSection />
      </main>
      <SiteFooter />
    </>
  );
}