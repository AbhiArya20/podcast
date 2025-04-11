"use client";
import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { FaAngleLeft } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import Alert from "@/components/alert_component/alert_component";
import { forgotPasswordVerifyOtp } from "@/https/http";
import FormLeftImage from "../../components/form_left_image/form_left_image";
import AuthFormHeader from "../../components/auth_form_header/auth_form_header";
import { passwordZod } from "../../schema/schema";
import OTPComponent from "@/components/modified_ui/otp_compnent/otp_component";
import InputComponent from "@/components/modified_ui/input_component/input_component";
import ButtonComponent from "@/components/button_component/button_component";
import { AuthState, setUser } from "@/redux/slices/auth_slice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getErrorMessage } from "@/lib/utils";

export interface IVerifyOTPFrom {
  otp: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ForgotOTPVerify() {
  const router = useRouter();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (value: IVerifyOTPFrom) => {
      try {
        const response = await forgotPasswordVerifyOtp(value);
        return response.data?.data as AuthState;
      } catch (e) {
        throw new Error(getErrorMessage(e));
      }
    },
    onSuccess: (data) => {
      if (data.isEmailVerified && data.isAdmin) {
        dispatch(setUser({ user: data }));
        router.push("/");
      }
    },
  });

  const form = useForm<IVerifyOTPFrom>({
    defaultValues: {
      otp: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    onSubmit: async ({ value }) => {
      mutation.mutate(value);
    },
    validators: {
      onSubmit: ({ value }) => {
        if (value.otp.length !== 6) {
          return "Invalid OTP. Please enter a valid 6-digit OTP.";
        }
        if (value.newPassword !== value.confirmNewPassword) {
          return "The passwords do not match. Please re-enter them.";
        }
        return undefined;
      },
    },
  });

  return (
    <>
      <div className="h-full hidden lg:w-8/12 lg:flex lg:justify-center lg:items-center lg:p-8">
        <FormLeftImage src={"/images/reset-password.png"} />
      </div>
      <div className="bg-foreground w-full h-full overflow-hidden flex flex-col justify-center items-start lg:w-4/12">
        <div className="animate-fade w-full h-full flex justify-center items-center">
          <form action="">
            <div className="max-w-[500px] p-8">
              <div className="w-full flex flex-col gap-6">
                <AuthFormHeader
                  title="Reset Password 🔒"
                  description="Enter the OTP sent to your email, followed by your new password and confirmation"
                />

                {mutation.isError && <Alert title={mutation?.error?.message} />}

                <form.Field name="otp">
                  {(field) => (
                    <OTPComponent
                      label="OTP"
                      length={6}
                      errorMessage={field.state.meta.errors[0]}
                      onChange={(value: string) => field.handleChange(value)}
                    />
                  )}
                </form.Field>

                <form.Field
                  name="newPassword"
                  validators={{
                    onChangeAsync: passwordZod,
                    onChangeAsyncDebounceMs: 600,
                  }}
                >
                  {(field) => (
                    <InputComponent
                      label="New Password"
                      type="password"
                      id="new-password"
                      value={field.state.value}
                      placeholder="············"
                      errorMessage={field.state.meta.errors[0]}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>

                <form.Field
                  name="confirmNewPassword"
                  validators={{
                    onChangeAsync: passwordZod,
                    onChangeAsyncDebounceMs: 600,
                  }}
                >
                  {(field) => (
                    <InputComponent
                      label="Confirm Password"
                      type="confirm-password"
                      id="password"
                      value={field.state.value}
                      placeholder="············"
                      errorMessage={field.state.meta.errors[0]}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>

                <ButtonComponent type={"submit"} btnText="Save New Password" />
                <Link
                  href="/login"
                  className="ml-auto text-app-primary text-body-1 w-full inline-flex justify-center items-center gap-2 mt-2 mb-1"
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
