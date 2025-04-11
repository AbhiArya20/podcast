"use client";
import { FC, ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface IAvatarComponentProps {
  fallback?: ReactNode;
  fallbackClassName?: string;
  src?: string;
  className?: string;
}

const AvatarComponent: FC<IAvatarComponentProps> = ({
  src,
  fallback,
  fallbackClassName,
  className,
}) => {
  return (
    <Avatar
      className={cn(
        "m-auto flex justify-center items-center transition-all duration-300 cursor-pointer hover:z-40",
        className
      )}
    >
      <AvatarImage
        src={src}
        alt="avatar"
        className="flex justify-center items-center"
      />
      <AvatarFallback
        className={cn(
          "bg-primary-alpha text-body-1 text-primary flex justify-center items-center text-center",
          fallbackClassName
        )}
      >
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};

interface AvatarGroupComponentProps {
  avatars: IAvatarComponentProps[];
  fallback?: ReactNode;
  fallbackClassName?: string;
  className?: string;
  maxAvatars?: number;
  gap?: number;
}

const AvatarGroupComponent: FC<AvatarGroupComponentProps> = ({
  avatars,
  fallback,
  fallbackClassName,
  className,
  maxAvatars = 3,
  gap = 30,
}) => {
  return (
    <div className={cn("relative flex", className)}>
      {/* Render individual avatars up to maxAvatars */}
      {avatars.slice(0, maxAvatars).map((avatar, index) => (
        <div
          key={index}
          className="w-10 h-10 absolute"
          style={{ left: `${gap * index}px` }}
        >
          <AvatarComponent
            src={avatar.src}
            fallback={avatar.fallback ?? fallback}
            fallbackClassName={avatar.fallbackClassName ?? fallbackClassName}
            className="border-[2px]"
          />
        </div>
      ))}

      {/* Render a "+X" avatar if there are more avatars than maxAvatars */}
      {avatars.length > maxAvatars && (
        <div
          className="w-10 h-10 absolute"
          style={{ left: `${30 * maxAvatars}px` }}
        >
          <AvatarComponent
            fallback={`+${avatars.length - maxAvatars}`}
            fallbackClassName={fallbackClassName}
            className="border-[2px]"
          />
        </div>
      )}
    </div>
  );
};

export { AvatarGroupComponent };
export default AvatarComponent;
