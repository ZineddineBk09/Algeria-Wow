"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const CENTER: [number, number] = [36.7291, 3.1679];
const ZOOM = 13;

export default function UserLocation() {
  const [position, setPosition] = useState({
    lat: 36.7291,
    lng: 3.1679,
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
    <>
      <div className="relative h-32 w-[420px]">
        <MapContainer
          scrollWheelZoom={false}
          center={CENTER}
          zoom={ZOOM}
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
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#FAE8AC] bg-opacity-50">
          <button
            className="font-semibold text-slate-700"
            onClick={askUserLocation}
          >
            View on map <ArrowRightIcon className="ml-1 inline-block h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
