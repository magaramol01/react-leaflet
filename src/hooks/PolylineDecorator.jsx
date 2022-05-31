// import React, { useRef, useEffect } from "react";
// import { Polyline } from "react-leaflet";
// import { useMapEvent } from "react-leaflet/hooks";
// import L from "leaflet";
// import "leaflet-polylinedecorator";

// const PolylineDecorator = useMapEvent ((props) => {
//   const polyRef = useRef();
//   useEffect(() => {
//     const polyline = polyRef.current.leafletElement; //get native Leaflet polyline
//     const { map } = polyRef.current.props.leaflet; //get native Leaflet map

//     L.polylineDecorator(polyline, {
//       patterns: props.patterns,
//     }).addTo(map);
//   }, []);

//   return <Polyline ref={polyRef} {...props} />;
// });

// export default PolylineDecorator;

