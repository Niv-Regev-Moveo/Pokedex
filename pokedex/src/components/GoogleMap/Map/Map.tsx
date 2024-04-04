import { useState, useCallback, memo, useMemo } from "react";
import { StyledMapContainer } from "./styledMap";
import { GoogleMap, GoogleMapProps, Marker } from "@react-google-maps/api";

interface MapProps {
  isLoadedMap: boolean;
  center: { lat: number; lng: number };
  pokemonName: string | undefined;
  pokemonLocation: { lat: number; lng: number };
}

const Map = ({
  isLoadedMap,
  center,
  pokemonName,
  pokemonLocation,
  ...props
}: MapProps & GoogleMapProps) => {
  const [map, setMap] = useState(null);

  const officeLocation = useMemo(
    () => ({
      lat: 32.0649,
      lng: 34.7719,
    }),
    []
  );

  const directionService = new google.maps.DirectionsService();
  directionService.route(
    {
      origin: officeLocation,
      destination: pokemonLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionRenderer.setDirections(response);
        directionRenderer.setMap(map);
      }
    }
  );

  const directionRenderer = new google.maps.DirectionsRenderer();

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(officeLocation);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const containerStyle = {
    width: "600px",
    height: "600px",
  };

  return isLoadedMap ? (
    <>
      <StyledMapContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={officeLocation}
          onLoad={onLoad}
          zoom={13}
          mapTypeId={"satellite"}
          {...props}
        >
          <Marker position={officeLocation} />
          <Marker position={pokemonLocation} />
        </GoogleMap>
      </StyledMapContainer>
    </>
  ) : null;
};

export default memo(Map);
