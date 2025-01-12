import PropTypes from 'prop-types';
import styles from '@/components/buttons/Button.module.css';

const Button = ({type="number", value, buttonClick }) => {
	let style = styles.button;
	if (type === "operator") {
		style += ` ${styles.operator}`;
	} else if (type === "equal") {
		style += ` ${styles.equal}`;
	} else if (type === "clear") {
		style += ` ${styles.clear}`;
	}

	return (
		<button
			className={style}
			onClick={() => buttonClick(value)}
		>
			{value}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf(['number', 'operator', 'equal', 'clear']),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	buttonClick: PropTypes.func.isRequired
};

export default Button;