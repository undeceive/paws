import React from 'react';
import Link from 'next/link';

const HeroBanner = ({ heroBanner }) => {
  // Use fallback data if heroBanner is null or missing
  const banner = heroBanner || {
    smallText: 'Industrial Supply Co.',
    midText: 'Quality since 2024',
    largeText1: 'Industrial Supply Co.',
    buttonText: 'Shop Now',
    desc: 'Premium industrial supplies for welding, safety equipment, tools, and hardware.'
  };

  return (
    <div className="hero-banner-container">
      <div>
        <p className="paws">{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        <p className="hero-subtext">Welding • Safety • Tools • Hardware</p>

        <div>
          <Link href="/">
            <button type="button">{banner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>For Professionals</h5>
            <p>{banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
