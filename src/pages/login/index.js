import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { loginAsync } from "../../store/actions/LoginAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (e) => {
    const form = {
      userId: e.target[0].value,
      email: e.target[1].value,
    };
    dispatch(loginAsync(form, navigate));
  };
  return (
    <>
      <Box>
        <Box
          maxW="6xl"
          mx="auto"
          py={{
            base: "10",
            md: "20",
          }}
          px={{
            base: "4",
            md: "10",
          }}
        >
          <Flex justify="center">
            <Box w="full" maxW="xl" mx="auto">
              <Box
                bg={{
                  md: mode("white", "gray.700"),
                }}
                rounded={{
                  md: "2xl",
                }}
                p={{
                  base: "4",
                  md: "12",
                }}
                borderWidth={{
                  md: "1px",
                }}
                borderColor={mode("gray.200", "transparent")}
                shadow={{
                  md: "lg",
                }}
              >
                <Box
                  mb="8"
                  textAlign={{
                    base: "center",
                    md: "start",
                  }}
                >
                  <Heading size="lg" mb="2" fontWeight="extrabold">
                    Welcome to Envelope
                  </Heading>
                  <Text
                    fontSize="lg"
                    color={mode("gray.600", "gray.400")}
                    fontWeight="medium"
                  >
                    Enter your info to get started
                  </Text>
                </Box>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(e);
                  }}
                >
                  <Stack spacing="4">
                    <FormControl id="id">
                      <FormLabel mb={1}>UserId</FormLabel>
                      <Input autoComplete="userId" />
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel mb={1}>Email</FormLabel>
                      <Input type="email" autoComplete="email" />
                    </FormControl>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      fontSize="md"
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
