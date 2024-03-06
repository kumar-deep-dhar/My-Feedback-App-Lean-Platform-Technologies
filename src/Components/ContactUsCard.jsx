import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FeedbackContext } from "./FeedbackContext";

const ContactUsCard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [issue, setIssue] = useState("");
  const { userData } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { fullName, email, contactNumber, issue });
    setFullName("");
    setEmail("");
    setContactNumber("");
    setIssue("");
  };

  return (
    <CardContainer>
      <Card>
        <form onSubmit={handleSubmit}>
          <div>
            {!userData.isLoggedIn && (
              <>
                <FormItem>
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormItem>
                <FormItem>
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormItem>
                <FormItem>
                  <Label>Contact Number</Label>
                  <Input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </FormItem>
              </>
            )}
            <FormItem>
              <Label>Describe your issue</Label>
              <TextArea
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              />
            </FormItem>
            <SubmitButton type="submit">Submit</SubmitButton>
          </div>
        </form>
        <Message>
          We take user feedback seriously and will respond to your inquiry as
          soon as possible.
        </Message>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
`;

const FormItem = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Message = styled.p`
  color: #888;
  margin-top: 10px;
`;
export default ContactUsCard;
