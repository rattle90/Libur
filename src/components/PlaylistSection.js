import React, { useState, useEffect } from "react";
import "./styles.css";

const apiKey = 'AIzaSyAu7vyp9P6KKQzo4awfHcRS2cw4Aj5i4Fs';
const playlistId = 'PL46GhFqJIVbYE6k1rf-ajz1zRj7ab9DFX';
const maxResults = 50;

const PlaylistSection = () => {
  const [items, setItems] = useState([]);
  const [prevPageToken, setPrevPageToken] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchPlaylistItems();
  }, [currentPage]);

  const fetchPlaylistItems = async (pageToken = '') => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}&pageToken=${pageToken}`
    );
    const data = await response.json();
    setItems(data.items);
    setPrevPageToken(data.prevPageToken || '');
    setNextPageToken(data.nextPageToken || '');
  };

  const displayResults = (itemsToDisplay) => {
    return itemsToDisplay.map((item) => (
      <div className="video" key={item.snippet.resourceId.videoId}>
        <h3>{item.snippet.title}</h3>
        <img
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
          style={{
            width: '200px',
            height: 'auto',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'transform 0.3s ease'
          }}
          onClick={() => playVideo(item.snippet.resourceId.videoId)}
        />
      </div>
    ));
  };

  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.snippet.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', margin: 0, padding: '20px' }}>
      <div id="search-container" style={{ margin: '20px 0' }}>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            padding: '10px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            transition: 'border-color 0.3s ease'
          }}
        />
      </div>
      {selectedVideo && (
        <div id="video-player" style={{ margin: '20px 0', display: 'block' }}>
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
      <div id="results" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {displayResults(filteredItems)}
      </div>
      <div id="pagination" style={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between', width: '300px' }}>
        <button
          id="prev-button"
          style={{
            padding: '10px 20px',
            backgroundColor: 'dodgerblue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            fetchPlaylistItems(prevPageToken);
          }}
          disabled={!prevPageToken}
        >
          Previous
        </button>
        <button
          id="next-button"
          style={{
            padding: '10px 20px',
            backgroundColor: 'dodgerblue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            fetchPlaylistItems(nextPageToken);
          }}
          disabled={!nextPageToken}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlaylistSection;
