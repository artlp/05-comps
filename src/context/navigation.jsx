import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext;

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };    
    
    
    return () => {
      window.removeEventListener("popstate", handler);
    }
  }, [])

  return (
    <NavigationContext.Provide value={{}}>
    {currentPath}
    {children}</NavigationContext.Provide>
  );
}

export { NavigationProvider };
export default NavigationContext;
