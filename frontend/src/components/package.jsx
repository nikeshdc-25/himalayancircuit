import React from "react";
import { Button, Card, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";

function Package({ packages }) {
  return (
    <Card className="my-3 product-card">
      <Link
        to={`/package/${packages._id}`}
        title={`${packages.name}`}
        className="nav-link"
      >
        <Card.Img src={packages.image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Text as="div">
          <strong className="product-title">{packages.name}</strong>
        </Card.Text>
        <Card.Text as="h3">${packages.price}</Card.Text>
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
