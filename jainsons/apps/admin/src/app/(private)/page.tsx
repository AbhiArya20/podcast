"use client";
import { AreaChartGradient } from "@/components/modified_ui/area_chart/area_chart";
import CongratulationComponent from "@/components/modified_ui/congratulation_component/congratulation_component";
import ProductTable from "@/components/modified_ui/products_table/products_table";
import { BarChartComponent } from "@/components/modified_ui/statistic_card/bar_chart/bar_chart";
import StatisticCard, {
  StatisticCard10,
  StatisticCard11,
  StatisticCard12,
  StatisticCard2,
  StatisticCard5,
  StatisticCard6,
  StatisticCard7,
  StatisticCard8,
  StatisticCard9,
} from "@/components/modified_ui/statistic_card/statistic_card";
import { Progress } from "@/components/ui/progress";
import { FaRupeeSign } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="min-h-52 flex flex-col gap-4 xl:flex-row">
        <div className="w-full min-h-full flex xl:w-1/3">
          <CongratulationComponent />
        </div>
        <div className="w-full min-h-full flex flex-col gap-4 md:flex-row md:gap-0 xl:w-2/3">
          <StatisticCard6
            icon="bxl-gmail"
            title="Order Received"
            value={1234}
            valueSuffix="k"
            chart={<BarChartComponent />}
            className="border-on-foreground/20 md:rounded-e-none md:border-e"
          />
          <StatisticCard6
            icon="bxl-gmail"
            title="Order Received"
            value={1234}
            valueSuffix="k"
            chart={<BarChartComponent />}
            className="md:rounded-s-none"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 xl:flex-row">
        <div className="w-full min-h-full flex xl:w-1/3">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <StatisticCard
                icon="bxl-gmail"
                title="Transactions"
                value={1234}
                valuePrefix={<FaRupeeSign className="h-5" />}
              />
              <StatisticCard2 icon="bxl-gmail" title="Session" value={1234} />
            </div>

            <div className="w-full flex gap-4">
              <StatisticCard5
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<BarChartComponent />}
                className="border-on-foreground/20"
              />
              <StatisticCard7
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<Progress value={12} />}
                className="border-on-foreground/20"
              />
            </div>
          </div>
        </div>
        <div className="min-h-52 w-full flex flex-col gap-4 md:flex-row xl:w-2/3">
          <StatisticCard10
            icon="bxl-gmail"
            title="Order Received"
            subTitle="Monthly Avg. $45.578k"
            value={1234}
            valueSuffix="k"
            chart={<AreaChartGradient />}
          />
          <StatisticCard8
            icon="bxl-gmail"
            title="Report"
            subTitle="Monthly Avg. $45.578k"
            value={1234}
            valueSuffix="k"
            className="border-on-foreground/20"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 xl:flex-row-reverse">
        <div className="w-full min-h-full flex xl:w-1/3">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <StatisticCard
                icon="bxl-gmail"
                title="Transactions"
                value={1234}
                valuePrefix={<FaRupeeSign className="h-5" />}
              />
              <StatisticCard7
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<Progress value={12} />}
                className="border-on-foreground/20"
              />
            </div>

            <div className="w-full flex gap-4">
              <StatisticCard11
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<BarChartComponent />}
              />
            </div>
          </div>
        </div>
        <div className="min-h-52 w-full flex flex-col gap-4 md:flex-row xl:w-2/3">
          <ProductTable />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 xl:flex-row">
        <div className="w-full min-h-full flex xl:w-1/3">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-full flex gap-4">
              <StatisticCard9
                icon="bxl-gmail"
                title="Order Received"
                subTitle="Monthly Avg. $45.578k"
                value={1234}
                valueSuffix="k"
                chart={<BarChartComponent />}
              />
            </div>
          </div>
        </div>

        <div className="min-h-52 w-full flex flex-col gap-4 md:flex-row xl:w-2/3">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <StatisticCard
                icon="bxl-gmail"
                title="Transactions"
                value={1234}
                valuePrefix={<FaRupeeSign className="h-5" />}
              />
              <StatisticCard2 icon="bxl-gmail" title="Session" value={1234} />
            </div>
            <div className="w-full flex gap-4">
              <StatisticCard5
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<BarChartComponent />}
                className="border-on-foreground/20"
              />
              <StatisticCard7
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<Progress value={12} />}
                className="border-on-foreground/20"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-full flex gap-4">
              <StatisticCard12
                icon="bxl-gmail"
                title="Order Received"
                value={1234}
                valueSuffix="k"
                chart={<BarChartComponent />}
                className="border-on-foreground/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
