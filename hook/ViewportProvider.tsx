import React from "react";

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }: any) => {
  // This is the exact same logic that we previously had in our hook
  const [width, setWidth] = React.useState(10000);
  const [height, setHeight] = React.useState(10000);

  const handleWindowResize = () => {
    setWidth(() => {
      if (typeof window !== "undefined") {
        return window.innerWidth;
      }
      return 0;
    });
    setHeight(() => {
      if (typeof window !== "undefined") {
        return window.innerHeight;
      }
      return 0;
    });
  };

  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
export const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height }: any = React.useContext(viewportContext);
  return { width, height };
};
