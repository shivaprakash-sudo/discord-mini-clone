import { useEffect, useState } from "react";

const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialvalue;
        } catch (error) {
            console.log(error);
            return initialvalue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
};

const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage("dark-them");
    const isEnabled = typeof enabledState === "undefined" && enabled;

    useEffect(() => {
        const className = "dark";
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);
    return [enabled, setEnabled];
}

export default useDarkMode;