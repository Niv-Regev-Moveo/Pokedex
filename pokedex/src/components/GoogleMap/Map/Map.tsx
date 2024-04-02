import { useState, useCallback, memo, useMemo } from "react";
import { StyledMpContainer } from "./styledMap";
import { GoogleMap, GoogleMapProps, Marker } from "@react-google-maps/api";

interface MapProps {
  isLoadedMap: boolean;
}

const Map = ({ isLoadedMap, ...props }: MapProps & GoogleMapProps) => {
  const [map, setMap] = useState(null);

  const center = useMemo(
    () => ({
      lat: 32.0647,
      lng: 34.7717,
    }),
    []
  );

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  return isLoadedMap ? (
    <>
      <StyledMpContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          {...props}
        >
          <Marker position={center} />
        </GoogleMap>
      </StyledMpContainer>
    </>
  ) : null;
};

export default memo(Map);
