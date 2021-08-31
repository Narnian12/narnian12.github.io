import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const LanguageBar = styled.div`
  margin: 5px 10px;
  max-width: 600px;
  width: 100%;
`

// Generate type interface for style-components
type FillType = {
  percentage: string
};

// Cannot create styled-components in render functions
const Fill = styled.div<FillType>`
  height: 100%;
  background-color: powderblue;
  float: left;
  width: ${(props: FillType) => props.percentage}
`;

const LanguageName = styled.div`
  width: 100px;
  float: left;
  font-weight: bold;
  background-color: cornflowerblue;
`

const Percentage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 10px 0px 0px;
  background-color: lightgray;
`

function Languages() {
  const languages = [
    { name: "C++", percentage: "85%" },
    { name: "JavaScript", percentage: "75%" },
    { name: "React", percentage: "60%" },
    { name: "HTML", percentage: "55%" },
    { name: "CSS", percentage: "50%" },
    { name: "Rust", percentage: "50%" },
    { name: "C#", percentage: "40%" },
    { name: "SQL", percentage: "40%" }
  ];

  return (
    <>
      {languages.map(elem => {
        return (
          <Wrapper key={elem.name}>
            <LanguageBar>
              <Fill percentage={elem.percentage}>
                <LanguageName><p>{elem.name}</p></LanguageName>
              </Fill>
              <Percentage><p>{elem.percentage}</p></Percentage>
            </LanguageBar>
          </Wrapper>
        );
      })}
    </>
  );
}

export default Languages;