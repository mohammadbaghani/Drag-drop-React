import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { generateQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/Board";
import './styles.css';


export default function App() {
  const data = {
    medium: generateQuoteMap(3),
    large: generateQuoteMap(4)
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <Card>
            <CardBody>
              <h2>برنامه های شرکت</h2>
            
              <h1 >با کلیک روی هر کدام از آیتم ها و کشیدن آن ها و رها کردن  , آن آیتم را به ستون دیگری منتقل نمایید </h1>
              <h1 className="column-move">ستون ها را هم با همین روش می توانید جابه جا کنید</h1>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Board initial={data.medium} withScrollableColumns />
    </>
  );
}
