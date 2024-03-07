import React, { useState} from "react";
import styled from "styled-components";
import { Rating, TextField, Button, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
//import { FeedbackContext } from "./FeedbackContext";

const RateUsCard = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState("");
  //const { userData } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted rating:", rating, "Feedback:", feedback);

    setRating(null);
    setFeedback("");
  };

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: "10px" }}>
            Rate Your Experience
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
            emptyIcon={<Star sx={{ color: "#bbb" }} />}
            fullIcon={<Star sx={{ color: "gold" }} />}
          />
          <TextField
            fullWidth
            multiline
            label="Leave your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            sx={{ mt: "10px" }}
          />
          <SubmitButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!rating}
          >
            Submit Rating
          </SubmitButton>
          <Typography variant="caption" sx={{ color: "#888", mt: "10px" }}>
            Your feedback helps us improve!
          </Typography>
        </CardContent>
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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export default RateUsCard;
