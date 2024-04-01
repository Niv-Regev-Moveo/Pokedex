import { useState, useCallback, memo } from "react";
import { StyledMpContainer } from "./styledMap";
import { GoogleMap, GoogleMapProps } from "@react-google-maps/api";

interface MapProps {
  isLoadedMap: boolean;
}

const Map = ({ isLoadedMap, ...props }: MapProps & GoogleMapProps) => {
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  const center = {
    lat: 32.064867,
    lng: 34.771378,
  };

  return isLoadedMap ? (
    <StyledMpContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        {...props}
      />
    </StyledMpContainer>
  ) : null;
};

export default memo(Map);
