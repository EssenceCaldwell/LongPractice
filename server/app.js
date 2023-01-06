// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.get("/artists/:artistId", (req,res) => {
  // const id = req.url.slice(9)
  res.json(getArtistByArtistId(req.params.artistId))
})

app.put("/artists/:artistId", (req, res) => {
  
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));