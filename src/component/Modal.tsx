import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

// import { ReactNode, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const Modal = ({ children }: { children: ReactNode }) => {
//   const elRef = useRef<HTMLDivElement | null>(null);
//   if (!elRef.current) {
//     elRef.current = document.createElement("div");
//   }
//   useEffect(() => {
//     const modalRoot = document.getElementById("modal");
//     if (!modalRoot) return;
//     if (!elRef.current) return;
//     modalRoot.appendChild(elRef.current);
//     return () => {
//       if (!elRef.current) return;
//       modalRoot.removeChild(elRef.current);
//     };
//   }, []);
//   return createPortal(<div>{children}</div>, elRef.current);
// };

// export default Modal;
