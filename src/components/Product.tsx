import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

interface Props {}

const Product = ({ product }: any) => {
  return (
    <Card className="my-2 p-2 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color="orange" size={22} />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
