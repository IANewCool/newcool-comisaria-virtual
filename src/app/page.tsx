'use client';

import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import ContentArea from '@/components/ContentArea';
import Footer from '@/components/Footer';

export default function ComisariaVirtualPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabNavigation />
      <ContentArea />
      <Footer />
    </div>
  );
}
