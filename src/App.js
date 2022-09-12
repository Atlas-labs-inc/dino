import "./styles.css";
import ChromeDinoGame from "react-chrome-dino";

export default function App() {
  return (
    <div className="App">
      <h1>Нет связи с сервером</h1>
      <h2>Помогите динозавру программисту добежать и восстановить связь</h2>
      <ChromeDinoGame />
    </div>
  );
}
