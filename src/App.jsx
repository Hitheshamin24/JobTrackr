import { ToastContainer } from "react-toastify";
import AppRoutes from "./features/routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastClassName="!rounded-xl !shadow-lg !border !border-gray-200 !bg-white !text-gray-800"
        bodyClassName="!text-sm !font-medium"
      />
    </div>
  );
};

export default App;
