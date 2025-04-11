import PageError from "@/components/page-error/page-error";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <PageError
      error={{
        Icon: TbError404,
        message: "Page Not Found!",
        description: "Looks like you took a wrong turn. Let’s get you back!",
      }}
      type="back"
    />
  );
};

export default NotFound;
