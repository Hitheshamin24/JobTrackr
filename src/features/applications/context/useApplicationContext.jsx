import { useContext } from "react";
import ApplicationContext from "./ApplicationContext";

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error(
      "useApplicationContext must be within the ApplicationProvider"
    );
  }

  return context;
};