import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" hairColor="Black" currentAge={45}/>

      <PersonCard firstName="John" lastName="Smith" hairColor="Brown" currentAge={88}/>
      
      <PersonCard firstName="Millard" lastName="Fillmore" color="Brown"  currentAge={50}/>

      <PersonCard firstName="Maria" lastName="Smith" color="Brown"  currentAge={62}/>
    </div>
  );
}

export default App;
