import PropTypes from 'prop-types';
import styles from './Screen.module.css';

const Screen = ({ displayValue = "0" }) => {
	// On limite à 13 caractères pour éviter que l'affichage ne dépasse de l'écran
	const formattedValue = displayValue.length > 13 
		? Number(displayValue).toExponential(5)
		: displayValue;

	return (
			<div className={styles.screen}>
					<span className={styles.screenText}>{formattedValue}</span>
			</div>
	);
};

Screen.propTypes = {
  displayValue: PropTypes.string
};

Screen.defaultProps = {
  displayValue: "0"
};

export default Screen;