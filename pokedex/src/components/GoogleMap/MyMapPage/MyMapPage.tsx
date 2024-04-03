import PageHeader from "../../Pokedex/PageHeader/PageHeader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../Map/Map";
import { mapOptions } from "../../../utils/googleMapsUtils";

type IsLoad = {
  isLoad: boolean;
  id?: string;
};

const MyMapPage = ({ isLoad, id }: IsLoad) => {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.idForGoogleMaps,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  return (
    <div className="App">
      <PageHeader
        homePageTitle="Home"
        myMapPageName="My Map"
        hrefHomePage=""
        hrefMyMapPage=""
      />
      <main>
        <div>
          <h1>google map component</h1>
        </div>

        <div>
          {isLoaded && (
            <Map
              isLoadedMap={isLoad}
              pokemonName={id}
              center={{ lat: 0, lng: 0 }}
              pokemonLocation={{ lat: 0, lng: 0 }}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default MyMapPage;
