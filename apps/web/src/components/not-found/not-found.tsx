import PageError from "@/components/page-error/page-error";
import CustomError from "@/utils/custom-error";
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <PageError
      icon={<TbError404 />}
      error={
        new CustomError({
          code: 404,
          message: "Page Not Found!",
          description: "Looks like you took a wrong turn. Let’s get you back!",
        })
      }
    />
  );
}
