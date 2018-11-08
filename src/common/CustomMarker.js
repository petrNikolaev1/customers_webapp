import React, {Component} from 'react';
import {InfoWindow, Marker} from "react-google-maps";

import '@/assets/styles/Marker.scss'

export default class CustomMarker extends Component {

    render() {
        const {
            position, label, info, infoWindowShown, onMarkerClick, onMarkerInfoWindowCloseClick
        } = this.props;

        return (
            <Marker position={position} label={label} onClick={onMarkerClick}>
                {infoWindowShown &&
                <InfoWindow onCloseClick={onMarkerInfoWindowCloseClick}>
                    <div className='custom-marker-info-window-default'>
                        {info}
                    </div>
                </InfoWindow>}
            </Marker>
        )
    }
}





