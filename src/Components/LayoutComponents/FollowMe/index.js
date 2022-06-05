import React from "react";
import { FollowMeContainer, FollowMeTag, Line, ALink } from "./Elements";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const FollowMe = () => {
  return (
    <FollowMeContainer>
      <FollowMeTag>Check and Follow Me</FollowMeTag>
      <Line />
      <ALink
        target="_blank"
        referrerPolicy="no-referrer"
        href="https://www.github.com/sharaizk"
      >
        <AiFillGithub size={24} />
      </ALink>
      <ALink href="www.github.com/sharaizk">
        <FaLinkedinIn size={24} />
      </ALink>
    </FollowMeContainer>
  );
};

export default FollowMe;
