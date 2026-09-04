import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addApplication,
  deleteApplication,
  updateApplication,
} from "../state/applicationSlice";
import { useApplicationContext } from "../context/useApplicationContext";
import { useMemo } from "react";

export const useApplicationsHook = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setShowApplicationForm, setEditingApplication } =
    useApplicationContext();
  const { applications } = useSelector((state) => state.applications);
  console.log(applications);
  const { status, location, jobType, search } = useSelector(
    (state) => state.filter,
  );
  const dispatch = useDispatch();
  const onClose = () => {
    setShowApplicationForm(false);
    setEditingApplication(false);
  };
  const handleApplicationsSubmit = (data, editingApplication) => {
    if (editingApplication) {
      console.log("Editing applications", editingApplication);
      const updatedApplication = { ...editingApplication, ...data };
      dispatch(updateApplication(updatedApplication));
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
    onClose();
  };

  const handleApplicationsError = (error) => {
    if (Object.keys(error).length > 1)
      return toast.warn("Please fill required fields");
    const firstError = Object.values(error)[0];
    if (firstError?.message) {
      return toast.warn(firstError.message);
    }
  };

  const handleDeleteApplication = (id) => {
    dispatch(deleteApplication(id));
    toast.success("Application deleted successfully");
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((application) => {
      const jobTypeMatch =
        !jobType || application.jobType.toLowerCase() === jobType.toLowerCase();
      const statusMatch =
        !status ||
        application.currentStatus.toLowerCase() === status.toLowerCase();
      const locationMatch =
        !location ||
        application.location.toLowerCase() === location.toLowerCase();
      const searchMatch=!search || application.companyName.toLowerCase().includes(search.toLowerCase()) || application.jobTitle.toLowerCase().includes(search.toLowerCase()) || application.locationType.toLowerCase().includes(search.toLowerCase())
      return jobTypeMatch && statusMatch && locationMatch,searchMatch;
    });
  }, [jobType, status, applications, location,search]);
  return {
    register,
    handleSubmit,
    reset,
    handleApplicationsError,
    handleApplicationsSubmit,
    handleDeleteApplication,
    onClose,
    filteredApplications,
  };
};
