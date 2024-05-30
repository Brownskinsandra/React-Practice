import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
       <p><strong> 19</strong><a href="">℃</a>/<a href="">℉</a>
    </p>
         <ul>
        <li>Humidity: 80%</li>
        <li>Wind: 30 km/h</li>
      </ul>
    </div>
  );
}