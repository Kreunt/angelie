type SpotifyUser = {
    uri: string;
    name: string;
    imageUrl: string;
  };
  
  type SpotifyAlbum = {
    uri: string;
    name: string;
  };
  
  type SpotifyArtist = {
    uri: string;
    name: string;
  };
  
  type SpotifyTrack = {
    uri: string;
    name: string;
    imageUrl: string;
    album: SpotifyAlbum;
    artist: SpotifyArtist;
    context: {
      uri: string;
      name: string;
      index: number;
    };
  };
  
  export type SpotifyResponse = {
    timestamp: number;
    user: SpotifyUser;
    track: SpotifyTrack;
  };
  