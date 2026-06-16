import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  style?: React.CSSProperties;
  href?: string;
  disabled?: boolean;
  "aria-label"?: string;
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick,
  type = "button",
  style,
  href,
  disabled = false,
  "aria-label": ariaLabel
}: ButtonProps) => {
  const commonProps = {
    className: `btn btn-${variant} btn-${size} ${className}`,
    style,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <a href={href} {...commonProps} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      {...commonProps}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
