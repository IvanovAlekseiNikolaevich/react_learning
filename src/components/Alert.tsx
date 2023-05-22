import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
