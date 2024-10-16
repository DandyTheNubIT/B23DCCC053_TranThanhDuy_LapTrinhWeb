function Hello(props){
  return <h1>Hello {props.name}</h1>;
}
function App(){
  return(
      <div className = "info">
        <Hello name = "Nguyễn Văn A" />
        <Hello name = "Nguyễn Văn B" />
        <Hello name = "Nguyễn Đang Chép Bài" />
      </div>
  );
}
export default App;