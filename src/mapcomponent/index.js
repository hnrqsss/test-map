import React from 'react'
import { Map, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = props => {
    const origin = [-3.7282529,-38.5359288]
    const destination = [-3.7557806,-38.4907829]
    const zoom = 14
    const driver = [-3.7687699,-38.4802497]
    const center = [(origin[0] + destination[0])/2, (origin[1] + destination[1])/2]
    const myIcon = L.icon({
        iconUrl: 'poi.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [2, 2]
    })

    
    return (
        <div className='wrapper-map'>
            <div className='map'>
                <Map center={center} zoom={zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                        position={origin}
                        icon={myIcon}    
                    >
                        <Popup>
                        <span>Origem</span>
                        </Popup>
                    </Marker>

                    <Marker 
                        position={destination}
                        icon={myIcon}    
                    >
                        <Popup>
                        <span>Destino</span>
                        </Popup>
                    </Marker>

                    <Marker 
                        position={driver}
                        icon={myIcon}    
                    >
                        <Popup>
                        <span>motorista</span>
                        </Popup>
                    </Marker>

                </Map>
            </div>
        </div>
    )
}

export default MapComponent