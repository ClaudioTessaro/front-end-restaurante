import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";

import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/produtos`)
      .then((res) => setProdutos(res.data));
  });

  const renderProduto = (produto) => {
    return (
      <Card className="produto">
        <Card.Img variant="top" src={produto.foto} />
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <LinkContainer to={"/produtos/" + produto._id}>
            <Button variant="primary" block>
              Visualizar
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  };

  return <div className="listaDeProdutos">{produtos.map(renderProduto)}</div>;
}
export default ListarProdutos;
