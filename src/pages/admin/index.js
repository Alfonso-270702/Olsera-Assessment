import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminPostAsync,
  deletePostAsync,
} from "../../store/actions/AdminAction";
import { CardList, Fab, ConfirmationModal, ReadModal } from "../../components";
import Create from "./Create";
import Edit from "./Edit";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Admin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isOpen: isCreate,
    onOpen: createOpen,
    onClose: createClose,
  } = useDisclosure();

  const {
    isOpen: isEdit,
    onOpen: editOpen,
    onClose: editClose,
  } = useDisclosure();

  const {
    isOpen: isDelete,
    onOpen: deleteOpen,
    onClose: deleteClose,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  const [loading, setLoading] = useState(true);

  const [edit, setEdit] = useState("");
  const [deleteData, setDeleteData] = useState(0);
  const [read, setRead] = useState("");

  useEffect(() => {
    dispatch(getAdminPostAsync("https://jsonplaceholder.typicode.com/posts"));
    setLoading(false);
  }, []);

  const posts = useSelector((state) => state.fetchAdmin.posts);

  const handleEdit = (post) => {
    setEdit(post);
    navigate(`/admin/posts/${post.id}/edit`);
    editOpen();
  };

  const handleDelete = () => {
    dispatch(deletePostAsync(deleteData, deleteClose));
  };

  return (
    <>
      <Fab link="/admin/create" onClick={createOpen} />
      <Box as="section" mt="3" pb="10px">
        <Flex justify="center">
          <Heading as="h6" color="#1C4532" size="lg" mb="5">
            Halaman Admin
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
            <Flex justify="center" mt="5">
              <Spinner />
            </Flex>
          ) : (
            <>
              {posts.map((post, index) => (
                <React.Fragment key={index}>
                  <CardList
                    data={post}
                    index={index}
                    component={
                      <>
                        <Flex>
                          <Button
                            onClick={() => handleEdit(post)}
                            mr="2"
                            variant="outline"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            mr="2"
                            onClick={() => {
                              deleteOpen();
                              setDeleteData(post.id);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              onOpen();
                              setRead(post);
                              navigate(`/admin/posts/${post.id}`);
                            }}
                          >
                            Read
                          </Button>
                        </Flex>
                      </>
                    }
                  />
                </React.Fragment>
              ))}
            </>
          )}
        </Box>
      </Box>

      <Create isOpen={isCreate} onClose={createClose} />
      <Edit isOpen={isEdit} onClose={editClose} edit={edit} />
      <ConfirmationModal
        isOpen={isDelete}
        onClose={deleteClose}
        onClick={handleDelete}
      />
      <ReadModal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          navigate("/admin");
        }}
        body={read.body}
        title={read.title}
      />
    </>
  );
}
