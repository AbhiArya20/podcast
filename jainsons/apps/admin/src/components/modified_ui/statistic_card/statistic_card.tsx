"use client";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import SubTitleComponent from "../sub_title_component/sub_title_component";
import DropdownMenuComponent, {
  IDropdownMenuItemType,
} from "../drop_down_menu_component/drop_down_menu_component";
import ButtonComponent from "../../button_component/button_component";
import TitleComponent from "../title_component/title_component";
import ChipComponent from "../chips/chips";
import Chip from "@/components/chip/chip";
import SubTitle1 from "@/components/typography_components/sub_title_1";

const menuItems: IDropdownMenuItemType[] = [
  {
    label: "Yesterday",
    onClick: () => console.log("Profile clicked"),
  },
  {
    label: "Last Week",
    onClick: () => console.log("Billing clicked"),
  },
  {
    label: "Last Month",
    onClick: () => console.log("Billing clicked"),
  },
];

interface IStatisticsCard {
  icon?: string;
  iconClassName?: string;
  title?: string;
  subTitle?: string;
  value?: number;
  valuePrefix?: ReactNode;
  valueSuffix?: ReactNode;
  chart?: ReactNode;
  className?: string;
}

const StatisticCard: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  value,
  valuePrefix,
  valueSuffix,
}) => {
  return (
    <div className="bg-foreground min-h-52 w-full overflow-hidden relative flex flex-col justify-center items-start gap-4 p-6 rounded-lg shadow-md sm:justify-between">
      <div className="w-full flex justify-between items-center">
        <StatisticsIconComponent
          icon={icon}
          iconClassName={cn("", iconClassName)}
        />
        <DropdownMenuComponent
          menuContentClassName="w-20"
          menuItems={menuItems}
          trigger={
            <ButtonComponent
              icon="bx-dots-vertical-rounded text-on-surface/90 dark:text-on-dark-surface/90 outline-none"
              className="w-4 max-w-max h-8 bg-transparent rounded-full outline-none shadow-none dark:hover:bg-gray-600/40 focus-visible:ring-0 hover:bg-gray-200/60"
            />
          }
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-y-1">
        <SubTitleComponent subTitle={title} />
        <StatisticValueComponent
          value={value}
          prefix={valuePrefix}
          suffix={valueSuffix}
        />
      </div>
      <div className="flex items-center gap-1 text-green-500">
        <span className="flex justify-center items-center">
          <i className="bx bx-up-arrow-alt bx-xs" />
        </span>
        <span className="flex justify-center items-center text-sm">12%</span>
      </div>
    </div>
  );
};

const StatisticCard4: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  value,
  valuePrefix,
  valueSuffix,
}) => {
  return (
    <div className="bg-foreground w-full overflow-hidden relative flex flex-col justify-center items-start gap-4 p-6 rounded-lg border-b-[3px] border-green-200 shadow-md transition-all duration-300   hover:border-green-500 sm:justify-between">
      <div className="w-full flex justify-start items-center gap-4">
        <StatisticsIconComponent
          icon={icon}
          iconClassName={cn("", iconClassName)}
        />
        <StatisticValueComponent
          value={value}
          prefix={valuePrefix}
          suffix={valueSuffix}
        />
      </div>
      <SubTitleComponent subTitle={"Last Week analytics"} className="text-sm" />
      <div className="flex items-center gap-2 text-green-500">
        <span className="flex justify-center items-center text-sm">+12%</span>
        <span className="text-on-surface/40 flex justify-center items-center text-xs dark:text-on-dark-surface/40">
          than last week
        </span>
      </div>
    </div>
  );
};

const StatisticCard5: FC<IStatisticsCard> = ({
  title,
  value,
  valuePrefix,
  valueSuffix,
  chart,
}) => {
  return (
    <div className="bg-foreground w-full overflow-hidden relative flex flex-col justify-center items-start gap-4 p-6 rounded-lg shadow-md transition-all duration-300 sm:justify-between">
      <SubTitleComponent subTitle={title} />
      <StatisticValueComponent
        value={value}
        prefix={valuePrefix}
        suffix={valueSuffix}
      />
      <div className="w-full">{chart}</div>
    </div>
  );
};

const StatisticCard3: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  value,
  valuePrefix,
  valueSuffix,
}) => {
  return (
    <div className="bg-foreground w-full overflow-hidden relative flex flex-col justify-center items-start gap-4 p-6 rounded-lg shadow-md sm:justify-between">
      <div className="w-full flex justify-between items-center">
        <SubTitleComponent subTitle={title} />

        <DropdownMenuComponent
          menuContentClassName="w-20"
          menuItems={menuItems}
          trigger={
            <ButtonComponent
              icon="bx-dots-vertical-rounded text-on-surface/90 dark:text-on-dark-surface/90 outline-none"
              className="w-4 max-w-max h-8 bg-transparent rounded-full outline-none shadow-none dark:hover:bg-gray-600/40 focus-visible:ring-0 hover:bg-gray-200/60"
            />
          }
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-2">
        <StatisticsIconComponent
          icon={icon}
          iconClassName={cn("", iconClassName)}
          className="ring-app-primary/5 mb-4 rounded-full ring-4"
        />

        <StatisticValueComponent
          value={value}
          prefix={valuePrefix}
          suffix={valueSuffix}
        />

        <SubTitleComponent subTitle={"47% of target"} />

        <div className="flex items-center gap-1 text-green-500">
          <span className="flex justify-center items-center text-sm">12%</span>
          <span className="flex justify-center items-center">
            <i className="bx bx-chevron-down bx-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

const StatisticCard2: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  value,
  valuePrefix,
  valueSuffix,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-center items-start gap-2 p-6 rounded-lg shadow-md sm:justify-between",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <SubTitleComponent subTitle={title} />
        <StatisticsIconComponent
          icon={icon}
          iconClassName={cn("", iconClassName)}
        />
      </div>
      {/* <div className="flex flex-col justify-start items-start gap-y-2"> */}
      <div className="flex items-center gap-4">
        <StatisticValueComponent
          value={value}
          prefix={valuePrefix}
          suffix={valueSuffix}
        />
        <div className="flex items-center gap-1 text-green-500">
          <span className="flex justify-center items-center text-sm">
            (+12%)
          </span>
        </div>
      </div>
      <SubTitleComponent subTitle={"Last Week analytics"} className="text-sm" />
      {/* </div> */}
    </div>
  );
};

const StatisticCard7: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  value,
  valuePrefix,
  valueSuffix,
  className,
  chart,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-2 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <SubTitleComponent subTitle={title} />
        <StatisticsIconComponent
          icon={icon}
          iconClassName={cn("", iconClassName)}
        />
      </div>

      <div className="flex items-center gap-4">
        <StatisticValueComponent
          value={value}
          prefix={valuePrefix}
          suffix={valueSuffix}
        />
        <div className="flex items-center gap-1 text-green-500">
          <span className="flex justify-center items-center text-sm">
            (+12%)
          </span>
        </div>
      </div>
      <SubTitleComponent subTitle={"Last Week analytics"} className="text-sm" />
      {chart}
    </div>
  );
};

const StatisticCard8: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  subTitle,
  value,
  valuePrefix,
  valueSuffix,
  className,
  chart,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-2 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <TitleComponent title={title} />
          <SubTitleComponent subTitle={subTitle} />
        </div>

        <DropdownMenuComponent
          menuContentClassName="w-20"
          menuItems={menuItems}
          trigger={
            <ButtonComponent
              icon="bx-dots-vertical-rounded text-on-surface/90 dark:text-on-dark-surface/90 outline-none"
              className="w-4 max-w-max h-8 bg-transparent rounded-full outline-none shadow-none dark:hover:bg-gray-600/40 focus-visible:ring-0 hover:bg-gray-200/60"
            />
          }
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="bg-gray-200/60 w-full flex justify-between items-center gap-2 p-2 rounded-lg dark:bg-gray-600/40">
          <div className="flex gap-2">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
              />{" "}
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-500">
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="bg-gray-200/60 w-full flex justify-between items-center gap-4 p-2 rounded-lg dark:bg-gray-600/40">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
              />{" "}
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-500">
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="bg-gray-200/60 w-full flex justify-between items-center gap-4 p-2 rounded-lg dark:bg-gray-600/40">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
              />{" "}
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-500">
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="bg-gray-200/60 w-full flex justify-between items-center gap-4 p-2 rounded-lg dark:bg-gray-600/40">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
              />{" "}
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-500">
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
      </div>
      <SubTitleComponent subTitle={"Last Week analytics"} className="text-sm" />
      {chart}
    </div>
  );
};

const StatisticCard10: FC<IStatisticsCard> = ({
  title,
  subTitle,
  className,
  chart,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden flex flex-col justify-between items-start gap-2 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <TitleComponent title={title} />
          <SubTitleComponent subTitle={subTitle} />
        </div>

        <DropdownMenuComponent
          menuContentClassName="w-20"
          menuItems={menuItems}
          trigger={
            <ButtonComponent
              icon="bx-dots-vertical-rounded text-on-surface/90 dark:text-on-dark-surface/90 outline-none"
              className="w-4 max-w-max h-8 bg-transparent rounded-full outline-none shadow-none dark:hover:bg-gray-600/40 focus-visible:ring-0 hover:bg-gray-200/60"
            />
          }
        />
      </div>

      <div className="w-full">{chart}</div>
    </div>
  );
};

const StatisticCard9: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  subTitle,
  value,
  valuePrefix,
  valueSuffix,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-2 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <TitleComponent title={title} />
          <SubTitleComponent subTitle={subTitle} />
        </div>

        <DropdownMenuComponent
          menuContentClassName="w-20"
          menuItems={menuItems}
          trigger={
            <ButtonComponent
              icon="bx-dots-vertical-rounded text-on-surface/90 dark:text-on-dark-surface/90 outline-none"
              className="w-4 max-w-max h-8 bg-transparent rounded-full outline-none shadow-none dark:hover:bg-gray-600/40 focus-visible:ring-0 hover:bg-gray-200/60"
            />
          }
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex justify-between items-center gap-4 rounded-lg">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
                className="text-lg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-green-500">
            <span className="flex justify-center items-center font-bold">
              <i className="bx bx-up-arrow-alt text-lg"></i>
            </span>
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4 rounded-lg">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
                className="text-lg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-green-500">
            <span className="flex justify-center items-center font-bold">
              <i className="bx bx-up-arrow-alt text-lg"></i>
            </span>
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4 rounded-lg">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
                className="text-lg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center text-green-500">
            <span className="flex justify-center items-center font-bold">
              <i className="bx bx-up-arrow-alt text-lg"></i>
            </span>
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4 rounded-lg">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
                className="text-lg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-green-500">
            <span className="flex justify-center items-center font-bold">
              <i className="bx bx-up-arrow-alt text-lg"></i>
            </span>
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4 rounded-lg">
          <div className="flex gap-4">
            <div>
              <StatisticsIconComponent
                icon={icon}
                iconClassName={cn("", iconClassName)}
              />{" "}
            </div>
            <div className="w-full flex flex-col">
              <SubTitleComponent subTitle={subTitle} className="text-xs" />
              <StatisticValueComponent
                value={value}
                prefix={valuePrefix}
                suffix={valueSuffix}
                className="text-lg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-green-500">
            <span className="flex justify-center items-center font-bold">
              <i className="bx bx-up-arrow-alt text-lg"></i>
            </span>
            <span className="flex justify-center items-center text-sm">
              (+12%)
            </span>
          </div>
        </div>
      </div>

      <SubTitleComponent subTitle={"Last Week analytics"} className="text-sm" />
    </div>
  );
};
const StatisticCard12: FC<IStatisticsCard> = ({
  icon,
  iconClassName,
  title,
  subTitle,
  className,
  chart,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-2 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <TitleComponent title={title} />
          <SubTitleComponent subTitle={subTitle} />
        </div>

        <DropdownMenuComponent
          menuContentClassName="w-20"
          menuItems={menuItems}
          trigger={
            <ButtonComponent
              icon="bx-dots-vertical-rounded text-on-surface/90 dark:text-on-dark-surface/90 outline-none"
              className="w-4 max-w-max h-8 bg-transparent rounded-full outline-none shadow-none dark:hover:bg-gray-600/40 focus-visible:ring-0 hover:bg-gray-200/60"
            />
          }
        />
      </div>

      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <StatisticsIconComponent
              icon={icon}
              iconClassName={cn("", iconClassName)}
            />
          </div>
          <div>
            <SubTitleComponent subTitle={"Income"} className="text-sm" />
            <SubTitleComponent subTitle={"Order"} className="text-sm" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <StatisticsIconComponent
              icon={icon}
              iconClassName={cn("", iconClassName)}
            />
          </div>
          <div>
            <SubTitleComponent subTitle={"Expanse"} className="text-sm" />
            <SubTitleComponent subTitle={"Profit"} className="text-sm" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">{chart}</div>

      <div className="w-full flex justify-between">
        <div>
          <SubTitleComponent
            subTitle={"Last Week analytics"}
            className="text-sm"
          />
          <SubTitleComponent
            subTitle={"Last Week analytics"}
            className="text-sm"
          />
        </div>
        <div>
          <StatisticsIconComponent
            icon={icon}
            iconClassName={cn("", iconClassName)}
          />{" "}
        </div>
      </div>
    </div>
  );
};

const StatisticCard6: FC<IStatisticsCard> = ({
  title,
  value,
  valuePrefix,
  valueSuffix,
  className,
  chart,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-4 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center">
          <SubTitleComponent subTitle={title} />
        </div>

        <span className="text-on-foreground/70 flex justify-center items-center text-xs">
          Last Week
        </span>
      </div>

      <div className="w-full flex justify-between items-end gap-2">
        <div className="">
          <StatisticValueComponent
            value={value}
            prefix={valuePrefix}
            suffix={valueSuffix}
          />

          <div className="flex items-center gap-1 text-green-500">
            <span className="flex justify-center items-center text-sm">
              12%
            </span>
            <span className="flex justify-center items-center">
              <i className="bx bx-chevron-down bx-sm" />
            </span>
          </div>
        </div>
        <div className="-mb-4 w-4/6">{chart}</div>
      </div>
    </div>
  );
};

const StatisticCard13: FC<IStatisticsCard> = ({
  title,
  value,
  valuePrefix,
  valueSuffix,
  className,
  chart,
  icon,
  iconClassName,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-4 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center">
          <SubTitleComponent subTitle={title} />
        </div>
        <StatisticsIconComponent
          icon={icon}
          iconClassName={cn("", iconClassName)}
        />
      </div>

      <div className="w-full flex justify-between items-end gap-2">
        <div className="">
          <StatisticValueComponent
            value={value}
            prefix={valuePrefix}
            suffix={valueSuffix}
          />

          <div className="w-full flex items-center gap-2 text-green-500">
            <SubTitle1 className="text-nowrap" text="5k orders" />
            <Chip className="bg-green-500/20 p-0 px-3 py-1 text-green-500">
              +12.5%
            </Chip>
          </div>
        </div>
        <div className="-mb-4 w-4/6">{chart}</div>
      </div>
    </div>
  );
};

const StatisticCard11: FC<IStatisticsCard> = ({
  title,
  value,
  valuePrefix,
  valueSuffix,
  className,
  chart,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground w-full overflow-hidden relative flex flex-col justify-between items-start gap-4 p-6 rounded-lg shadow-md",
        className
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center">
          <SubTitleComponent subTitle={title} />
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-2">
        <div className="">
          <StatisticValueComponent
            value={value}
            prefix={valuePrefix}
            suffix={valueSuffix}
          />

          <div className="flex items-center gap-1 text-green-500">
            <span className="flex justify-center items-center text-sm">
              12%
            </span>
            <span className="flex justify-center items-center">
              <i className="bx bx-chevron-down bx-sm" />
            </span>
          </div>
        </div>
        <div className="-mb-4 w-4/6">{chart}</div>
      </div>
      <div className="w-full flex">
        <ChipComponent
          label="View Badges"
          className="max-w-max py-1 text-sm sm:text-start"
        />
      </div>
    </div>
  );
};

interface IStatisticsValueComponent {
  value?: number;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const StatisticValueComponent: FC<IStatisticsValueComponent> = ({
  value,
  className,
  prefix,
  suffix,
}) => {
  return (
    <h5
      className={cn(
        "text-on-foreground/80 flex items-center gap-1 mb-1 text-2xl font-medium tracking-tight leading-none",
        className
      )}
    >
      {prefix && <span>{prefix}</span>}
      <span>{value}</span>
      {suffix && <span>{suffix}</span>}
    </h5>
  );
};

interface IStatisticIconComponentProps {
  icon?: string;
  iconClassName?: string;
  className?: string;
}

const StatisticsIconComponent: FC<IStatisticIconComponentProps> = ({
  icon,
  iconClassName,
  className,
}) => {
  return (
    <span
      className={cn(
        "bg-primary-alpha flex justify-center items-center p-2 rounded-md dark:bg-primary-alpha",
        className
      )}
    >
      <i
        className={cn(
          icon,
          "bx bx-sm text-primary w-6 h-6 before:absolute before:content-none before:bg-transparent",
          iconClassName,
          icon
        )}
      ></i>
    </span>
  );
};

export {
  StatisticCard2,
  StatisticCard6,
  StatisticCard3,
  StatisticCard4,
  StatisticCard5,
  StatisticCard7,
  StatisticCard8,
  StatisticCard10,
  StatisticCard11,
  StatisticCard12,
  StatisticCard13,
  StatisticCard9,
};
export default StatisticCard;
