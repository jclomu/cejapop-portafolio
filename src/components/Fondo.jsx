import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const GradientDiv = styled.div`
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(158, 82%, 57%, 100%), hsl(252, 82%, 100%));
  animation: ${rotate} var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  @media (min-width: 720px) {
    --size: 500px;
  }
`;

const Body = styled.body`
  background-color: #222;
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;

  /* This is just to transition when you change the viewport size. */
  * {
    transition: all 0.25s ease-out;
  }
`;

function Fondo() {
  return (
    <Body>
      <GradientDiv className="gradient" />
    </Body>
  );
}

export default Fondo;
