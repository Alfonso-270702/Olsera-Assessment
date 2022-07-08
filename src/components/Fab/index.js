import React from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Fab({ link, onClick }) {
  let navigate = useNavigate();
  return (
    <Box
      as="button"
      width="50px"
      height="50px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      borderRadius="50%"
      fontSize="30px"
      fontWeight="bold"
      bg="#0E3033"
      borderColor="#ccd0d5"
      color="#ffffff"
      _hover={{ bg: "#ebedf0", color: "#0E3033" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      text-decoration="none"
      position="fixed"
      right="30px"
      bottom="30px"
      onClick={() => {
        navigate(link);
        onClick();
      }}
    >
      +
    </Box>
  );
}
