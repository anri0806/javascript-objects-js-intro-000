var playlist = {adele: "hello"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

delete playlist.artistName;