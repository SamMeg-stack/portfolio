import React from 'react'

function TechIcon({component}) {
    const Component = component;
  return Component ? <Component className="w-12 h-12 text-blue-500 mb-2"  /> : null;
}

export default TechIcon