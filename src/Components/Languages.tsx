import { FC } from "react";
import styled from "@emotion/styled";
import { LanguageInfo } from "../utils/interfaces";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

interface LanguagesProps {
  languages: LanguageInfo[];
}

const Languages: FC<LanguagesProps> = ({ languages }) => {
  return (
    <>
      {languages.map((elem) => {
        return (
          <Wrapper key={elem.name}>
            <LanguageBar>
              <Fill percentage={elem.percentage}>
                <LanguageName>
                  <Typography color="text.primary">
                    <b>{elem.name}</b>
                  </Typography>
                </LanguageName>
              </Fill>
              <Percentage>
                <Typography color="text.primary">
                  <b>{elem.percentage}</b>
                </Typography>
              </Percentage>
            </LanguageBar>
          </Wrapper>
        );
      })}
    </>
  );
};

export default Languages;

Languages.propTypes = {
  languages: PropTypes.array.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LanguageBar = styled.div`
  margin: 5px 10px;
  max-width: 600px;
  width: 100%;
`;

// Generate type interface for style-components
type FillType = {
  percentage: string;
};

// Cannot create styled-components in render functions
const Fill = styled.div<FillType>`
  height: 100%;
  background-color: #ffffff;
  float: left;
  width: ${(props: FillType) => props.percentage};
`;

const LanguageName = styled.div`
  width: 100px;
  float: left;
  font-weight: bold;
  background-color: #404040;
`;

const Percentage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 10px 0px 0px;
  background-color: #181818;
`;
