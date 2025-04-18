// src/components/sections/Education.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="bg-white pt-5 pb-3">

      <Container className="text-center">
        <h2 className="display-5 fw-bold mb-4">Education</h2>
        <div className="border-bottom border-2 border-primary mx-auto mb-4" style={{ width: "60px" }}></div>

        <Row className="justify-content-center">
          <Col md={8}>
            <div className="d-flex align-items-center bg-light shadow-sm p-4 rounded">
              <div className="me-4">
                <FaGraduationCap size={40} color="#2D9CDB" />
              </div>
              <div className="text-start">
                <h5 className="fw-bold mb-1">Bachelor of Engineering in Computer Science</h5>
                <p className="mb-1 text-primary">
                  KLE Technological University, Hubli, Karnataka, India
                </p>
                <p className="mb-1 text-muted">2026</p>
                <p className="fw-bold mb-0">CGPA: 9.25</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
