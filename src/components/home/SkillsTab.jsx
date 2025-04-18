import React from "react";
import { Row, Col } from "react-bootstrap";

function SkillsTab() {
  const technicalSkills = ["C/C++","Data Structures", "Python","HTML","CSS","Javascript"];
  const softSkills = ["Creativity","Teamwork","Problem-solving","Adaptability","Time-management","stress-management"];

  return (
    <div className="skills-container py-5">
      <h2 className="text-center mb-5">Skills</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={5} className="mb-4">
          <div className="skills-box shadow-sm p-4 rounded border">
            <h5 className="text-center mb-3 fw-bold">Technical Skills</h5>
            <ul className="list-unstyled mb-0">
              {technicalSkills.map((skill, idx) => (
                <li key={idx} className="mb-2 text-primary">• {skill}</li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={12} md={5} className="mb-4">
          <div className="skills-box shadow-sm p-4 rounded border">
            <h5 className="text-center mb-3 fw-bold">Soft Skills</h5>
            <ul className="list-unstyled mb-0">
              {softSkills.map((skill, idx) => (
                <li key={idx} className="mb-2 text-primary">• {skill}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SkillsTab;
