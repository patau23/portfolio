import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { TelegramUrl, ResumeUrl, HHUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Amirkhanov Akezhan
        </SectionTitle>
        <SectionText>
          A Full Stack Frontend & Backend Developer specializing in
          scalable server-side applications with Node.js & React.js.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <LinkButton alt="headhunter" href={HHUrl} target="_blank">
            HeadHunter
          </LinkButton>
          <LinkButton alt="telegram" href={TelegramUrl} target="_blank">
            Telegram
          </LinkButton>
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
