import React, { useState } from "react";
import Message from "../../components/Message";
import {
  Table,
  Button,
  Modal,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserAdminMutation,
  useSignupMutation,
} from "../../slices/userApiSlice";
import { Container } from "@mui/material";

const UsersPage = () => {
  const { data: users, isLoading, error, refetch } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUserAdmin] = useUpdateUserAdminMutation();
  const [signupUser] = useSignupMutation();

  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { userInfo } = useSelector((state) => state.auth);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (id) => {
    setUserIdToDelete(id);
    setShowModal(true);
  };

  const deleteUserHandler = async () => {
    if (userIdToDelete) {
      try {
        let resp = await deleteUser(userIdToDelete).unwrap();
        toast.success(resp.message);
        setShowModal(false);
        refetch();
      } catch (err) {
        toast.error(err.data.error);
      }
    }
  };

  const updateRoleHandler = async (id, role) => {
    try {
      let response = await updateUserAdmin({ id, role }).unwrap();
      toast.success(response.message);
      refetch();
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  const addUserHandler = async () => {
    // Email regex validation
    const emailRegex = /^([a-zA-Z][\w\.\-]+[a-zA-Z0-9])@([a-zA-Z0-9]{2,20})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
    if (!emailRegex.test(newUser.email)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      let response = await signupUser(newUser).unwrap();
      toast.success(response.message);
      setShowAddUserModal(false);
      refetch();
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  return (
    <Container style={{marginTop: 70}}>
      <h2 className="mb-3">Users</h2>
      {userInfo?.isSuperUser && (
        <Button className="mb-3" onClick={() => setShowAddUserModal(true)}>
          Add User
        </Button>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <Message variant="danger">{error.data.error}</Message>
      ) : (
        <Table responsive striped hover className="table-sm" style={{marginBottom: 70}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.isSuperUser
                    ? "Super User"
                    : user.isBlogUser
                    ? "Blog User"
                    : user.isTnTUser
                    ? "TnT User"
                    : "None"}
                </td>
                <td>
                  {user.email === "nutternikexdx@gmail.com" ? (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      SUPREME
                    </span>
                  ) : (
                    <div className="d-flex flex-row">
                      {!user.isSuperUser && (
                        <Dropdown className="mx-2">
                          <Dropdown.Toggle variant="success" size="sm">
                            Role
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() =>
                                updateRoleHandler(user._id, "isSuperUser")
                              }
                            >
                              Super User
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                updateRoleHandler(user._id, "isBlogUser")
                              }
                            >
                              Blog User
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                updateRoleHandler(user._id, "isTnTUser")
                              }
                            >
                              TnT User
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      )}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleShowModal(user._id)}
                        disabled={user.isSuperUser}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteUserHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddUserModal} onHide={() => setShowAddUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAddUserModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={addUserHandler}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UsersPage;
