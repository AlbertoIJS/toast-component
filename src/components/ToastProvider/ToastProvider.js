import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({})

function ToastProvider({children}) {
  const [toastArray, setToastArray] = React.useState([])

  useEscapeKey('Escape', () => setToastArray([]));

  function handleDismiss(id) {
    const withoutToast = toastArray.filter(toast => toast.id !== id)

    setToastArray(withoutToast)
  }

  function createToast(variant, message) {
    const newToast = [...toastArray, {id: crypto.randomUUID(), variant, message}]

    setToastArray(newToast)
  }

  return <ToastContext.Provider value={{
    toastArray,
    createToast,
    handleDismiss
  }}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
