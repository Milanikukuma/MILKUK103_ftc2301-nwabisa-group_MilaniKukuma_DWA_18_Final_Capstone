import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { fetchShowById } from "./api/CallingApi";

function Episodes() {
  const { showId, seasonNumber } = useParams();
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showData = await fetchShowById(showId);
        setShowData(showData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [showId]);

  if (!showData) {
    return <div>Loading...</div>;
  }

  // Find the specific season data
  const seasonData = showData.seasons.find((season) => season.number === seasonNumber);

  if (!seasonData) {
    return <div>Season not found</div>;
  }

  return (
    <div>
      <Container>
        <h1 className="mt-4 mb-4">{`${showData.title} - Season ${seasonData.number}`}</h1>
        <Row>
          {seasonData.episodes.map((episode) => (
            <Col key={episode.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{episode.title}</Card.Title>
                  <p>{episode.description}</p>
                  <p>{`Air Date: ${episode.airDate}`}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Episodes;
