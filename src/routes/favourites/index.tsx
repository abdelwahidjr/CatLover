import * as React from "react";
import { useGetFavsQuery } from "./api";
import CatList from "../../components/cat-list";
import Layout from "../../components/layout";

type FavouritesViewProps = {};

const FavouritesView: React.FC<FavouritesViewProps> = (): JSX.Element => {
  const { data: favourites = [] } = useGetFavsQuery();

  const cats = favourites?.map((cat) => ({
    ...cat,
    url: cat?.image?.url,
    id: cat?.image_id,
  }));

  return React.useMemo(
    () => (
      <Layout>
        <CatList cats={{ pages: [[...cats]] }} />
      </Layout>
    ),
    [favourites]
  );
};

export default FavouritesView;
