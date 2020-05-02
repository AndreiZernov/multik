import React, { useState, useEffect, useContext, createContext } from "react";
import Client from "../contentful";

const DataItemsContext = createContext();

const useDataItems = () => useContext(DataItemsContext);

const DataItemsProvider = ({ children }) => {
  const [photos, setPhotos] = useState({});
  const [smallPhotos, setSmallPhotos] = useState({});
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(true);
  const [heroPhotos, setHeroPhotos] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        let photos = await Client.getEntries({ content_type: "photos" });
        let about = await Client.getEntries({ content_type: "about" });
        let smallPhotos = await Client.getEntries({
          content_type: "photosSmall"
        });
        let info = await Client.getEntries({ content_type: "info" });

        let portrait = FormatData(photos.items[0].fields.people);
        let conceptual = FormatData(photos.items[0].fields.conceptual);
        let still_life = FormatData(photos.items[0].fields.stillLife);
        let candid = FormatData(photos.items[0].fields.candid);
        let urban = FormatData(photos.items[0].fields.urban);
        let video = FormatData(photos.items[0].fields.video);

        let smallPortrait = FormatData(smallPhotos.items[0].fields.portrait);
        let smallConceptual = FormatData(
          smallPhotos.items[0].fields.conceptual
        );
        let smallStill_life = FormatData(smallPhotos.items[0].fields.stillLife);
        let smallCandid = FormatData(smallPhotos.items[0].fields.candid);
        let smallUrban = FormatData(smallPhotos.items[0].fields.urban);

        let name = about.items[0].fields.name;
        let bio = about.items[0].fields.bio;
        let profileImg = "https:" + about.items[0].fields.photo.fields.file.url;

        let hero = FormatData(photos.items[0].fields.hero);

        setPhotos({ portrait, conceptual, still_life, candid, urban, video });
        setSmallPhotos({
          smallPortrait,
          smallConceptual,
          smallStill_life,
          smallCandid,
          smallUrban
        });
        setAbout({ name, bio, profileImg });
        setInfo(info.items.map(item => ({ ...item.fields })));
        setHeroPhotos(hero);
        setTimeout(() => setLoading(false), 2000);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const FormatData = a => a.map(item => "https:" + item.fields.file.url);

  const dataItems = { photos, loading, heroPhotos, about, smallPhotos, info };

  return (
    <DataItemsContext.Provider value={dataItems}>
      {children}
    </DataItemsContext.Provider>
  );
};

const DataItemsConsumer = DataItemsContext.Consumer;

export { DataItemsProvider, DataItemsConsumer, DataItemsContext, useDataItems };
