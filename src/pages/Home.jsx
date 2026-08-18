import React from 'react';
import Hero from '../components/home/Hero';
import QuoteBand from '../components/home/QuoteBand';
import HomeGrid from '../components/home/HomeGrid';
import StatsStrip from '../components/home/StatsStrip';
import Testimonials from '../components/home/Testimonials';
import FounderAbout from '../components/home/FounderAbout';
import CTAImageBand from '../components/home/CTAImageBand';
import EnquiryForm from '../components/home/EnquiryForm';

export default function Home() {
  return (
    <div className="bg-base overflow-x-hidden">
      <Hero />
      <QuoteBand />
      <HomeGrid />
      <StatsStrip />
      <Testimonials />
      <FounderAbout />
      <CTAImageBand />
      <EnquiryForm />
    </div>
  );
}