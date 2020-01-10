import React from 'react';
import styled from 'styled-components';

const MissionText = styled.div`
  padding-top: 10px;
  font-family:sans-serif;
`;

const Heading = styled.h2``;


const Mission = (props) => {
  return <MissionText>
    <Heading> {props.heading} </Heading>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisi in enim dignissim laoreet a eu tortor. Mauris nec nunc mauris. Cras elementum lectus felis, quis efficitur dolor gravida id. Proin dolor sapien, pretium ac imperdiet eu, euismod sit amet elit. Morbi aliquam augue ac malesuada ullamcorper. Sed egestas libero ut fringilla scelerisque. Donec sed justo quis nunc porttitor mollis. Fusce vulputate nisl non gravida lacinia. Sed mollis dictum tellus, quis rhoncus nisi auctor vel.
  </MissionText>
}

export default Mission;