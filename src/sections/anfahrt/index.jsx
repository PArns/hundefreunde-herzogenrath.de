import * as React from "react";
import TatzenHeader from "../../components/tools/tatzenheader";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [50.880173, 6.087774];

const Anfahrt = ({ className }) => {
  return (
    <div className={className}>
      <TatzenHeader>Anfahrt</TatzenHeader>

      <div className="mx-auto mt-5 w-max text-center">
        <h3>Hundefreunde Herzogenrath e.V.</h3>
        Grenzstraße 9 - 52134 Herzogenrath
      </div>

      <div className="mt-5 h-[500px] w-full">
        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <b>Hundefreunde Herzogenrath e.V.</b>
              <br />
              Grenzstr. 9, 52134 Herzogenrath
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Anfahrt;
