import FilterContent from '@/components/FilterContent'
import React from 'react'

export async function generateMetadata({ params }) {
  const { cat } = await params;
  const name = decodeURIComponent(cat).split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${name} | TimeWatch`,
    description: `TimeWatch ${name.toLowerCase()} – manufactured in-house with installation and 24x7 support across the Middle East, Africa and international markets.`,
    alternates: { canonical: `/products/${cat}` },
  };
}


const catPage = () => {
  return (
    <div>
      {/* <FilterContent/> */}
    </div>
  )
}

export default catPage