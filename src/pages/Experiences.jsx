import React from 'react';

import ExperiencesHero        from '../components/experiences/ExperiencesHero';
import ExperiencesMarquee     from '../components/experiences/ExperiencesMarquee';
import ExperiencesIntro       from '../components/experiences/ExperiencesIntro';
import ExperiencesGrid        from '../components/experiences/ExperiencesGrid';
import ExperiencesProcess     from '../components/experiences/ExperiencesProcess';
import ExperiencesTestimonials from '../components/experiences/ExperiencesTestimonials';
import ExperiencesCTA         from '../components/experiences/ExperiencesCTA';

export default function Experiences() {
  return (
    <div className="bg-base overflow-x-hidden">
      <ExperiencesHero />
      <ExperiencesMarquee />
      <ExperiencesIntro />
      <ExperiencesGrid />
      <ExperiencesProcess />
      <ExperiencesTestimonials />
      <ExperiencesCTA />
    </div>
  );
}
