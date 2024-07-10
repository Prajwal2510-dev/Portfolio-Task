import React from "react";
import Timeline from "@mui/lab/Timeline";
import ExperienceCard from "../cards/Experiencecard";
import { experiences } from "../../data/content";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  TimelineSection,
} from "../Experience/Experiencestyle";

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>My work experience as a software engineer.</Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience) => (
              <ExperienceCard experience={experience} />
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};
export default Experience;
