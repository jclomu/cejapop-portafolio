import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Grid() {
  const [sitesData, setSitesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/db.json'); // Ajusta la ruta del archivo JSON
        const data = await response.json();
        setSitesData(data.sitesData);
      } catch (error) {
        console.log('Error al obtener datos', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row xs={1} md={2} className="g-4">
      {sitesData.map((site) => (
        <Col key={site.id}>
          <Card>
            <Card.Img variant="top" src={site.img} />
            <Card.Body>
              <Card.Title>{site.nombre}</Card.Title>
              <Card.Text>{site.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Grid;
