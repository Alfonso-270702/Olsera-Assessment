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

export default function ReadModal({
  isOpen,
  onClose,
  title,
  comments,
  type,
  body,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          {type === "dashboard" ? (
            <>
              {comments.map((comment, index) => (
                <Text mb="1rem" key={index}>
                  {comment.body}
                </Text>
              ))}
            </>
          ) : (
            <>
              <Text mb="1rem">{body}</Text>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
