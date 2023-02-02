import { createBrowserRouter, redirect } from "react-router-dom";
import BreedDetail from "../components/breed-detail";
import Layout from "../components/layout";
import BreedsView from "./breeds";
import CatsView from "./cats";
import FavouritesView from "./favourites";

const rootLoader = async () => {
  return redirect("/cats");
};

export const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader, // Redirects to '/cats' feed
    errorElement: <Layout>404 page</Layout>,
  },
  {
    path: "/cats",
    element: <CatsView />,
    children: [
      {
        path: ":catId",
      },
    ],
  },
  {
    path: "favourites",
    element: <FavouritesView />,
  },
  {
    path: "breeds",
    element: <BreedsView />,
    children: [
      {
        path: ":breedId",
        element: <BreedDetail />,
      },
    ],
  },
]);
