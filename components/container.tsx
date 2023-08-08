import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-4/6 lg:w-5/6 mx-auto py-8">{children}</div>;
};

export default Container;
