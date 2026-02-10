"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.4125, 23.8103],
      zoom: 12,
    });

    new mapboxgl.Marker({ color: "#1F7A4D" })
      .setLngLat([90.4125, 23.8103])
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapRef} className="w-full h-[450px]" />;
}
