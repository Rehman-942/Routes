import React from "react";

const CreateAuthContext = React.createContext(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };
  return (
    <CreateAuthContext.Provider value={{ isAuthenticated, handleAuthChange }}>
      {children}
    </CreateAuthContext.Provider>
  );
}

const useCreateAuthContext = () => {
  const value = React.useContext(CreateAuthContext);
  if (value === undefined) {
    throw (e) => {
      console.log("Undefined");
    };
  }
  return value;
};

export { AuthProvider, useCreateAuthContext };
