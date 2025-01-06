import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import Meta from "../components/Meta";
import Paginate from "../components/Paginate";
import { useGetPackagesQuery } from "../slices/packageApiSlice";
import Package from "../components/package.jsx";
import { useEffect } from "react";

const HomePage = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetPackagesQuery({
    pageNumber,
    keyword,
  });
  console.log(data);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Meta />
      {keyword ? (
        <h2>Search Results for "{keyword}"</h2>
      ) : (
        <h2>Tour and Trekking</h2>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <Message variant="danger">{error?.data?.error || error.error}</Message>
      ) : (
        <>
          <Row>
            {data.packages.map((packages) => (
              <Col sm={12} md={6} lg={4} xl={3} key={packages._id}>
                <Package packages={packages} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={data.page}
            pages={data.pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export const dataLoader = async () => {
  let resp = await fetch("/api/v1/package");
  let data = await resp.json();
  return data;
};

export default HomePage;
