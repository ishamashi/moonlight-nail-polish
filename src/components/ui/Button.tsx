import React from "react";
import Link from "next/link"; // Jika tombol bisa berupa link

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "light"; // Contoh varian gaya
  size?: "sm" | "md" | "lg";
  href?: string; // Jika tombol adalah link
  children: React.ReactNode;
  className?: string; // Untuk tambahan kelas kustom
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props // Props lain untuk elemen button (onClick, type, etc.)
}) => {
  // Base styles
  let baseClasses = "inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  // Size styles
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg rounded-lg", // Mungkin ukuran lebih besar lagi
  };

  // Variant styles
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-gray-700 focus:ring-secondary",
    outline: "border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
    light: "bg-white text-primary hover:bg-gray-100 focus:ring-primary", // Untuk background gelap
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
