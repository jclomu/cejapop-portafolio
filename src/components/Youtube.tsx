import React from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  border-radius: 12px;
  margin-bottom: 20px; /* Espacio entre los iframes */
`;

const playlist = [
    "https://www.youtube.com/embed/AITm_mep8OM?si=rt0sKuTphgDAdWmd",
    "https://www.youtube.com/embed/LEgh42Y239U?si=lhyCT-4sbLo92ezb",
    "https://www.youtube.com/embed/un8nj0mgsfE?si=9V7RDrYft0GZSC1Z",
    "https://www.youtube.com/embed/do4IbSStc0I?si=UXo6V8vGAxoJoLhq",
    "https://www.youtube.com/embed/-r3_SoYC-6s?si=X-yxEMGZB-JHZLiW",
    "https://www.youtube.com/embed/L5seIkBOOHU?si=rZHFYD3kK62PvKg5",
    "https://www.youtube.com/embed/pkMxOkA6Nwo?si=VFFICBRfnZ0jVqyj",
    "https://www.youtube.com/embed/ImITrmlw9_w?si=2IlIAWGLUrIrHYsm"
];

function Youtube() {
    return (
        <div>
            {playlist.map((url, index) => (
                <StyledIframe
                    key={index}
                    width="100%"
                    height="500vh"
                    src={url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></StyledIframe>
            ))}
        </div>
    );
}

export default Youtube;
