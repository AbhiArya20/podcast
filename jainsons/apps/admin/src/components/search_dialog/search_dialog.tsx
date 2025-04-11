"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { getErrorMessage } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import InputComponent from "../modified_ui/input_component/input_component";
import CircularIcon from "../circular_icon/circular_icon";
import { useDispatch, useSelector } from "react-redux";
import { AppSliceState } from "@/redux/store";
import { setIsOpen } from "@/redux/slices/search_dialog_slice";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useRef } from "react";

export interface ISearchValue {
  search: string;
}

export function SearchDialog() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: AppSliceState) => state.searchDialog);
  const toggleSearchDialog = (value: boolean) => {
    dispatch(setIsOpen(value));
  };

  const mutation = useMutation({
    mutationFn: async (value: ISearchValue) => {
      console.log(value);

      try {
      } catch (e) {
        throw new Error(getErrorMessage(e));
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const form = useForm<ISearchValue>({
    defaultValues: {
      search: "",
    },
    onSubmit: async ({ value }) => {
      mutation.mutate(value);
    },
  });

  const searchDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: KeyboardEvent) => {
      event.preventDefault();

      if (
        !searchDialogRef.current?.contains(event.target as HTMLElement) &&
        event.ctrlKey &&
        event.key === "k"
      ) {
        dispatch(setIsOpen(true));
      } else {
        dispatch(setIsOpen(false));
      }
    };

    document.addEventListener("keydown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleClickOutside);
    };
  });

  return (
    <Dialog open={isOpen} onOpenChange={toggleSearchDialog}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent
        ref={searchDialogRef}
        className="bg-foreground text-on-foreground/90 px-4 m-0 shadow-md z-[99999]"
      >
        <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>

        <div className="flex items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="w-full"
          >
            <div className="w-full flex flex-col pr-8">
              <form.Field name="search">
                {(field) => (
                  <div className="flex items-center">
                    <Label htmlFor="search" className="text-muted-foreground">
                      <CircularIcon
                        icon="bx-search"
                        className="hover:bg-foreground"
                      />
                    </Label>
                    <InputComponent
                      type="search"
                      id="search"
                      value={field.state.value}
                      placeholder="Search..."
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="search-input px-0 ring-0 shadow-none focus:ring-0 focus:shadow-none"
                    />
                  </div>
                )}
              </form.Field>
            </div>
          </form>
        </div>

        <div className="flex gap-8 p-4">
          Will Be Implemented later
          {/* <div>
            <h2 className="text-muted-foreground mb-4 text-xs font-semibold">
              REs
            </h2>
            <div className="grid gap-2">
              <CommandItem icon={<BarChart2 className="w-4 h-4" />}>
                Analytics
              </CommandItem>
              <CommandItem icon={<Users className="w-4 h-4" />}>
                CRM
              </CommandItem>
              <CommandItem icon={<ShoppingCart className="w-4 h-4" />}>
                eCommerce
              </CommandItem>
              <CommandItem icon={<Truck className="w-4 h-4" />}>
                Logistics
              </CommandItem>
            </div>
          </div>
*/}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// function CommandItem({
//   children,
//   icon,
//   className,
// }: {
//   children: React.ReactNode
//   icon: React.ReactNode
//   className?: string
// }) {
//   return (
//     <button
//       className={cn(
//         "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted",
//         className
//       )}
//     >
//       {icon}
//       {children}
//     </button>
//   )
// }
