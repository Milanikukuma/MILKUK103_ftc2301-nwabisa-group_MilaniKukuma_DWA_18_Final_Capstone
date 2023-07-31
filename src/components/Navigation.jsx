import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search"; // Import the Search component

function Navigation() {
  // Function to handle the search
  const handleSearch = (searchQuery, searchType) => {
    // Implement the search logic based on the searchQuery and searchType
    console.log("Searching for:", searchQuery);
    console.log("Search type:", searchType);
    // Perform the specific search based on the searchType
    if (searchType === "shows") {
      // Search for shows
    } else if (searchType === "seasons") {
      // Search for seasons
    } else if (searchType === "episodes") {
      // Search for episodes
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand linear-gradient(177deg, rgba(125, 82, 158, 0.00) 0%, rgba(176, 119, 221, 0.76) 21.24%) ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Voice Podcast
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/SignIn">
                  SignIn
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            {/* Render the Search component */}
            <Search onSearch={handleSearch} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
