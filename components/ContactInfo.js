import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: transparent;
  width: 40vw;
  float:right;
`;

const FormUl = styled.ul`
  list-style: none;
`;

const FormLi = styled.li`
  padding-top: 10px;
`;

const Heading = styled.header`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

const ContactInfo = () => {
  return (
    <Form>
      <FormUl>
        <FormLi>
          <Heading> Office:</Heading>
          {' '}Green park Civil FormLiNES
        </FormLi>
        <FormLi>
        <Heading> Contact Number:</Heading>
          {' '}+91 23456789
        </FormLi>
      </FormUl>
    </Form>
  )
}

export default ContactInfo;