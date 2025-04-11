"use client";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import AuthFormHeader from "@/app/(auth)/components/auth_form_header/auth_form_header";
import ButtonComponent from "@/components/button_component/button_component";
import InputComponent from "@/components/modified_ui/input_component/input_component";
// import CheckboxComponent from "@/components/modified_ui/check_box_component/check_box_component";

export interface IAddProductForm {
  productName: string;
  description: string;
  // categories: string[];
  sku: string;
  barcode: string;
  price: number;
  quantity?: number;
  discountedPrice?: number;
}

function AddProduct() {
  const mutation = useMutation({
    mutationFn: async (value: IAddProductForm) => {
      try {
        console.log(value);

        //   const response = await addProduct(value);
        //   return response.data;
      } catch (e) {
        if (e instanceof AxiosError) {
          throw new Error(
            e.response?.data?.message ||
              "An error occurred while adding new product. Please try again later."
          );
        }
        throw new Error(
          "An error occurred while adding new product. Please try again later."
        );
      }
    },
    onSuccess: (data) => {
      //   toast.success('Product added successfully');
      console.log(data);
    },
    onError: (error) => {
      //   toast.error(error.message);
      console.error("Error:", error.message);
    },
  });

  const form = useForm<IAddProductForm>({
    defaultValues: {
      productName: "",
      sku: "",
      price: 0,
      quantity: 0,
      discountedPrice: 0,
      description: "",
      barcode: "",
    },

    onSubmit: async ({ value }) => {
      mutation.mutate(value);
    },
  });

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <AuthFormHeader
            title="Add a new product"
            description="Orders placed across your store"
          />
          <div className="flex items-center gap-4">
            <ButtonComponent
              className="bg-dark-text-lighter text-light-text-dark max-w-min max-h-min hover:bg-light-text-lighter hover:text-white"
              btnText={"Discard"}
            />
            <ButtonComponent
              className="bg-light-primary-hover text-light-primary max-w-min max-h-min"
              btnText={"Save"}
            />
            <ButtonComponent
              loading={mutation.isPending}
              className="max-w-min max-h-min text-nowrap"
              btnText={"Publish Product"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:flex-row">
          <div className="w-full py-4 md:w-2/3">
            <div className="flex flex-col gap-4">
              <div className="bg-foreground w-full p-8 rounded-lg shadow-lg">
                <p className="text-lg">Product Information</p>
                <div className="w-full flex flex-col gap-6 mt-6">
                  <form.Field
                    name="productName"
                    validators={{
                      onBlur: z
                        .string({
                          message: "Product name cannot be empty",
                        })
                        .min(1, "Product name cannot be empty"),
                    }}
                  >
                    {(field) => (
                      <InputComponent
                        label="Name"
                        type="text"
                        id="name"
                        value={field.state.value}
                        placeholder="Cable Wire"
                        errorMessage={field.state.meta.errors[0]}
                        currentLength={field.state.value.length}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    )}
                  </form.Field>

                  <div className="space-center flex flex-col flex-1 items-center gap-6 md:flex-row">
                    <form.Field
                      name="sku"
                      validators={{
                        onBlur: z
                          .string({
                            message: "SKU cannot be empty",
                          })
                          .min(1, "SKU cannot be empty"),
                      }}
                    >
                      {(field) => (
                        <InputComponent
                          label="SKU"
                          type="text"
                          id="sku"
                          value={field.state.value}
                          placeholder="FXSK123U"
                          errorMessage={field.state.meta.errors[0]}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      )}
                    </form.Field>
                    <form.Field
                      name="barcode"
                      validators={{
                        onBlur: z
                          .string({
                            message: "Barcode be empty",
                          })
                          .min(1, "Barcode cannot be empty"),
                      }}
                    >
                      {(field) => (
                        <InputComponent
                          label="barcode"
                          type="text"
                          id="password"
                          value={field.state.value}
                          placeholder="1234-4567-9021"
                          errorMessage={field.state.meta.errors[0]}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      )}
                    </form.Field>
                  </div>

                  {/* <form.Field
                                        name="description"
                                        // validators={{ onBlur: passwordZod }}
                                    >
                                        {field => (
                                            <EditorComponent
                                                type="text"
                                                value={field.state.value}
                                                onChange={value =>
                                                    field.handleChange(value)
                                                }
                                                label="Description"
                                                id="description"
                                                placeholder="Enter Description"
                                                errorMessage={
                                                    field.state.meta.errors[0]
                                                }
                                            />
                                        )}
                                    </form.Field> */}
                </div>
              </div>
              <div className="bg-foreground w-full p-8 rounded-lg shadow-lg">
                <p className="text-lg">Product Information</p>
                <div className="w-full flex flex-col gap-6 mt-6">
                  {/* <form.Field
                  name="productName"
                  validators={{ onBlur: emailZod }}
                >
                  {(field) => (
                    <FileUploadDropzone />
                    <InputComponent
                      label="Name"
                      type="text"
                      id="name"
                      value={field.state.value}
                      placeholder="abhiarya329@gmail.com"
                      errorMessage={field.state.meta.errors[0]}
                      currentLength={field.state.value.length}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <InputComponent
                      label="Name"
                      type="text"
                      id="name"
                      value={field.state.value}
                      placeholder="abhiarya329@gmail.com"
                      errorMessage={field.state.meta.errors[0]}
                      currentLength={field.state.value.length}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field> */}

                  {/* <div className="space-center w-full flex items-center gap-6">
                  <form.Field
                    name="password"
                    // validators={{ onBlur: passwordZod }}
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
                        className="flex-1"
                      />
                    )}
                  </form.Field>
                  <form.Field
                    name="password"
                    // validators={{ onBlur: passwordZod }}
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
                        className="flex-1"
                      />
                    )}
                  </form.Field>
                </div>

                <form.Field
                  name="password"
                  validators={{ onBlur: passwordZod }}
                >
                  {(field) => (

                    <EditorComponent
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      label="Description"
                      id="description"
                      placeholder="Enter Description"
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-10 py-4 md:w-1/3">
            <div className="flex flex-col gap-4">
              <div className="bg-foreground w-full p-8 rounded-lg shadow-lg">
                <p className="text-lg">Pricing</p>
                <div className="w-full flex flex-col gap-6 mt-6">
                  <form.Field
                    name="price"
                    validators={{
                      onBlur: z.number().min(0, "Price cannot be empty"),
                    }}
                  >
                    {(field) => (
                      <InputComponent
                        label="Price"
                        type="number"
                        id="price"
                        value={field.state.value}
                        placeholder="₹2230"
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          field.handleChange(parseInt(e.target.value));
                        }}
                      />
                    )}
                  </form.Field>
                  <form.Field
                    name="discountedPrice"
                    validators={{
                      onBlur: z.number().min(0, "Price cannot be empty"),
                    }}
                  >
                    {(field) => (
                      <InputComponent
                        label="Discounted Price"
                        type="number"
                        id="discountedPrice"
                        value={field.state.value}
                        placeholder="₹1230"
                        errorMessage={field.state.meta.errors[0]}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(parseInt(e.target.value))
                        }
                        className="flex-1"
                      />
                    )}
                  </form.Field>

                  {/* <form.Field name="remember">
                    {(field) => (
                      <CheckboxComponent
                        checked={field.state.value}
                        onCheckedChange={(checked: boolean) =>
                          field.handleChange(checked)
                        }
                        label="Charge Text on this products"
                        id="remember"
                      />
                    )}
                  </form.Field> */}
                </div>
              </div>
              <div className="bg-foreground w-full p-8 rounded-lg shadow-lg">
                <p className="text-lg">Stocks</p>
                <div className="w-full flex flex-col gap-6 mt-6">
                  <form.Field
                    name="quantity"
                    validators={{
                      onBlur: z.number().min(0, "Quantity cannot be empty"),
                    }}
                  >
                    {(field) => (
                      <InputComponent
                        label="Quantity"
                        type="number"
                        id="quantity"
                        value={field.state.value}
                        placeholder="23"
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(parseInt(e.target.value))
                        }
                      />
                    )}
                  </form.Field>
                  {/* <form.Field
                    name="password"
                    validators={{ onBlur: passwordZod }}
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
                        className="flex-1"
                      />
                    )}
                  </form.Field>

                  <form.Field name="remember">
                    {(field) => (
                      <CheckboxComponent
                        checked={field.state.value}
                        onCheckedChange={(checked: boolean) =>
                          field.handleChange(checked)
                        }
                        label="Charge Text on this products"
                        id="remember"
                      />
                    )}
                  </form.Field> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
