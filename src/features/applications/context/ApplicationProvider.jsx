import { useState } from "react";
import ApplicationContext from "./ApplicationContext";

const ApplicationProvider = ({ children }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(true);



  return (
    <ApplicationContext.Provider value={{showApplicationForm,setShowApplicationForm}}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;