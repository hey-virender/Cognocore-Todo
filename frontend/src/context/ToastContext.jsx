import React, { createContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {

    const id = Date.now();
    setToasts((prevToast) => [...prevToast, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };
  const removeToast = (id) => {
    setToasts((prevToast) => prevToast.filter((toast) => toast.id !== id));
  };
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 left-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-md text-white ${
              toast.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
