import CalculatorContainer from "@/components/calculatorContainer"
import { ThemeProvider } from "@/context/ThemeProvider"
import { FaGithub, FaReact } from 'react-icons/fa';

function App() {
  return (
    <ThemeProvider>
      <CalculatorContainer />
      
      <footer className="footer">
        <code>
          Made with{" "}
          <a 
            href="https://react.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="react-link"
          >
            <FaReact className="react-icon" />
          </a>{" "}
          by{" "}
          <a 
            href="https://github.com/TrRollet" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            TrRollet <FaGithub />
          </a>

          <span className="version">v1.0.1</span>
        </code>
      </footer>
    </ThemeProvider>
  )
}

export default App
