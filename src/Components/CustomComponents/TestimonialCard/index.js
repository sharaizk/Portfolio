import React from "react";
import {
  CardContainer,
  CardTitle,
  CardImage,
  CardDescription,
} from "./Elements";
const TestimonialCard = ({
  background,
  bgcolor,
  clientName,
  clientImage,
  review,
}) => {
  return (
    <CardContainer background={background} bgcolor={bgcolor}>
      <CardImage src={clientImage} />
      <CardDescription>{review}</CardDescription>
      <CardTitle>{clientName}</CardTitle>
    </CardContainer>
  );
};

export default TestimonialCard;
