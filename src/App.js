import React, {   useState } from "react";
import {  MapContainer,TileLayer, Marker, Popup, LayersControl, LayerGroup,  useMapEvents, Polyline, Tooltip, } from "react-leaflet";
import L from "leaflet"
import MouseCoordinates from "./hooks/MouseCoordinates"
import Nroute from "./Nroute"
import "leaflet-marker-rotation";



function GetIcon(iconsize){
   return L.icon({
     iconUrl: require("../src/Static/icon/Ficon.png"),
     iconSize: new L.Point(60),
     iconAnchor: [15, 34],
     rotationAngle: 90,
   });

}

function Licon(iconsize) {
  return L.icon({
    iconUrl: require("../src/Static/icon/Licon.png"),
    iconSize: new L.Point(160),
    iconAnchor: [10, 80],
  });
}

function Dicon(iconsize) {
  return L.icon({
    iconUrl: require("../src/Static/icon/dot.png"),
    iconSize: new L.Point(8),
    iconAnchor: [7, 5],
  });
}


function Smarker (iconsize ,) {
  return L.icon({
    iconUrl: require("../src/Static/icon/Smarker.png"),
    iconRetinaUrl: require("../src/Static/icon/Smarker.png"),
    iconSize: new L.Point(30),
    iconAnchor: [15, 44],
    popupAnchor: null,
  });
}

function Lmarker(iconsize) {
  return L.icon({
    iconUrl: require("../src/Static/icon/Lmarker.png"),
    iconRetinaUrl: require("../src/Static/icon/Lmarker.png"),
    iconSize: new L.Point(30),
    iconAnchor: [15, 44],
    popupAnchor: null,
  });
}



const App = () => {
  
const [zoomLevel, setZoomLevel] = useState(5);


const polyline = Nroute;
 
function MyComponent() {

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });
  return null;
}


  const { BaseLayer } = LayersControl;
  

  return (
    <>
      <MapContainer
        center={[4.9947, 34.1175]}
        zoom={3}
        scrollWheelZoom={true}
        style={{ minHeight: "100vh", minWidth: "100%" }}
      >
        <MyComponent />

        <MouseCoordinates />

        {polyline.map((CurE, index) => {
          console.log(CurE[0], CurE[1]);

          return (
            <Marker position={[CurE[0], CurE[1]]} icon={Dicon()}>
              <Tooltip direction="left">
                <ul style={{ fontSize: "13px" }}>
                  <h3 style={{ margin: "auto" }}>MEDAN EXPRESS</h3>
                  <li>
                    Lat : {CurE[0]} , Long: {CurE[1]}
                  </li>
                  <li>Speed Over Ground : {CurE[0]} Kn</li>
                  <li>Wave Direction : {CurE[1] + 20}°</li>
                  <li>Wave Height : {CurE[1] - 5} mts</li>
                  <li>Swell direction : {CurE[1] - 7}°</li>
                  <li>Swell Height : {CurE[1] + 7} mts</li>
                  <li>Wind Speed : {CurE[1] + 10} kn</li>
                  <li>Wind direction : {CurE[1] + 2.42}°</li>
                  <li>Current Speed : {CurE[1] - 2.42} kn</li>
                  <li>Current direction : {CurE[1] - 9.42}°</li>
                  <li> Timestamp :26-02-2022 12:02:54</li>
                </ul>
              </Tooltip>
            </Marker>
          );
        })}

        <LayersControl position="topright">
          <BaseLayer name="Map-Style-1">
            <TileLayer
              attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url={`https://api.mapbox.com/styles/v1/magarmol09/cl3k5gmhr000714od2ehxtg02/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFnYXJtb2wwOSIsImEiOiJjbDNqdGZuNWEwYnh3M2pwaThrenNtNXhrIn0.zkejDpLdjcG8UMm99u4xjQ`}
            />
          </BaseLayer>
          <BaseLayer name="Map-Style-2">
            <TileLayer
              attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url={`https://api.mapbox.com/styles/v1/magarmol09/cl3mnp8jo002g15ms0sfv93hz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFnYXJtb2wwOSIsImEiOiJjbDNqdGZuNWEwYnh3M2pwaThrenNtNXhrIn0.zkejDpLdjcG8UMm99u4xjQ`}
            />
          </BaseLayer>
          <BaseLayer checked name="Map-Style-3">
            <TileLayer
              attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url={`https://api.mapbox.com/styles/v1/magarmol09/cl3o2g1qk008u15ld1d35a3f3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFnYXJtb2wwOSIsImEiOiJjbDNqdGZuNWEwYnh3M2pwaThrenNtNXhrIn0.zkejDpLdjcG8UMm99u4xjQ`}
            />
          </BaseLayer>

          <LayersControl.Overlay checked name="Vassel">
            {
              <>
                <LayerGroup>
                  {zoomLevel > 14 ? (
                    <Marker position={[5.93679, 96.728896]} icon={Licon()}>
                      <Tooltip>MEDAN EXPRESS</Tooltip>
                    </Marker>
                  ) : (
                    <Marker position={[5.93679, 96.728896]} icon={GetIcon(48)}>
                      <Tooltip position="top">MEDAN EXPRESS</Tooltip>
                    </Marker>
                  )}

                  {/* {zoomLevel > 15 ? (
                    <Marker
                      position={[13.560606889272517, 62.15841038422109]}
                      icon={Licon(zoomLevel * 14)}
                    >
                      <Popup>why you here</Popup>
                    </Marker>
                  ) : (
                    <Marker
                      position={[14.560606889272517, 62.15841038422109]}
                      icon={GetIcon(zoomLevel * 8.5)}
                    >
                      <Popup>why you here</Popup>
                    </Marker>
                  )} */}
                </LayerGroup>
              </>
            }
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Route">
            <Polyline color="#F32424" positions={polyline} />
            <Marker position={[-32.171, -52.0864]} icon={Lmarker()}>
              <Popup>you are here</Popup>
            </Marker>
            <Marker position={[35.356, 119.552]} icon={Smarker()}>
              <Popup>you are here</Popup>
            </Marker>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};;



export default App;
