import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
import { useAddPackageMutation, useDeletePackageMutation, useGetPackagesQuery } from "../../slices/packageApiSlice";

const TourPackageListPage = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error, refetch } = useGetPackagesQuery({ pageNumber });
  const [addPackage] = useAddPackageMutation();
  const [deletePackage] = useDeletePackageMutation();
  const navigate = useNavigate();

  const addPackageHandler = async () => {
    try {
      const resp = await addPackage().unwrap();
      toast.success(resp.message);
      navigate(`/admin/package/${resp.packages._id}/edit`);
      refetch();
    } catch (err) {
      toast.error(err.data.error || "Error adding package");
    }
  };

  const deletePackageHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      try {
        const resp = await deletePackage(id).unwrap();
        toast.warning(resp.message);
        refetch();
      } catch (err) {
        toast.error(err.data.error || "Error deleting package");
      }
    }
  };

  return (
    <>
      <Row className="align-items-center" style={{ marginTop: "6rem" }}>
        <Col>
          <h3 className="text">Tour Package</h3>
        </Col>
        <Col className="text-end">
          <Button size="sm" variant="success" onClick={addPackageHandler}>
            <FaEdit className="me-1" /> Add New Package
          </Button>
        </Col>
      </Row>

      {isLoading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <Message variant="danger">{error.data.error || "An error occurred"}</Message>
      ) : (
        <>
          <Table responsive hover striped bordered className="table-sm text-center mt-3">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Area</th>
                <th>Pricing</th>
                <th>Category</th>
                <th>At a Glance</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.packages.map((packageItem) => (
                <tr key={packageItem._id}>
                  <td className="align-middle">{packageItem._id}</td>
                  <td className="align-middle">{packageItem.Area}</td>
                  <td className="align-middle">
                    <strong>Standard:</strong> ${packageItem.Pricing.Standard}<br />
                    <strong>Deluxe:</strong> ${packageItem.Pricing.Deluxe}
                  </td>
                  <td className="align-middle">{packageItem.Category}</td>
                  <td className="align-middle">
                    <strong>Distance:</strong> {packageItem.AtAGlance.Distance}<br />
                    <strong>Altitude:</strong> {packageItem.AtAGlance.Altitude}<br />
                    <strong>Days:</strong> {packageItem.AtAGlance.Days}
                  </td>
                  <td className="align-middle">{packageItem.Description}</td>
                  <td className="align-middle">
                    <Button
                      as={Link}
                      size="sm"
                      variant="info"
                      to={`/admin/package/${packageItem._id}/edit`}
                      className="mb-2"
                    >
                      <FaEdit /> Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      className="ms-2"
                      onClick={() => deletePackageHandler(packageItem._id)}
                    >
                      <FaTrash /> Delete
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

export default TourPackageListPage;
