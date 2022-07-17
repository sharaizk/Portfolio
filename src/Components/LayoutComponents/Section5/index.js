import React from "react";
import {
  Section5Container,
  SectionTitle,
  TestimonialContainer,
} from "./Elements";
import { titleAnimation } from "helpers/animationHelpers";
import { algoPixels } from "helpers/assetsaConfig";
import TestimonialCard from "Components/CustomComponents/TestimonialCard";
const Section5 = () => {
  const testimonials = [
    {
      id: 201,
      clientName: "AlgoPixels",
      review:
        "He is a very skilled seller, he has understood the project instantly and then worked to realize it in a better way. Satisfied and recommended",
      clientImage: algoPixels,
    },
  ];

  return (
    <Section5Container>
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        variants={titleAnimation}
        viewport={{ once: false }}
      >
        Testimonials
      </SectionTitle>
      <TestimonialContainer>
        {testimonials?.map((testimonial) => {
          return (
            <TestimonialCard
              key={testimonial.id}
              clientName={testimonial.clientName}
              review={testimonial.review}
              clientImage={testimonial.clientImage}
            />
          );
        })}
      </TestimonialContainer>
    </Section5Container>
  );
};

export default Section5;
