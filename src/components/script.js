import React, { useState, useEffect } from "react";
import "./styles.css"

const apiKey = 'AIzaSyAu7vyp9P6KKQzo4awfHcRS2cw4Aj5i4Fs';
const playlistId = 'PL46GhFqJIVbYE6k1rf-ajz1zRj7ab9DFX'; // Playlist ID Anda
const maxResults = 50; // Jumlah maksimal video per halaman
let currentPage = 0; // Halaman saat ini

// Buat elemen-elemen DOM secara dinamis menggunakan JavaScript
document.body.innerHTML = `
    <div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; background-color: #f0f0f0; margin: 0; padding: 20px;">
        <div id="search-container" style="margin: 20px 0;">
            <input type="text" id="search-input" placeholder="Search...">
        </div>
        <div id="results" style="display: flex; flex-wrap: wrap; justify-content: center;"></div>
        <div id="pagination" style="margin: 20px 0; display: flex; justify-content: space-between; width: 300px;"></div>
        <div id="video-player" style="margin: 20px 0; display: none;">
            <iframe id="player" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
`;

async function fetchPlaylistItems(pageToken = '') {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}&pageToken=${pageToken}`);
    const data = await response.json();
    displayResults(data.items);
    setupPagination(data.prevPageToken, data.nextPageToken);
}

function displayResults(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    items.forEach(item => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video';
        videoDiv.innerHTML = `
            <h3>${item.snippet.title}</h3>
            <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}" data-video-id="${item.snippet.resourceId.videoId}" style="width: 200px; height: auto; cursor: pointer; border-radius: 4px; transition: transform 0.3s ease;">
        `;
        videoDiv.querySelector('img').addEventListener('click', () => {
            playVideo(item.snippet.resourceId.videoId);
        });
        resultsDiv.appendChild(videoDiv);
    });
}

function playVideo(videoId) {
    const videoPlayer = document.getElementById('video-player');
    const iframe = videoPlayer.querySelector('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    videoPlayer.style.display = 'block';
}

function setupPagination(prevPageToken, nextPageToken) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ''; // Clear previous pagination buttons

    const prevButton = document.createElement('button');
    prevButton.id = 'prev-button';
    prevButton.textContent = 'Previous';
    prevButton.style.padding = '10px 20px';
    prevButton.style.backgroundColor = 'dodgerblue';
    prevButton.style.color = 'white';
    prevButton.style.border = 'none';
    prevButton.style.borderRadius = '4px';
    prevButton.style.cursor = 'pointer';
    prevButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';
    prevButton.addEventListener('click', () => {
        currentPage--;
        fetchPlaylistItems(prevPageToken);
    });

    const nextButton = document.createElement('button');
    nextButton.id = 'next-button';
    nextButton.textContent = 'Next';
    nextButton.style.padding = '10px 20px';
    nextButton.style.backgroundColor = 'dodgerblue';
    nextButton.style.color = 'white';
    nextButton.style.border = 'none';
    nextButton.style.borderRadius = '4px';
    nextButton.style.cursor = 'pointer';
    nextButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';
    nextButton.addEventListener('click', () => {
        currentPage++;
        fetchPlaylistItems(nextPageToken);
    });

    paginationDiv.appendChild(prevButton);
    paginationDiv.appendChild(nextButton);

    if (!prevPageToken) {
        prevButton.disabled = true;
    }

    if (!nextPageToken) {
        nextButton.disabled = true;
    }
}

function setupSearch(items) {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') {
            displayResults(items);
            return;
        }
        const filteredItems = items.filter(item => item.snippet.title.toLowerCase().includes(query));
        displayResults(filteredItems);
    });
}

async function initializePlaylist() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`);
    const data = await response.json();
    setupSearch(data.items);
    displayResults(data.items);
    setupPagination(data.prevPageToken, data.nextPageToken);
}

initializePlaylist();

export default script;