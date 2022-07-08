import React from "react";
import {
  Box,
  Text,
  useColorModeValue as mode,
  Stack,
  Heading,
} from "@chakra-ui/react";

export default function CardList({ data, component, ref }) {
  return (
    <Box
      ref={ref}
      rounded={{
        lg: "lg",
      }}
      borderWidth="1px"
      bg={mode("white", "gray.700")}
      maxW="3xl"
      mx="auto"
      shadow="base"
      mb="3"
    >
      <Stack px="4" py="4">
        <Box>
          <Heading as="h4" size="md" pb="3">
            {data.title}
          </Heading>
          <Text>{data.body}</Text>
        </Box>
        {component}
      </Stack>
    </Box>
  );
}
