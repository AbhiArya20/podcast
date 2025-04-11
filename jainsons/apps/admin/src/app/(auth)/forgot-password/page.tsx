"use client";
import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { forgotPasswordSendOtp } from "@/https/http";
import { setUser } from "@/redux/slices/auth_slice";
import FormLeftImage from "../components/form_left_image/form_left_image";
import AuthFormHeader from "../components/auth_form_header/auth_form_header";
import { emailZod } from "../schema/schema";
import InputComponent from "@/components/modified_ui/input_component/input_component";
import ButtonComponent from "@/components/button_component/button_component";
import AlertComponent from "@/components/alert_component/alert_component";
import { getErrorMessage } from "@/lib/utils";

export interface IForgotPasswordForm {
  email: string;
}

export default function ForgotPassword() {
  const router = useRouter();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (value: IForgotPasswordForm) => {
      try {
        const response = await forgotPasswordSendOtp(value);
        return response.data;
      } catch (e) {
        throw new Error(getErrorMessage(e));
      }
    },
    onSuccess: (data) => {
      if (data && data.isEmailVerified && data.isAdmin) {
        dispatch(setUser({ user: data }));
        router.push("/forgot-password/verify-otp");
      }
    },
  });

  const form = useForm<IForgotPasswordForm>({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      mutation.mutate(value);
    },
  });

  return (
    <>
      <div className="h-full hidden lg:w-8/12 lg:flex lg:justify-center lg:items-center lg:p-8">
        <FormLeftImage src={"/images/forgot.png"} />
      </div>
      <div className="bg-foreground w-full h-full overflow-hidden flex flex-col justify-center items-start lg:w-4/12">
        <div className="animate-fadein w-full h-full flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="max-w-[500px] p-8">
              <div className="w-full flex flex-col gap-6">
                <AuthFormHeader
                  title="Forgot Password? 🔒"
                  description="Enter your email and we'll send you an OTP to reset your password"
                />

                {mutation.isError && (
                  <AlertComponent
                    className="bg-opacity-30 text-red-600 bg-red-500 dark:text-red-200"
                    description={mutation?.error?.message}
                  />
                )}

                <form.Field
                  name="email"
                  validators={{
                    onChangeAsync: emailZod,
                    onChangeAsyncDebounceMs: 600,
                  }}
                >
                  {(field) => (
                    <InputComponent
                      label="Email"
                      type="email"
                      id="email"
                      value={field.state.value}
                      placeholder="abhiarya329@gmail.com"
                      errorMessage={field.state.meta.errors[0]}
                      currentLength={field.state.value.length}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>

                <ButtonComponent
                  loading={mutation.isPending}
                  type={"submit"}
                  btnText="Login"
                />
                <Link
                  href="/login"
                  className="ml-auto text-body-1 text-primary w-full inline-flex justify-center items-center gap-2 mt-2 mb-1"
                >
                  <span>
                    <FaAngleLeft className="w-3 h-3" />
                  </span>
                  <span>Back to login</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
