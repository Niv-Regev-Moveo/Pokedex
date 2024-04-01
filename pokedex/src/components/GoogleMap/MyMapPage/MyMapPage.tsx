import PageHeader from "../../Pokedex/PageHeader/PageHeader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../Map/Map";
import { mapOptions } from "../../../utils/googleMapsUtils";

type IsLoad = {
  isLoad: boolean;
};

const MyMapPage = ({ isLoad }: IsLoad) => {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.idForGoogleMaps,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
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
        <div>{isLoaded && <Map isLoadedMap={isLoad} />}</div>
      </main>
    </div>
  );
};

export default MyMapPage;
