import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('dark-mode', false);

    useEffect(() =>{
        values
        ? window.document.body.classList.add('dark-mode')
        :window.document.body.classList.remove('dark-mode');
    }, [values]);
// this is how you make the body and class tag with in the use effect
    const setDarkMode = (event) => {
        !values ? setValues(true) : setValues(false);
    };
 // the event that sets the values on and off or setter function

    return [values, setDarkMode];
};

// always bring down whats in the consts