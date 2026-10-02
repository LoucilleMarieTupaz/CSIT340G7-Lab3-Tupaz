const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #eee",
      padding: "6px 0"
    }}>
      <span>{props.part.name}</span> 
      <span>{props.part.exercises}</span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p style={{
      textAlign: "center",
      marginTop: "10px",
      fontWeight: "bold"
    }}>
      Number of exercises: {
        props.parts[0].exercises + 
        props.parts[1].exercises + 
        props.parts[2].exercises
      }
    </p>
  )
}

const Footer = (props) => {
  return (
    <p style={{
      marginTop: "20px",
      paddingTop: "10px",
      borderTop: "1px solid #ccc",
      fontSize: "12px",
      textAlign: "center"
    }}>
      {props.info}
    </p>
  )
}

const App = () => {
  const course = {
    name: "CSIT340 - Industry Elective 1",
    parts: [
      {name: "Technopreneurship",exercises: 3},
      {name: "Data Analytics",exercises: 3},
      {name: "Project Management for IT",exercises: 3}
    ]
  }

  const footerText = "Loucille Marie B. Tupaz - CSIT340 - G7"

  return (
      <div style={{
        border: "1px solid #ddd",
        padding: "20px 30px",
        borderRadius: "10px",
        width: "450px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <Header course={course} />

        <Content parts={course.parts} />

        <Total parts={course.parts} />

        <Footer info={footerText} />
      </div>
  )
}

export default App