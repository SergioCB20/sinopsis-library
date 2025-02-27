import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large" | "icon";
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

interface ButtonElementProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {}
interface AnchorElementProps extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {}

type ButtonProps = ButtonElementProps | AnchorElementProps;

export function Button({ variant = "primary", size = "medium", className, children, href, ...props }: ButtonElementProps | AnchorElementProps) {
  const baseStyles = "rounded-lg font-semibold transition duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-200",
    ghost: "text-gray-600 hover:bg-gray-200",
  };

  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}


