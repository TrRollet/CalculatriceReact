import { useEffect, useState } from "react";
import Button from "@/components/buttons/Button";
import Screen from "@/components/screen/Screen";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";

const CalculatorContainer = () => {
	const [currentValue, setCurrentValue] = useState("0");
	const [previousValue, setPreviousValue] = useState(null);
	const [operator, setOperator] = useState(null);
	const { isDark } = useTheme();
	
	// Pour le thème
  useEffect(() => {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  const OPERATIONS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b !== 0 ? a / b : "Error"
  };

	// Fonction pour gérer les chiffres
  const handleNumber = (num) => {
		// On vérifie si la valeur actuelle est une erreur ou une valeur infinie
		if ( 
			currentValue === "Error" || 
			currentValue === "Infinity" || 
			currentValue === "-Infinity" ||
			currentValue === "NaN"
		) {
			setCurrentValue("0");
		}

    setCurrentValue(current => 
      current === "0" ? String(num) : current + num
    );
  };

	// Fonction pour gérer les opérateurs
  const handleOperator = (op) => {
    if (previousValue === null) {
      setPreviousValue(Number(currentValue));
      setCurrentValue("0");
    }
    setOperator(op);
  };

	// Bouton =
  const calculate = () => {
    if (!operator || previousValue === null) return;
    
    const result = OPERATIONS[operator](previousValue, Number(currentValue));
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperator(null);
  };

	// Bouton %
	const percentage = () => {
			const current = parseFloat(currentValue);
			if (previousValue === null) {
				// Si pas d'opération en cours, diviser par 100
				setCurrentValue(String(current / 100));
			} else {
				// Si opération en cours, calculer le pourcentage du nombre précédent
				const percent = (previousValue * current) / 100;
				setCurrentValue(String(percent));
		};
	};

	// Bouton C
  const clear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };
	
	// Bouton DEL
	const deleteLast = () => {
		setCurrentValue(
			currentValue.length > 1 ? currentValue.slice(0, -1) : "0"
		);
	};

	// Bouton ±
	const changeSign = () => {
		if (currentValue === "0") return;

		setCurrentValue(
			currentValue[0] === "-" ? currentValue.slice(1) : "-" + currentValue
		);
	};

	// Layout de la calculatrice
	const layout = [
    ["AC", "C", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    ["±", 0, ".", "="]
	];

	// Fonction pour gérer les clics sur les boutons
  const handleClick = (value) => {
    if (value === "AC") clear();
		else if (value === "C") deleteLast();
    else if (value === "=") calculate();
		else if (value === "%") percentage();
		else if (value === "±") changeSign();
    else if (OPERATIONS[value]) handleOperator(value);
    else handleNumber(value);
  };

	return (
		<div className="calculatorContainer">
			<ThemeToggle />
			<div className="calculator">
				<Screen displayValue={currentValue} />
				<div className="calculatorKeypad">
					{layout.map((row, i) => (
						<div key={i} className="calculatorKeypadRow">
							{row.map((button, j) => (
								<Button
									key={j}
									type={typeof button === "number" ? "number" : button === "=" ? "equal" : (button === "AC" || button == "C") ? "clear" : "operator"}
									value={button}
									buttonClick={handleClick}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
  );
};

export default CalculatorContainer;
