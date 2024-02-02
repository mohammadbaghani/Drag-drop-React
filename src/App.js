import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { generateQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/Board";

export default function App() {
  const data = {
    medium: generateQuoteMap(3),
    large: generateQuoteMap(1)
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <Card>
            <CardBody>
              <h2>برنامه های شرکت تابان نت</h2>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Board initial={data.medium} withScrollableColumns />
    </>
  );
}
