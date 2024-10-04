
import './App.css';
import Project from './components/project/Projects';
import Header from './components/layout/Header';

function App() {
  return (
  <div className="container-fluid">
    <Header />
    <div className='row'>
      <div clas="col-12">
        <h1>Test Appli</h1>
        <Project />
      </div>
    </div>

  </div>
  );
}

export default App;
