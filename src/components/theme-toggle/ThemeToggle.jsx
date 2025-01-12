import { useTheme } from '@/hooks/useTheme';
import styles from '@/components/theme-toggle/ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
			className={styles.themeToggle}
			onClick={toggleTheme}
		>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;