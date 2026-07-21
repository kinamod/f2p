'use client';
import '@/builder-registry';
import { BuilderPageContent } from '@/components/builder';

export default function HomePage() {
  return (
    <>
      {/* Header slot — filled automatically when a NavBar/Header component is cloned */}
      <BuilderPageContent urlPath="/" />
      {/* Footer slot — filled automatically when a Footer component is cloned */}
    </>
  );
}
