"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

export default function UserLocation() {
  const [position, setPosition] = useState({
    lat: 36.7692,
    lng: 3.0549,
  });
  const [map, setMap] = useState<L.Map | null>(null);

  const askUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        map?.flyTo([position.coords.latitude, position.coords.longitude], 13);
      });
    } else {
      console.log("Geolocation is not supported by this browser");
      alert("Enable location services to view your location on the map");
    }
  };

  return (
    <section className="relative h-32 w-[420px]">
      <MapContainer
        scrollWheelZoom={false}
        center={[position.lat, position.lng]}
        zoom={12}
        zoomControl={false}
        ref={setMap}
        style={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "20px",
          margin: "auto",
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          zIndex: 0,
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#FAE8AC] bg-opacity-50">
        <button
          className="font-semibold text-slate-700"
          onClick={askUserLocation}
        >
          View on map <ArrowRightIcon className="ml-1 inline-block h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
