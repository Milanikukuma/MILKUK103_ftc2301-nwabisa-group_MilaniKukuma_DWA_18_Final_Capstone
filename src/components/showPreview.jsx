// ShowPreview.js

import React from "react";
import { useParams } from "react-router-dom";
import { Container,  Card } from "react-bootstrap";
import { fetchShowById } from "./CallingApi";

function ShowPreview() {
  const { showId } = useParams();
  const [showData, setShowData] = React.useState(null);

  React.useEffect(() => {
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

  return (
    <Container>
      <h1 className="mt-4 mb-4">{showData.title}</h1>
      <Card>
        <Card.Img variant="top" src={showData.image} alt={showData.title} />
        <Card.Body>
          <h5>{"Seasons: " + showData.seasons}</h5>
          <Card.Text>
            {/* Display show description or any other relevant information */}
            {showData.description}
          </Card.Text>
          <p style={{ fontWeight: 600 }}>
            {"Last Update " +
              new Date(showData.updated).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
          </p>
        </Card.Body>
      </Card>
      {/* Add more content for the show preview */}
    </Container>
  );
}

export default ShowPreview;
