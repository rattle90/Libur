import React, { useState, useEffect } from "react";
import "./styles.css";

const apiKey = 'AIzaSyAu7vyp9P6KKQzo4awfHcRS2cw4Aj5i4Fs';
const playlistId = 'PL46GhFqJIVbYE6k1rf-ajz1zRj7ab9DFX';
const maxResults = 50;

const PlaylistSection = () => {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchAllPlaylistItems();
  }, []);

  const fetchAllPlaylistItems = async () => {
    let allItems = [];
    let nextPageToken = '';

    do {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}&pageToken=${nextPageToken}`
      );
      const data = await response.json();
      allItems = [...allItems, ...data.items];
      nextPageToken = data.nextPageToken || '';
    } while (nextPageToken);

    setAllItems(allItems);
    setItems(allItems.slice(0, maxResults));
  };

  const displayResults = (itemsToDisplay) => {
    return itemsToDisplay.map((item) => (
      <div className="video" key={item.snippet.resourceId.videoId}>
        <h3>{item.snippet.title}</h3>
        <img
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
          onClick={() => playVideo(item.snippet.resourceId.videoId)}
        />
      </div>
    ));
  };

  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      setItems(allItems.slice(0, maxResults));
      setCurrentPage(0);
    } else {
      const filteredItems = allItems.filter((item) =>
        item.snippet.title.toLowerCase().includes(query)
      );
      setItems(filteredItems);
    }
  };

  const handleNextPage = () => {
    const startIndex = (currentPage + 1) * maxResults;
    const nextItems = allItems.slice(startIndex, startIndex + maxResults);
    if (nextItems.length > 0) {
      setItems(nextItems);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    const startIndex = (currentPage - 1) * maxResults;
    const prevItems = allItems.slice(startIndex, startIndex + maxResults);
    if (startIndex >= 0) {
      setItems(prevItems);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="playlist-section">
      <h2>Our Playlist</h2>
      <div id="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {selectedVideo && (
        <div id="video-player">
          <iframe
            id="player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div id="results">
        {displayResults(items)}
      </div>
      <div id="pagination">
        <button
          id="prev-button"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          id="next-button"
          onClick={handleNextPage}
          disabled={(currentPage + 1) * maxResults >= allItems.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlaylistSection;
