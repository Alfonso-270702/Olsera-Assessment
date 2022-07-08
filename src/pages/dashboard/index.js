import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  useDisclosure,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardAsync,
  getCommentAsync,
} from "../../store/actions/DashboardAction";
import { CardList, ReadModal } from "../../components";
import { BsHeartFill } from "react-icons/bs";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [modalTitle, setModalTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);
  const [styled, setStyled] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardAsync(page));
    setLoading(false);
  }, [page]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight - 100 ||
      window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 100
    ) {
      if (dashboards) {
        loadUserList();
      }
    }
  };

  const loadUserList = () => {
    setTimeout(() => {
      const newPage = page + 1;
      setPage(newPage);
    }, 1000);
  };

  const fetchComment = (dashboard) => {
    const { id, title } = dashboard;
    setModalTitle(title);
    dispatch(
      getCommentAsync(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      )
    );
    onOpen();
  };

  useEffect(() => {
    const style = JSON.parse(localStorage.getItem("style"));
    if (style) {
      setStyled(style);
    }
  }, []);

  const addLike = (dashboard, index) => {
    // HANDLE STYLE WHEN LIKE AND UNLIKE
    let obj = {};
    obj[`style-${index}`] = "red";
    setStyled({ ...styled, ...obj });
    let oldStyle = JSON.parse(localStorage.getItem("style"));
    if (oldStyle) {
      if (oldStyle[`style-${index}`]) {
        delete oldStyle[`style-${index}`];
        setStyled(oldStyle);
        localStorage.setItem("style", JSON.stringify({ ...oldStyle }));
      } else {
        localStorage.setItem("style", JSON.stringify({ ...oldStyle, ...obj }));
      }
    } else {
      localStorage.setItem("style", JSON.stringify({ ...obj }));
    }

    // HANDLE LIKE AND UNLIKE
    let oldData = JSON.parse(localStorage.getItem("likes"));
    if (oldData) {
      let index = oldData.findIndex((x) => x.id === dashboard.id);
      if (index >= 0) {
        oldData.splice(index, 1);
        localStorage.setItem("likes", JSON.stringify([...oldData]));
      } else if (index < 0) {
        localStorage.setItem("likes", JSON.stringify([...oldData, dashboard]));
      }
    } else {
      localStorage.setItem("likes", JSON.stringify([dashboard]));
    }
  };

  const dashboards = useSelector((state) => state.fetchDashboard.dashboards);

  const comments = useSelector((state) => state.fetchDashboard.comments);

  return (
    <>
      <Box as="section" mt="3" pb="10px">
        <Flex justify="center">
          <Heading as="h6" color="#1C4532" size="lg" mb="5">
            Halaman Utama
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
          {loading ? (
            <>
              <Flex justify="center" mt="5">
                <Spinner />
              </Flex>
            </>
          ) : (
            <>
              {dashboards.map((dashboard, index) => (
                <React.Fragment key={index}>
                  <CardList
                    data={dashboard}
                    index={index}
                    type="dashboard"
                    component={
                      <Flex>
                        <Button
                          onClick={() => fetchComment(dashboard)}
                          mr="2"
                          variant="outline"
                        >
                          Detail
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => addLike(dashboard, index)}
                        >
                          <BsHeartFill
                            color={styled ? styled[`style-${index}`] : ""}
                          />
                        </Button>
                      </Flex>
                    }
                  />
                </React.Fragment>
              ))}
            </>
          )}
        </Box>
      </Box>
      <ReadModal
        title={modalTitle}
        comments={comments}
        isOpen={isOpen}
        onClose={onClose}
        type="dashboard"
      />
    </>
  );
}
