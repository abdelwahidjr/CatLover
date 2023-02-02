import * as React from "react";
import { useParams } from "react-router-dom";
import { Button, Center, Spinner } from "@chakra-ui/react";
import { useCatsQuery } from "./api";
import CatList from "../../components/cat-list";
import Layout from "../../components/layout";

type CatsViewProps = {};

const CatsView: React.FC<CatsViewProps> = (): JSX.Element => {
  const { catId } = useParams<{ catId: string }>();
  const {
    data: cats = {
      pages: [],
    },
    isLoading,
    isFetching,
    fetchNextPage,
  } = useCatsQuery();

  return (
    <Layout>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <CatList {...{ cats, catId }} />
      )}
      <Center>
        <Button
          my={5}
          size="lg"
          onClick={() => fetchNextPage()}
          isLoading={isFetching}
          disabled={isFetching}
        >
          Load More Cats!
        </Button>
      </Center>
    </Layout>
  );
};

export default CatsView;
