import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the ReactJs application</h2>
      <form>
         <label>
           <input name="name" />
           <input type="radio" value="Male" name="gender" /> Male
           <input type="radio" value="Female" name="gender" /> Female
           <input type="radio" value="Other" name="gender" /> Other
         </label>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
