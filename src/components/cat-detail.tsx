import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { useCatQuery } from "../routes/cats/api";
import CatThumbnail from "./cat-thumbnail";
import { useGetFavsQuery } from "../routes/favourites/api";
import DeleteFavCatBtn from "./delete-favourite-cat-button";
import AddFavCatBtn from "./add-favourite-cat-button";
import { find } from "lodash";

type CatDetailProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CatDetail: React.FC<CatDetailProps> = ({
  onClose,
  isOpen,
}): JSX.Element => {
  const navigate = useNavigate();
  const { catId } = useParams<{ catId: string }>();
  const { data, isFetching } = useCatQuery(catId);
  const { data: favCats } = useGetFavsQuery();

  const { id, url, breeds } = data || {};
  const favId = find(favCats, { image_id: id })?.id;

  const handleClose = () => {
    onClose();

    // It might be better to use react-router-loader / action
    return navigate("./");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {breeds ? breeds.map(({ name }) => name).join(", ") : " "}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isFetching ? (
            <Spinner />
          ) : (
            url && id && <CatThumbnail url={url} id={id} />
          )}
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>

            {<DeleteFavCatBtn id={favId} onSuccess={handleClose} />}

            {catId && <AddFavCatBtn id={catId} disabled={favId != null} />}
            {<DeleteFavCatBtn id={favId} onSuccess={handleClose} />}
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CatDetail;
