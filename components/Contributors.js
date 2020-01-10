import React from 'react';
import styled from 'styled-components';
import air from '../assets/images/air.png';

const Contributor = styled.div`
  background: rgba(0,0,0,0.5);
  background-image: ${(props) => `url( ${props.url})`};
  background-size: cover;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
  padding: 10px;
`
const ContributorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  min-height: 400px;
`;

const Contributors = () => {
  return <ContributorContainer >
    <Contributor url={air} />
    <Contributor url={air} />
    <Contributor url={air} />
    <Contributor url={air} />
    <Contributor url={air} />
    <Contributor url={air} />
  </ContributorContainer>
};

export default Contributors;