import React, { useState } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
import { useGetSubscribedEmailQuery } from "../../slices/newsletterApiSlice";

const NewsletterPage = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetSubscribedEmailQuery({ pageNumber });

  return (
      <>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <Message variant="danger">{error.data.error}</Message>
        ) : (
          <>
            <Table responsive hover striped className="table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.newsletters.map((newsletter) => (
                  <tr key={newsletter._id}>
                    <td>{newsletter._id}</td>
                    <td>{newsletter.username}</td>
                    <td>{newsletter.email}</td>
                    <td>
                      <Button
                        as={Link}
                        size="sm"
                        variant="light"
                        to={`/admin/product/${product._id}/edit`}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        className="ms-2"
                        onClick={() => deleteProductHandler(product._id)}
                      >
                        <FaTrash style={{ color: "white" }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate page={data.page} pages={data.pages} admin={true} />
          </>
        )}
      </>
  );
};

export default NewsletterPage;
