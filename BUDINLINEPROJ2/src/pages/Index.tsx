
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CalendarSection from '../components/CalendarSection';
import ActivitiesSection from '../components/ActivitiesSection';
import VideoSection from '../components/VideoSection';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CalendarSection />
        <ActivitiesSection />
        <VideoSection />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
