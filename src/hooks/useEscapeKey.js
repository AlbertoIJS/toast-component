import React from "react";

export default function useEscapeKey(key, callback) {
  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.key === key)
        callback(e)
    }

    document.body.addEventListener('keydown', handleKeydown)
    return () => document.body.addEventListener('keydown', handleKeydown)
  }, [key, callback])
}