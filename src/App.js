import "./styles.css";
import City from "./City";
import Weather from "./Weather";
import Image from "./Image";

export default function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Type a city"/><br />
      <input type="submit" value="Search" />
      <City />
       <Image />
      <Weather />
    </div>
  );
}
