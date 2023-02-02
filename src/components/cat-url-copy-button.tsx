import * as React from "react";
import { Button, Icon, useToast } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useDeleteFavCatMutation } from "../routes/favourites/api";

type DeleteFavCatBtnProps = { id?: string; onSuccess?: () => void };

const DeleteFavCatBtn: React.FC<DeleteFavCatBtnProps> = ({
  id,
  onSuccess,
}): JSX.Element => {
  const deleteFavCat = useDeleteFavCatMutation();
  const toast = useToast();

  const disabled = deleteFavCat.isSuccess || id == null;

  React.useEffect(() => {
    deleteFavCat.isSuccess
      ? (toast({
          title: "Removed from favourites.",
          status: "error",
          duration: 1000,
          isClosable: true,
        }),
        onSuccess && onSuccess())
      : null;
  }, [deleteFavCat.isSuccess]);

  React.useEffect(() => {
    deleteFavCat.isError
      ? toast({
          title: "Failed to remove from favs.",
          status: "error",
          duration: 1000,
          isClosable: true,
        })
      : null;
  }, [deleteFavCat.isError]);

  return (
    <Button
      colorScheme="red"
      onClick={() => deleteFavCat.mutate(id)}
      isLoading={deleteFavCat.isLoading}
      disabled={disabled}
    >
      <Icon as={FaTrash} />
    </Button>
  );
};

export default DeleteFavCatBtn;
