import * as React from "react";
import TatzenHeader from "../../components/tools/tatzenheader";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position = [50.880173, 6.087774];

const Anfahrt = ({ className }) => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
    iconUrl: require("leaflet/dist/images/marker-icon.png").default,
    shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
  });

  return (
    <div className={className}>
      <TatzenHeader>Anfahrt</TatzenHeader>

      <div className="mt-5 w-max text-center mx-auto">
            <h3>Hundefreunde Herzogenrath e.V.</h3>
            Grenzstraße 9 - 52134 Herzogenrath
      </div>

      <div className="h-[500px] w-full bg-red-100 mt-5">
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
