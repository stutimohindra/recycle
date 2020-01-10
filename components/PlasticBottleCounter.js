import React from 'react'
import styled from 'styled-components'

const PlasticBottles = styled.div`
  border: 1px solid red;
  text-align: center;
  padding-left: 50px;
  font-style: italic;
  margin: 40px;
  padding: 100px;
  font-family: sans-serif;
`

const PlasticBottlesContainer = (props) => {
  return <PlasticBottles>We have recyled {props.bottleCounter} bottles</PlasticBottles>
};
export default PlasticBottlesContainer;