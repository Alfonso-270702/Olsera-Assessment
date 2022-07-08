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
} from "@chakra-ui/react";

export default function ConfirmationModal({ isOpen, onClose, onClick }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Konfirmasi</ModalHeader>
        <ModalBody>
          <Text mb="1rem">Apakah Anda Yakin Ingin Menghapus data?</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Tidak
          </Button>
          <Button colorScheme="blue" onClick={onClick}>
            Ya
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
