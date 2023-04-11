import { ThemeContext } from "context";
import Greeting from "../../components/Greeting";
import { useContext, useMemo, useState } from "react";
import CONSTANTS from "constants.js";

const { THEMES } = CONSTANTS;

function calculateNumber(num) {
  for (let i = 0; i < 800_000_000; i++) {
    let x = 0;
    x++;
  }
  return num ** 2;
}

function HomePage(props) {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useContext(ThemeContext);
  const styles = {
    background: theme === THEMES.DARK ? "black" : "#bbbbbb",
    color: theme === THEMES.DARK ? "white" : "black",
  };
  const handleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
  };

  // const calcNumber = calculateNumber(number);
  const calcNumber = useMemo(()=>calculateNumber(number), [number])

  return (
    <main style={styles}>
      <h1>Home page</h1>
      <button onClick={handleTheme}>Change Theme</button>
      <p>Number: {number}</p>
      <p>Calculated Number: {calcNumber}</p>
      <Greeting />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
    </main>
  );
}

export default HomePage;
