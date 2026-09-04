import { useState } from "react";
import ApplicationContext from "./ApplicationContext";

const ApplicationProvider = ({ children }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null)



  return (
    <ApplicationContext.Provider value={{showApplicationForm,setShowApplicationForm,editingApplication,setEditingApplication}}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;