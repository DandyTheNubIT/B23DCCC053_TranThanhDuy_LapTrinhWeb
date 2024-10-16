import React from "react";
function Hello(props){
  return <h1>Hello {props.name}</h1>;
}
class Welcome extends React.Component{
  render() {
    return <h1>Welcome {this.props.name}</h1>
  }
}
function App(){
  return (
    <>
      <div className = "info">
        <Hello name = "Nga" />
        <Hello name = "Nam" />
        <Hello name = "Anh" />
        <Welcome name = "PTIT" />
      </div>
    </>
  )
}
export default App;