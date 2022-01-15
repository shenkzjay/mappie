import { React, useState, } from "react"


// Leaflet
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

// commaNumber
import commaNumber from 'comma-number'

// div icon 
import L from 'leaflet'


// init MapDisplay
function MapDisplay({ metaDataList }) {

  //init markerIcon
  const markerIcon = new L.divIcon({
    className: "title-text",
    iconAnchor: [12, 25],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -10],
    iconSize: [25, 41],
    html: `<div><img src="https://img.icons8.com/fluency/48/000000/place-marker.png"/></div>`
  });


  // init viewPort state
  const [viewport, setViewport] = useState({
    latitude: 7.1881,
    longitude: 21.0936,
    zoom: 2.6,
    width: '100vw',
    height: '100vh',
    scrollWheelZoom: false
  })

  return (
    <div>

      <MapContainer
        center={[viewport.latitude, viewport.longitude]}
        zoom={viewport.zoom}
        scrollWheelZoom={viewport.scrollWheelZoom}

      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {[...metaDataList].length > 0 && [...metaDataList].map((data, index) => {
          return <Marker key={index} position={[data.latitude, data.longitude]} icon={markerIcon}>
            <Tooltip interactive={true} direction="top" offset={[10, -10]} opacity={1} permanent className="px-2">
              <h5 className="text-center fw-bold">{data.country}</h5>
              <small className="text-center">{data.categoryName}</small>
              <h3 className="text-center fw-bold">{data._metaTotal}</h3>
              <div className="text-center">
                <a className="text-center fw-bold" style={{cursor: "pointer"}} onClick={() => console.log("HEY YOU CLICKED ME")}>View</a>
              </div>
            </Tooltip>
          </Marker>
        })}

      </MapContainer>
    </div>
  )
}




// export
export default MapDisplay