import React from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  border-radius: 12px;
`;

function Spotify() {
  return (
    <StyledIframe
      src="https://open.spotify.com/embed/playlist/5nHe2xcWo1i9RHYSqG46HH?utm_source=generator&theme=0"
      width="100%"
      height="500vh"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></StyledIframe>
  );
}

export default Spotify;
