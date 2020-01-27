import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Image src="holder.js/100px250" fluid />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
