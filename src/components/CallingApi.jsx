

// api/CallingApi.js

const BASE_URL = "https://podcast-api.netlify.app";

// Fetch all shows (PREVIEW objects)
export async function fetchAllShows() {
  const response = await fetch(`${BASE_URL}/shows`);
  const data = await response.json();
  return data;
}

// Fetch a single show with its seasons and episodes by ID
export async function fetchShowById(id) {
  const response = await fetch(`${BASE_URL}/id/${id}`);
  const data = await response.json();
  return data;
}

// Fetch episodes by season ID
export async function fetchEpisodesBySeasonId(seasonId) {
    const response = await fetch(`${BASE_URL}/seasons/${seasonId}/episodes`);
    const data = await response.json();
    return data;
  }
