import './Languages.css';

function Languages() {
  const languages =[
    {
      name: "C++",
      percentage: "75%",
      class: "cpp fill"
    },
    {
      name: "JavaScript",
      percentage: "60%",
      class: "js fill"
    },
    {
      name: "React",
      percentage: "60%",
      class: "react fill"
    },
    {
      name: "Rust",
      percentage: "50%",
      class: "rust fill"
    },
    {
      name: "C#",
      percentage: "40%",
      class: "cs fill"
    },
    {
      name: "R",
      percentage: "35%",
      class: "r fill"
    },
    {
      name: "Java",
      percentage: "30%",
      class: "java fill"
    }
  ]
  return (
    <>
      {languages.map(elem => {
        return (
          <div className="languages" key={elem.name}>
            <div className="language-bar">
              <div className={elem.class}>
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