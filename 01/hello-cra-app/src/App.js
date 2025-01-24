import './App.css';
import MyCompoment from './compoments/MyComponent';
import MyComponentFunc from './compoments/MyComponentFunc';

function App() {
  return (
    <div className="App">
      <h2>클래스형 컴포넌트 호출</h2>
      <MyCompoment name="ReactJS클래스" age={10}/>

      <hr/>
      <h2>함수형 컴포넌트 호출</h2>
      <MyComponentFunc name="ReactJS 함수형">
        <p>함수형 컴포넌트의 하위 엘리먼트</p>


      </MyComponentFunc>

    </div>
  );
}


export default App;
