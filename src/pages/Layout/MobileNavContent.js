import { CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

export const MobileNavContent = (props) => {
  const { isOpen, onClose, children } = props;
  const bg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  const disableScroll = () => {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };
  const enableScroll = () => {
    window.onscroll = () => {};
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{
            duration: 0.1,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex
            direction="column"
            w="100%"
            bg={bg}
            h="100vh"
            overflow="auto"
            pos="absolute"
            top={0}
            left={0}
            zIndex={20}
            px={4}
            py={4}
          >
            {children}
            <CloseButton pos="absolute" top={4} right={4} onClick={onClose} />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
