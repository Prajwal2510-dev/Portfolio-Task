import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import { education } from '../../data/content';
import EducationCard from '../cards/Educationcard.jsx';
import {Container, Wrapper, Title, Desc, TimelineSection} from '../Education/Educationstyle.js';



const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My recent graduation details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education) => (
                            <TimelineItem >
                               
                                    <EducationCard education={education}/>
                               
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education;