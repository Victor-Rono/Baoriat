import {GoogleMap, Map, useLoadScript, InfoWindow, Marker, GoogleApiWrapper, withScriptjs, withGoogleMap} from 'google-maps-react';
import React from 'react'

const GoogleMaps = () => {
    return (
        
          <GoogleMap defaultZoom={14} 
          defaultCenter={{lat: 0.5143843954075762, lng:35.27009241128539}}/>
 
 
  
    )
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps))

export default GoogleMaps
