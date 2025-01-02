import React from "react";
import { Button, Card, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";

function Package({ packages }) {
  return (
    <Card className="my-3 package-card">
              <Card.Img src={packages.image} variant="top" />

      <Link
        to={`/package/${packages._id}`}
        title={`${packages.name}`}
        className="nav-link"
      >
      </Link>
      <Card.Body>
        <Card.Text as="div">
          <strong className="product-title">{packages.Category}</strong>
        </Card.Text>
        <hr></hr>
        <Card.Text as="h6">{packages.Description}</Card.Text>
      </Card.Body>
      <CardFooter>
        <div className="d-flex justify-content-start gap-2">
          <Button variant="success">Customize</Button>
          <Button variant="warning">Explore</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Package;
