import React from 'react';
import styled from 'styled-components';
import { media } from './media';

const img = 'http://placehold.it/100x100';

const Container = styled.div`
  background: white;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  text-align: center;
  vertical-align: top;
  padding: 30px;

  ${media.mobile`
    flex-direction: column;
  `}
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;

  ${media.mobile`
    margin: 25px 0;
  `}
`;

const Award = styled.span`
  font-family: sans-serif;
`;

const Image = styled.img`
    background-image: url(${img});
    margin: auto;
`;

const Achievements = () => {
  return <Container>
    <ContainerInfo>
      <Image src="http://placehold.it/100x100" />
      <Award>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Award>
    </ContainerInfo>
    <ContainerInfo>

      <Image src="http://placehold.it/100x100" />
      <Award>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Award>
    </ContainerInfo>
    <ContainerInfo>
      <Image src="http://placehold.it/100x100" />
      <Award>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Award>
    </ContainerInfo>
  </Container>
};

export default Achievements;