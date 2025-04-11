"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TitleComponent from "../title_component/title_component";
import SubTitleComponent from "../sub_title_component/sub_title_component";
import AvatarComponent from "../avatar_component/avatar_component";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const menus = [
  {
    label: "Profile",
    icon: <i className={"bx bx-user text-2xl"}></i>,
    route: "/profile",
  },
  {
    label: "Settings",
    icon: <i className={"bx bx-cog text-2xl"}></i>,
    route: "/settings",
  },
  {
    isSeparator: true,
  },
  {
    label: "Logout",
    icon: <i className={"bx bx-power-off text-2xl"}></i>,
    route: "/logout",
  },
];

const AccountDropDown = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex justify-center items-center">
          <AvatarComponent
            className="ml-2"
            src="https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/images/avatars/avatar-1.png"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={20}
        className="bg-foreground w-56 p-0 py-2 border-none outline-none ring-0 dark:bg-dark-surface"
      >
        <div className="grid gap-1">
          <div className="flex justify-start items-center gap-2 px-4 py-2">
            <div className="min-w-max">
              <AvatarComponent src="https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/images/avatars/avatar-1.png" />
            </div>

            <div className="f">
              <TitleComponent
                className="text-md text-on-foreground/80 mb-0 font-semibold dark:text-on-foreground/95"
                title="Abhishek"
              />

              <SubTitleComponent
                className="-mt-1 text-caption text-on-foreground/30 text-sm font-medium dark:text-on-foreground/50"
                subTitle="Admin"
              />
            </div>
          </div>

          <Separator className="bg-on-foreground/10" />

          {menus.map((menu) => (
            <div key={menu.label ?? "" + Math.random()}>
              {menu.isSeparator ?
                <Separator className="bg-on-foreground/10" />
              : <Link href={menu.route!}>
                  <div
                    className={`text-on-foreground/90 flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-gray-600/40 hover:bg-gray-200/60`}
                  >
                    <span className={`flex justify-center items-center`}>
                      {menu.icon}
                    </span>
                    <span className={`flex justify-center items-center`}>
                      {menu.label}
                    </span>
                  </div>{" "}
                </Link>
              }
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccountDropDown;
