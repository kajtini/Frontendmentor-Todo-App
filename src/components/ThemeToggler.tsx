import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

interface ThemeTogglerProps {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggler = ({ isDark, setIsDark }: ThemeTogglerProps) => {
    const handleThemeToggle = () => setIsDark((prevIsDark) => !prevIsDark);

    return (
        <img
            className="cursor-pointer"
            src={isDark ? sun : moon}
            alt={`${isDark ? "sun" : "moon"} icon`}
            onClick={handleThemeToggle}
        />
    );
};

export default ThemeToggler;
