import React from "react";
import { Bio } from "../../data/content";
import myimage2 from "../../Images/myimage2.jpg";
import {Maincontainer,Mainbg,Innercontainer,Leftcontainer,Rightcontainer,Title,Subtitle,Img} from "../Mainsection/Mainsectionstyle";

const Mainsection = () => {
  return (
    <div id="about">
      <Maincontainer>
        <Mainbg></Mainbg>
        <Innercontainer>
          <Leftcontainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <Subtitle>{Bio.description}</Subtitle>
          </Leftcontainer>
          <Rightcontainer>
            <Img src={myimage2} alt="my-image" />
          </Rightcontainer>
        </Innercontainer>
      </Maincontainer>
    </div>
  );
};

export default Mainsection;
