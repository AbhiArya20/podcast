"use client";
import Image from "next/image";
import ChipComponent from "../chips/chips";
import { FC } from "react";
import SubTitleComponent from "../sub_title_component/sub_title_component";
import { StatisticValueComponent } from "../statistic_card/statistic_card";
import { FaRupeeSign } from "react-icons/fa6";
import Heading5 from "@/components/typography_components/heading_5";
import SubTitle1 from "@/components/typography_components/sub_title_1";
// import { useSelector } from "react-redux";
// import { AppSliceState } from "@/redux/store";
// import { useQuery } from "@tanstack/react-query";
// import { getCongratulations } from "@/https/http";

const CongratulationComponent: FC = () => {
  // const user = useSelector((state: AppSliceState) => state.auth.user);

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["congratulation"],
  //   queryFn: async () => await getCongratulations(),
  // });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  // console.log(data);

  return (
    <div className="bg-foreground h-hull w-full overflow-hidden relative flex flex-col-reverse justify-center items-start gap-4 p-6 rounded-lg shadow-md sm:flex-row sm:justify-between">
      <div className="flex flex-col gap-4">
        <div className="w-full flex flex-col justify-center">
          <Heading5
            className={
              "text-primary-dark/90 mb-1 text-lg font-medium tracking-tight leading-none"
            }
            text={"Congratulations Abhishek! 🎉"}
          />
          <SubTitle1 text={`You have done 56% more sales today.`} />
        </div>

        <div className="w-full">
          <StatisticValueComponent
            value={42.8}
            prefix={<FaRupeeSign className="h-5" />}
            suffix={"k"}
            className="text-primary"
          />
          <SubTitleComponent subTitle="78% of target 🚀" />
        </div>

        <div className="w-full flex">
          <ChipComponent
            label="View Badges"
            className="max-w-max py-1 text-sm sm:text-start"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-8 flex justify-center">
        <Image
          width={300}
          height={300}
          className="w-auto"
          src="/images/trophy.png"
          alt="Coding"
        />
      </div>
    </div>
  );
};

// export { CongratulationComponent2 };

export default CongratulationComponent;
