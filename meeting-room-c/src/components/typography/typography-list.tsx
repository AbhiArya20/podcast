import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyUL({ children, className }: ITypography) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function TypographyOL({ children, className }: ITypography) {
  return (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}>
      {children}
    </ol>
  );
}

export function TypographyLI({ children, className }: ITypography) {
  return <li className={cn("mt-2", className)}>{children}</li>;
}
