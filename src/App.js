
import './App.css';
import Profile from './Profilee/Profile'



function App() {
  const handlealert=(name)=>{alert ( name )}
  return (
    

    <div className="App">
    <Profile fullName="rihab bettaieb" bio="hello am a web developer who is eager to know more"  handlename={handlealert} >
    <img src='rainbow.jpg' alt="raibow"/>
    </Profile>
    
      
    </div>
    
  );
}

export default App;
