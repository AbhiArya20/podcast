"use client";
import FormLeftImage from "../components/form_left_image/form_left_image";
import AuthFormHeader from "../components/auth_form_header/auth_form_header";
import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AuthState, setUser } from "@/redux/slices/auth_slice";
import { useDispatch } from "react-redux";
import AlertComponent from "@/components/alert_component/alert_component";
import InputComponent from "@/components/modified_ui/input_component/input_component";
import CheckboxComponent from "@/components/modified_ui/check_box_component/check_box_component";
import ButtonComponent from "@/components/button_component/button_component";

import { login } from "@/https/http";
import { emailZod, passwordZod } from "../schema/schema";
import { getErrorMessage } from "@/lib/utils";

export interface ILoginFrom {
  email: string;
  password: string;
  remember: boolean;
}

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (value: ILoginFrom) => {
      try {
        const response = await login(value);
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

  const form = useForm<ILoginFrom>({
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
    onSubmit: async ({ value }) => {
      mutation.mutate(value);
    },
  });

  return (
    <>
      <div className="h-full hidden lg:w-8/12 lg:flex lg:justify-center lg:items-center lg:p-8">
        <FormLeftImage src={"/images/login.png"} />
      </div>
      <div className="animate-fadein bg-foreground w-full h-full overflow-hidden flex flex-col justify-center items-start lg:w-4/12">
        <div className="animate-fade w-full h-full flex justify-center items-center">
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
                  title="Welcome to Jainsons! 👋🏻"
                  description="Please sign-in to your account with email and start the adventure."
                />

                {mutation.isError && (
                  <AlertComponent
                    className="bg-opacity-30 bg-red-500/20"
                    descriptionClassName="text-red-500/100"
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

                <form.Field
                  name="password"
                  validators={{
                    onChangeAsync: passwordZod,
                    onChangeAsyncDebounceMs: 600,
                  }}
                >
                  {(field) => (
                    <InputComponent
                      label="Password"
                      type="password"
                      id="password"
                      value={field.state.value}
                      placeholder="············"
                      errorMessage={field.state.meta.errors[0]}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>

                <div className="flex items-center px-1 my-2">
                  <form.Field name="remember">
                    {(field) => (
                      <CheckboxComponent
                        checked={field.state.value}
                        onCheckedChange={(checked: boolean) =>
                          field.handleChange(checked)
                        }
                        label="Remember me"
                        id="remember"
                      />
                    )}
                  </form.Field>

                  <Link
                    href="/forgot-password"
                    className="ml-auto text-body-1 text-primary inline-block mb-1"
                  >
                    Forgot password?
                  </Link>
                </div>

                <ButtonComponent
                  loading={mutation.isPending}
                  type={"submit"}
                  btnText="Login"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
