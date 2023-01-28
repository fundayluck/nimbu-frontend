import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyLocation = ({ center, setCenter }) => {
    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound: (location) => {
            setCenter(location.latlng)
            map.flyTo(location.latlng, 15)
        },
    })
    return center === null ? null : (
        <Marker position={center}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const ToMap = () => {
    const [center, setCenter] = useState(null)

    useEffect(() => {
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);

    return (

        <MapContainer
            zoom={5}
            center={[-1.0933299, 113.2829777]}
            scrollWheelZoom={true}
            style={{ width: '140vh', height: '500px' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyLocation center={center} setCenter={setCenter} />
        </MapContainer>
    )

}

export default ToMap