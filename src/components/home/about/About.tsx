"use client"

import Section1 from './Section1';
import Section2 from './Section2';

function About() {

  return (
    <>
      <div className="relative mt-[75vh] md:mt-[98vh] min-h-[210vh]">
        <Section1 />
        <Section2 />
      </div>
    </>

  );
}

export default About;
