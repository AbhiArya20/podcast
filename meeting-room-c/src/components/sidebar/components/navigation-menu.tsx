import { cn } from "@/lib/utils";
import { TypographySmall } from "@/components/typography/typography-small";
import { MailCheckIcon } from "@/components/icons/mail-check";
import { MessageSquareIcon } from "@/components/icons/message-square";
import { VideoIcon } from "@/components/icons/video";
import { FileCheckIcon } from "@/components/icons/file-check";
import Link from "next/link";

const navigationMenu = [
  {
    title: "Meet",
    logo: <VideoIcon size={20} />,
    className: "bg-rose-600/30 text-rose-600 hover:bg-rose-600/20",
    href: "meet",
  },
  {
    title: "Chat",
    logo: <MessageSquareIcon size={20} />,
    className: "bg-orange-600/30 text-orange-600 hover:bg-orange-600/20",
    href: "chat",
  },
  {
    title: "Mail",
    logo: <MailCheckIcon size={20} />,
    className: "bg-lime-600/30 text-lime-600 hover:bg-lime-600/20",
    href: "mail",
  },
  {
    title: "Docs",
    logo: <FileCheckIcon size={20} />,
    className: "bg-blue-600/30 text-blue-600 hover:bg-blue-600/20",
    href: "docs",
  },
];

type NavigationItem = {
  title: string;
  logo: React.ReactNode;
  className: string;
  href: string;
};

type NavigationMenuProps = {
  menu: NavigationItem;
};

function NavigationMenu({ menu }: NavigationMenuProps) {
  return (
    <Link
      href={menu.href}
      className="flex items-center gap-1 flex-col cursor-pointer"
    >
      <div
        className={cn(
          "text-sidebar-foreground aspect-square flex justify-center items-center rounded-lg transition-colors duration-300",
          menu.className
        )}
      >
        {menu.logo}
      </div>
      <TypographySmall className="text-muted-foreground text-xs">
        {menu.title}
      </TypographySmall>
    </Link>
  );
}

export default function NavigationMenus() {
  return (
    <>
      {navigationMenu.map((menu, index) => (
        <NavigationMenu key={index} menu={menu} />
      ))}
    </>
  );
}
