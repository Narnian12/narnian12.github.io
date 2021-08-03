import './Languages.css';

function Languages() {
  const languages =[
    {
      name: "C++",
      percentage: "85%",
    },
    {
      name: "JavaScript",
      percentage: "70%",
    },
    {
      name: "React",
      percentage: "60%",
    },
    {
      name: "HTML",
      percentage: "55%",
    },
    {
      name: "CSS",
      percentage: "50%"
    },
    {
      name: "Rust",
      percentage: "50%",
    },
    {
      name: "C#",
      percentage: "40%",
    },
    {
      name: "R",
      percentage: "35%",
    },
    {
      name: "Java",
      percentage: "30%",
    }
  ]
  return (
    <>
      {languages.map(elem => {
        return (
          <div className="languages" key={elem.name}>
            <div className="language-bar">
              <div className="fill" style={{width: elem.percentage}}>
                <div className="language-name"><p>{elem.name}</p></div>
              </div>
              <div className="percentage"><p>{elem.percentage}</p></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Languages;