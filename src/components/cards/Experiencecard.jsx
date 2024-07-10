import React from 'react'
import styled from 'styled-components'



const Description = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
font-size: 15px;
    font-weight: 400;
    color: black};
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 20px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
     gap: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
   
    
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 0.1px solid #306EE8;
   
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`



const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: black};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: grey;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: grey};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                  <Span>{experience.desc}</Span>
          </Description>
                
        </Card>
    )
}

export default ExperienceCard