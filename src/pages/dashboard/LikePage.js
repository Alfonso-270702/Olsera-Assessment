import React from "react";
import { CardList } from "../../components";
import { Box, Flex, Heading } from "@chakra-ui/react";

export default function LikePage() {
  const likes = JSON.parse(localStorage.getItem("likes"));
  return (
    <>
      <Box as="section" mt="3" pb="10px">
        <Flex justify="center">
          <Heading as="h6" color="#1C4532" size="lg" mb="5">
            Halaman Like Page
          </Heading>
        </Flex>
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
          px={{
            md: "8",
          }}
        >
          {likes &&
            likes.map((like, index) => (
              <React.Fragment key={index}>
                <CardList data={like} index={index} type="dashboard" />
              </React.Fragment>
            ))}
        </Box>
      </Box>
    </>
  );
}
