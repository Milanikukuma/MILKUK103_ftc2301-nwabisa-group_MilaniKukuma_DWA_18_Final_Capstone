// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { fetchAllShows } from "./CallingApi";
import genreMapping from "./genreMapping";

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getShows = await fetchAllShows();
        setShows(getShows);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  console.log(shows);

  return (
    <div
      className="landing-page container-fluid"
      style={{
        background:
          "linear-gradient(177deg, rgba(125, 82, 158, 0.00) 0%, rgba(176, 119, 221, 0.76) 21.24%)",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Container>
        <h1 className="mt-4 mb-4">Anything Is Poddable</h1>
        <Row>
          {shows.map((show) => (
            <Col key={show.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              {/* Use Link to navigate to the ShowPreview component with the show ID as a parameter */}
              <Link
                to={`/Show/${show.id}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Card>
                  <Card.Img variant="top" src={show.image} alt={show.title} />
                  <Card.Body>
                    <Card.Title style={{ textDecoration: "none", color: "#000" }}>
                      {show.title}
                    </Card.Title>
                    <h5>{"Seasons: " + show.seasons}</h5>
                    <Card.Text>
                      {genreMapping[show.genres[1]]
                        ? genreMapping[show.genres[1]] +
                          " " +
                          genreMapping[show.genres[0]]
                        : genreMapping[show.genres[0]]}
                    </Card.Text>
                    <p style={{ fontWeight: 600 }}>{"Seasons " + show.seasons}</p>
                    <p style={{ fontWeight: 600 }}>
                      {"Last Update " +
                        new Date(show.updated).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
