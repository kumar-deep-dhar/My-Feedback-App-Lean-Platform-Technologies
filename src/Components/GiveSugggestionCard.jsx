import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePaperClip } from "react-icons/ai";

const GiveSuggestionCard = () => {
  const [feedback, setFeedback] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Submitted feedback:", { feedback, file });

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback("");
      setFile(null);
    }, 2000);
  };

  return (
    <Card>
      <div>
        <div>Give Feedback</div>
        <Textarea
          rows={5}
          value={feedback}
          onChange={handleChange}
          placeholder="Write your feedback"
          disabled={isSubmitting}
        />
              {/* <Typography variant="caption">Attach File</Typography> */}
              <AiOutlinePaperClip/>
              <input type="file" hidden onChange={handleFileChange} />
            
          
        <input id="fileInput" type="file" hidden onChange={handleFileChange} />

        {file && (
          <div style={{ color: "#888", marginTop: "5px" }}>
            Attached file: {file.name}
          </div>
        )}
        <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </SubmitButton>
        {isSubmitting && <SubmittingMessage>Submitting...</SubmittingMessage>}
        {/* {!isSubmitting && (
          <div style={{ color: "green", marginTop: "10px" }}>
            Feedback Submitted
          </div>
        )} */}
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: vertical;
`;

// const AttachFileButton = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 4px 8px;
//   margin-top: 10px;
//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmittingMessage = styled.div`
  color: #888;
  margin-top: 10px;
`;

export default GiveSuggestionCard;
