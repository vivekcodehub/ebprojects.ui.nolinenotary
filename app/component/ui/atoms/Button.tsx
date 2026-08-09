"use client";

import { forwardRef } from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary" 
  | "secondary" 
  | "outline" 
  | "ghost"
  | "link"; 

export type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "cursor-pointer inline-flex items-center text-[1rem] font-normal justify-center gap-2 !rounded-none tracking-wide rounded transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:scale-[0.97]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-yellow text-neutral-deep-black py-[0.875rem]",
  secondary: "bg-transparent text-neutral-deep-black border-2 border-neutral-deep-black",
  outline:
    "bg-white text-neutral-deep-black border-2 border-neutral-deep-black",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  link: "bg-transparent text-amber-500 underline underline-offset-4 hover:text-amber-600 p-0 rounded-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-[1rem] px-6 py-3",
  lg: "text-base px-8 py-4",
};

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

function getClasses({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: Pick<BaseProps, "variant" | "size" | "fullWidth" | "className">) {
  return [
    baseStyles,
    variantStyles[variant],
    variant !== "link" ? sizeStyles[size] : "",
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    isLoading,
    leftIcon,
    rightIcon,
    children,
    className,
    ...rest
  } = props;

  const classes = getClasses({ variant, size, fullWidth, className });

  const content = (
    <>
      {isLoading && <Spinner />}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        href={props.href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        aria-disabled={isLoading}
        {...anchorRest}
      >
        {content}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      disabled={isLoading || buttonRest.disabled}
      {...buttonRest}
    >
      {content}
    </button>
  );
});

export default Button;