import * as React from "react";
import { useParams } from "react-router-dom";
import { Button, Center, Spinner } from "@chakra-ui/react";
import { useBreedsQuery } from "./api";
import Layout from "../../components/layout";
import BreedList from "../../components/breed-list";

type BreedsViewProps = {};

const BreedsView: React.FC<BreedsViewProps> = (): JSX.Element => {
  const { breedId } = useParams<{ breedId: string }>();

  const {
    data: breeds = {
      pages: [],
    },
    isLoading,
    fetchNextPage,
    isFetching,
  } = useBreedsQuery();

  return (
    <Layout>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <BreedList breeds={breeds} />
      )}
      {!breedId && (
        <Center>
          <Button
            my={5}
            size="lg"
            onClick={() => fetchNextPage()}
            isLoading={isFetching}
            disabled={isFetching}
          >
            Load More Breeds!
          </Button>
        </Center>
      )}
    </Layout>
  );
};

export default BreedsView;
