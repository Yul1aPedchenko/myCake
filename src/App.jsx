import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cakes")
      .then(res => setCakes(res.data))
      .catch(err => console.error("Помилка при завантаженні тортів", err));
  }, []);

  return (
    <div>
      <h1>Тортики 🍰</h1>
      <ul>
        {cakes.map((cake) => (
          <li key={cake._id}>
            <h3>{cake.title}</h3>
            <p>Ціна: {cake.price} грн</p>
            {cake.image && <img src={cake.image} alt={cake.title} width={200} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App