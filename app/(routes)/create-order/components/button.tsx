"use client";
import { cn } from "@/lib/utils";

interface ButtonProps {
  Label: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  Label,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-[#9146FF] lg:text-lg text-base  text-white sm:w-fit self-end py-3 w-full sm:py-4 px-4 lg:px-12 rounded-md transition",
        className,
        disabled ? "bg-purple-950 text-white/50" : "hover:bg-[#9146FF]/90"
      )}
    >
      {Label}
    </button>
  );
};

export default Button;
