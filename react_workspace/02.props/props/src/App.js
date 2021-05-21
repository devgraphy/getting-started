import Welcome from './Welcome'
function App(props) {
  const user={
    firstName : 'React',
    lastName : 'Component',
  }
  const type = "class"
  // JSX- camelcase 표현식 background-color ==> backgroundColor
  // class ==> className
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '50px',
    fontWeight : 'bold',
    padding : 6,
  }
  return (
    <div>
      <Welcome name="리액트" style={style}>class</Welcome>
      <Welcome name="React">class</Welcome>
      <Welcome name="React component">class</Welcome>
    </div>
  );
}

export default App;