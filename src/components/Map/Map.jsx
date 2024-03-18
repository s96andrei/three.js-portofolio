import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [2, -3],
        scale: 1400
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[27.5889, 47.1622]}
        dx={-70}
        dy={-45}
        connectorProps={{
          stroke: "#ffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Iasi"}
        </text>
      </Annotation>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-45}
        connectorProps={{
          stroke: "#ffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[12.49637, 41.90278]}
        dx={-90}
        dy={-45}
        connectorProps={{
          stroke: "#ffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Rome"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
