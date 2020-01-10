import styled, { keyframes }  from 'styled-components'
import backGroundImage from '../assets/images/recycle.jpeg';
// import { fadeIn } from 'react-animations';

// const fade = keyframes`${fadeIn}`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  background: ${() => `url(${backGroundImage})`};
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export default Container;