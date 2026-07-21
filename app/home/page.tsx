import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeatureTeaser from '@/components/FeatureTeaser';
import ProductHighlight from '@/components/ProductHighlight';
import CustomerTestimonial from '@/components/CustomerTestimonial';
import Footer from '@/components/Footer';

export default function ClonedHome() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductHighlight />
      <FeatureTeaser />
      <CustomerTestimonial />
      <Footer />
    </>
  );
}
