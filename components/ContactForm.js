import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const Form = styled.form`
  margin-top: 10px;
  background-color: white;
  flex-direction: column;
  float:left;
  justify-content: space-between;
  width: 40vw;
  border: 1px solid black;
`;

const FormElements = styled.div`
  margin: 0 0 12px 0;
  width: 100%;
`;

const FormContainer = styled.ul`
  list-style: none;
  justify-content:space-between;
`;

const InputItems = styled.input`
  width: 85%;
`;

const InputTextArea = styled.textarea`
  width: 85%;
`;

const Button = styled.button`
  width: 85%;
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Tooltip = styled.span`
  background-color: white;
  border: red;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  }

  handleChange = (event) => {

    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'name':
        formErrors.name = value.length < 3 && value.length > 0
          ? "min three characters are required" : "";
        break;
      case 'phone':
        formErrors.phone = value.length < 10 && value.length > 0
          ? "min ten characters are required" : "";
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0
          ? "" : "please enter a valid email";
        break;
      case 'message':
        formErrors.message = value.length < 10 && value.length > 0
          ? "min ten characters are required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();//api for aws lambda will be called here
    console.log(this.state)
  }

  render() {
    const { email, formErrors } = this.state;
    return (
      <React.Fragment>
        <Form>
          <FormContainer>
            <FormElements>
              Get in touch
          </FormElements>
            <FormElements>
              <InputItems type="text" id="name" name="name" placeholder="Your first name" onChange={this.handleChange} />
              <div>
                {formErrors.name.length > 0 && (
                  <Tooltip>{formErrors.name}</Tooltip>
                )}
              </div>
            </FormElements>
            <FormElements>
              <InputItems type="email" id="email" name="email" placeholder="Your email" onChange={this.handleChange} />
              <div>
                {email.length > 0 && formErrors.email.length > 0 && (
                  <Tooltip>{formErrors.email}</Tooltip>
                )}
              </div>
            </FormElements>
            <FormElements>
              <InputItems type="tel" id="phone" name="phone" placeholder="Your phone" onChange={this.handleChange} />
              <div>
                {formErrors.phone.length > 0 && (
                  <Tooltip>{formErrors.phone}</Tooltip>
                )}
              </div>
            </FormElements>
            <FormElements>
              <InputTextArea rows="6" id="message" name="message" placeholder="Your message" onChange={this.handleChange}></InputTextArea>
              <div>
                {formErrors.message.length > 0 && (
                  <Tooltip>{formErrors.message}</Tooltip>
                )}
              </div>
            </FormElements>
            <FormElements>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </FormElements>
          </FormContainer>
        </Form>
        <ContactInfo></ContactInfo>
      </React.Fragment>
    );
  }
}

export default ContactForm;