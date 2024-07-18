import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: React.ReactNode;
    labelClassName?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { className, type = "text", label, icon, labelClassName, ...props },
        ref
    ) => {
        return (
            <div className="flex flex-col gap-2">
                <label className={cn("text-sm font-semibold", labelClassName)}>
                    {label}
                </label>
                <div className="relative">
                    {icon && (
                        <div className="absolute top-0 left-0 flex items-center h-full pl-3">
                            {icon}
                        </div>
                    )}
                    <input
                        type={type}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            className,
                            icon && "pl-10"
                        )}
                        ref={ref}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);
CustomInput.displayName = "CustomInput";

export { CustomInput };
