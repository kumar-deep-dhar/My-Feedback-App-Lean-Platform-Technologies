import React, { useState } from "react";
import styled from "styled-components";
import { Typography, TextField, Button, IconButton } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
//import { FeedbackContext } from "./FeedbackContext";
import ThankYouMessage from "./ThankYouMessage";
import { AiOutlinePaperClip } from "react-icons/ai";



const ReportIssue = () => {
  const [feedback, setFeedback] = useState("");
  const [file, setFile] = useState(null);
  //const { userData } = useContext(FeedbackContext);
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
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
          Report Issue
        </Typography>
        <StyledTextField
          multiline
          rows={5}
          fullWidth
          value={feedback}
          onChange={handleChange}
          placeholder="Please Enter your Issue"
          disabled={isSubmitting}
        />
        { (
          <StyledIconButton component="label" style={{ marginTop: "10px" }}>
            {/* <Typography variant="caption">Attach File</Typography> */}
            <AiOutlinePaperClip/>
            <input type="file" hidden onChange={handleFileChange} />
          </StyledIconButton>
        )}
        {file && (
          <Typography variant="caption" style={{ color: "#888", marginTop: "5px" }}>
            Attached file: {file.name}
          </Typography>
        )}
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </StyledButton>
        {isSubmitting ? (
          <ThankYouMessage open={true} onClose={() => {}} />
        ) : (
          <CheckCircleOutline style={{ color: "green", marginTop: "10px" }} />
        )}
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
`;

const CardContent = styled.div``;

const StyledTextField = styled(TextField)`
  margin-bottom: 10px;
`;

const StyledIconButton = styled(IconButton)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export default ReportIssue;
