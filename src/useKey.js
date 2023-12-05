import { useEffect } from "react";

export function useKey(keydown, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === keydown.toLowerCase()) {
        action();
        console.log("CLOSING");
      }
    }

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [action, keydown]);
}
