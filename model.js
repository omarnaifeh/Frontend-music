class MusicItem {
    constructor(title, artist, genre) {
        this.title = title;
        this.artist = artist;
        this.genre = genre;
    }
}


// main.js
// Sample data
const musicData = [
    new MusicItem('Song 1', 'Artist 1', 'Pop'),
    new MusicItem('Song 2', 'Artist 2', 'Rock'),
    // Add more sample data as needed
];

// Render the list
ListRenderer.renderList(musicData);
