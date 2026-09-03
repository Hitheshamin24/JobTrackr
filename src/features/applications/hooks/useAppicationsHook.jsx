import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addApplication } from "../state/applicationSlice";

export const useApplicationsHook = () => {
  const { register, handleSubmit, reset } = useForm();
  const { applications } = useSelector((state) => state.applications);
  console.log(applications);
  const dispatch = useDispatch();
  const handleApplicationsSubmit = (data, editingApplication) => {
    if (editingApplication) {
      console.log("Editing applications", editingApplication);
    } else {
      const exists = applications.some(
        (application) =>
          application.companyName.toLowerCase() ===
          data.companyName.toLowerCase(),
      );
      if (exists) return toast.warning("Already applied for this company ");
      const newApplication = {
        id: Date.now(),
        ...data,
        salaryExpectation: Number(data.salaryExpectation),
      };

      dispatch(addApplication(newApplication));
    }
  };

  const handleApplicationsError = (error) => {
    if (Object.keys(error).length > 1)
      return toast.warn("Please fill required fields");
    const firstError = Object.values(error)[0];
    if (firstError?.message) {
      return toast.warn(firstError.message);
    }
  };
  return {
    register,
    handleSubmit,
    reset,
    handleApplicationsError,
    handleApplicationsSubmit,
  };
};
