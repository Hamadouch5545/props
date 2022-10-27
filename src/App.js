import "./App.css";
import Profile from "./profile/Profile";
function App() {
  const handleName = () => {
    alert("hello");
  };
  return (
    <div className="App">
      <Profile
        fullName="skander sfaihi"
        bio="futur dev"
        profession="clientele"
        handleName={handleName}
      >
        <img src="https://wallpaperaccess.com/full/154009.jpg"/>
        <h1>c'est une image</h1>
      </Profile>
    </div>
  );
}

export default App;
