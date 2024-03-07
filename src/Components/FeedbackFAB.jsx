import React, { useState } from "react";
import styled from "styled-components";
import {
  FaComment,
  FaExclamationCircle,
  FaRegLightbulb,
  FaStar,
} from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import ContactUsCard from "./ContactUsCard";
import RateUsCard from "./RateUsCard";
import ReportIssue from "./ReportIssue";
import GiveSuggestionCard from "./GiveSugggestionCard";
const FeedbackFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setSelectedOption(null); 
  };

  const handleOptionClick = (option) => {
    setIsOpen(false); 
    setSelectedOption(option);
  };

  return (
    <Container>
      <FabButton onClick={toggleOpen} isOpen={isOpen}>
        {isOpen ? "✕" : <FaComment />}
      </FabButton>
      {isOpen && (
        <Options>
          <OptionItem onClick={() => handleOptionClick("contact")}>
            <OptionIcon>
              <AiOutlineComment />
            </OptionIcon>
          </OptionItem>
          <OptionItem onClick={() => handleOptionClick("feedback")}>
            <OptionIcon>
              <FaRegLightbulb />
            </OptionIcon>
          </OptionItem>
          <OptionItem onClick={() => handleOptionClick("issue")}>
            <OptionIcon>
              <FaExclamationCircle />
            </OptionIcon>
          </OptionItem>
          <OptionItem onClick={() => handleOptionClick("rate")}>
            <OptionIcon>
              <FaStar />
            </OptionIcon>
          </OptionItem>
        </Options>
      )}
      {selectedOption === "contact" && <ContactUsCard />}
      {selectedOption === "feedback" && <GiveSuggestionCard />}
      {selectedOption === "rate" && <RateUsCard />}
      {selectedOption === "issue" && <ReportIssue />}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
`;

const FabButton = styled.button`
  background-color: ${(props) => (props.isOpen ? "#F8F8F8" : "#F8F8F8")};
  color: ${(props) => (props.isOpen ? "#0F0F0F" : "#0F0F0F")};
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #f8f8f8;
    color: #0f0f0f;
  }
`;

const Options = styled.div`
  position: absolute;
  bottom: 72px;
  right: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: bottom 0.3s;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: -4px 2px 8px rgba(0, 0, 0, 0.24);
  border-radius: 50%;

  &:hover {
    background-color: #f8f8f8;
    border-radius: 50%;
  }
`;

const OptionIcon = styled.span`
  margin-right: 8px;
`;

export default FeedbackFAB;
