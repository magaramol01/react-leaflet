import React, {   useState } from "react";
import {  MapContainer,TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, useMapEvents, Polyline, } from "react-leaflet";
import L, { map } from "leaflet"
import MouseCoordinates from "./hooks/MouseCoordinates"
import Nroute from "./Nroute"
import "leaflet-marker-rotation";

// import PolylineDecorator from "./hooks/PolylineDecorator"


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

//marker rotate 
  const [markerAngle, setMarkerAngle] = useState(120);




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
        {/* <PolylineDecorator patterns={arrow} positions={polyline} /> */}
        <MouseCoordinates />
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
                    <Marker position={ [-20.6344, 60.4088 ]} icon={Licon()}>
                      <Popup>why you here</Popup>
                    </Marker>
                  ) : (
                    <Marker position={ [-20.6344, 60.4088 ]} icon={GetIcon(48)}>
                      <Popup>why you here</Popup>
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
            <Polyline color="red  " positions={polyline} />
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
