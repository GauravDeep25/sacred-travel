import SectionHeader from '../components/SectionHeader';
import JourneyGrid from '../components/JourneyGrid';
import { siteConfig } from '../data/siteConfig';

export default function Domestic() {
  return (
    <div className="pt-40 pb-24 px-6 bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow="[DOMESTIC EYEBROW]" 
          title="Domestic" 
          italicTitle="Journeys" 
        />
        <JourneyGrid items={siteConfig.placeholders} />
      </div>
    </div>
  );
}