import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function FormModal({
  isOpen,
  onClose,
  title,
  onSubmit,
  data,
  link,
}) {
  let navigate = useNavigate();
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        navigate(link);
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="4">
              <>
                <FormControl id="title">
                  <FormLabel mb={1}>Title</FormLabel>
                  <Input
                    type="text"
                    autoComplete="title"
                    defaultValue={data?.title || ""}
                  />
                </FormControl>
                <FormControl id="body">
                  <FormLabel mb={1}>Body</FormLabel>
                  <Input
                    type="text"
                    autoComplete="body"
                    defaultValue={data?.body || ""}
                  />
                </FormControl>
              </>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                navigate(link);
              }}
            >
              Close
            </Button>
            <Button type="submit" colorScheme="blue" fontSize="md">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
