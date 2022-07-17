import React from "react";
import {
  Section5Container,
  SectionTitle,
  TestimonialContainer,
  RightArrow,
} from "./Elements";
import { titleAnimation } from "helpers/animationHelpers";
import {
  algoPixels,
  testimonialFirst,
  testimonialThird,
  alessio,
} from "helpers/assetsaConfig";
import TestimonialCard from "Components/CustomComponents/TestimonialCard";
import Carousel from "react-elastic-carousel";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Section5 = () => {
  const testimonials = [
    {
      id: 201,
      clientName: "AlgoPixels",
      review:
        "He is a very skilled seller, he has understood the project instantly and then worked to realize it in a better way. Satisfied and recommended",
      clientImage: algoPixels,
      bg: testimonialFirst,
      bgcolor: "#06083d",
    },
    {
      id: 202,
      clientName: "alessio1999",
      review:
        "This is my second time purchasing from him. He is very skilled and talented developer! He just can understand very well your needs and solve your problems perfectly!",
      clientImage: alessio,
      bg: testimonialThird,
      bgcolor: "#06083d",
    },
  ];

  return (
    <Section5Container id="testimonial">
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        variants={titleAnimation}
        viewport={{ once: false }}
      >
        Testimonials
      </SectionTitle>
      <TestimonialContainer>
        <Carousel
          itemsToShow={1}
          renderPagination={() => <></>}
          renderArrow={({ type, onClick, isEdge }) => {
            const pointer =
              type === "PREV" ? (
                <MdKeyboardArrowLeft color="#353535" />
              ) : (
                <MdKeyboardArrowRight color="#353535" />
              );
            return (
              <RightArrow $disabled={isEdge} onClick={onClick}>
                {pointer}
              </RightArrow>
            );
          }}
        >
          {testimonials?.map((testimonial) => {
            return (
              <TestimonialCard
                key={testimonial.id}
                clientName={testimonial.clientName}
                review={testimonial.review}
                clientImage={testimonial.clientImage}
                background={testimonial.bg}
                bgcolor={testimonial.bgcolor}
              />
            );
          })}
        </Carousel>
      </TestimonialContainer>
    </Section5Container>
  );
};

export default Section5;
