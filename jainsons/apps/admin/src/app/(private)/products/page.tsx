"use client";
import * as React from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Badge } from "@/components/ui/badge";
// import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MoreVertical,
  ArrowUpDown,
  Pencil,
  // Laptop,
  // Home,
  // Headphones,
  // ShoppingBag,
  // Clock,
} from "lucide-react";
// import Image from "next/image";

import { StatisticCard13 } from "@/components/modified_ui/statistic_card/statistic_card";

import Heading5 from "@/components/typography_components/heading_5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputComponent from "@/components/modified_ui/input_component/input_component";
import ButtonComponent from "@/components/button_component/button_component";
import { Separator } from "@/components/ui/separator";

// interface Product {
//   _id: string;
//   productName: string;
//   description: string;
//   category: string;
//   active: boolean;
//   sku: string;
//   price: number;
//   quantity: number;
//   status: "Inactive" | "Scheduled" | "Publish";
//   image: string;
// }

// const getStatusBadge = (status: Product["status"]) => {
//   const variants = {
//     Inactive: "destructive",
//     Scheduled: "warning",
//     Publish: "success",
//   } as const;

//   return <Badge variant={variants[status]}>{status}</Badge>;
// };

const data = [
  {
    _id: "1",
    productName: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    active: true,
    sku: "ABC123",
    price: 100,
    quantity: 100,
    status: "Publish",
    image: "/images/product1.jpg",
  },
  {
    _id: "1",
    productName: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    active: true,
    sku: "ABC123",
    price: 100,
    quantity: 100,
    status: "Publish",
    image: "/images/product1.jpg",
  },
  {
    _id: "1",
    productName: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    active: true,
    sku: "ABC123",
    price: 100,
    quantity: 100,
    status: "Publish",
    image: "/images/product1.jpg",
  },
  {
    _id: "1",
    productName: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    active: true,
    sku: "ABC123",
    price: 100,
    quantity: 100,
    status: "Publish",
    image: "/images/product1.jpg",
  },
  {
    _id: "1",
    productName: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    active: true,
    sku: "ABC123",
    price: 100,
    quantity: 100,
    status: "Publish",
    image: "/images/product1.jpg",
  },
];

export default function ProductTable() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="min-h-20 w-full flex flex-col gap-4 xl:flex-row">
        <div className="min-w-full min-h-full flex flex-col gap-4 md:flex-row md:gap-0 xl:w-2/3">
          <StatisticCard13
            icon="bxl-gmail"
            title="Order Received"
            value={1234}
            valueSuffix="k"
            // chart={<BarChartComponent />}
            className="border-on-foreground/10 md:rounded-e-none md:border-e"
          />
          <StatisticCard13
            icon="bxl-gmail"
            title="Order Received"
            value={1234}
            valueSuffix="k"
            // chart={<BarChartComponent />}
            className="border-on-foreground/10 md:rounded-r-none md:rounded-l-none md:border-e"
          />
          <StatisticCard13
            icon="bxl-gmail"
            title="Order Received"
            value={1234}
            valueSuffix="k"
            // chart={<BarChartComponent />}
            className="border-on-foreground/10 md:rounded-r-none md:rounded-l-none md:border-e"
          />
          <StatisticCard13
            icon="bxl-gmail"
            title="Order Received"
            value={1234}
            valueSuffix="k"
            // chart={<BarChartComponent />}
            className="md:rounded-s-none"
          />
        </div>
      </div>

      <div className="bg-foreground w-full flex flex-col gap-4 p-4 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col xl:flex-row">
            <div className="w-full min-h-full flex">
              <Heading5 text="Filter" />
            </div>
            <div className="w-full flex flex-col gap-4 md:flex-row">
              <Select>
                <SelectTrigger
                  className={`shadow-sm group data-[state="open"]:placeholder:transition-all data-[state="open"]:placeholder:duration-300 text-on-foreground bg-foreground data-[state="open"]:placeholder:text-[0.9375rem] placeholder:leading-[1.5rem] text-[0.9375rem] leading-[1.5rem] data-[state="open"]:placeholder:ease-out data-[state="open"]:placeholder:translate-x-[3px] rounded-md w-full px-[14px] py-[7px] border-gray-300 dark:border-slate-600 autofill:bg-foreground autofill:dark:bg-foreground focus:border-input border-[2px] focus:ring-0 data-[state="open"]:border-primary data-[state="open"]:shadow-sm  data-[state="open"]:shadow-primary`}
                >
                  <SelectValue
                    className="text-on-foreground/90 group-data-[state='open']:placeholder:transition-all group-data-[state='open']:placeholder:duration-300 group-data-[state='open']:placeholder:text-muted-foreground group-data-[state='open']:placeholder:ease-out group-data-[state='open']:placeholder:translate-x-[3px] group-data-[state='open']:placeholder:opacity-90"
                    placeholder="Status"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Schedule</SelectItem>
                    <SelectItem value="banana">Publish</SelectItem>
                    <SelectItem value="blueberry">Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className={`shadow-sm group data-[state="open"]:placeholder:transition-all data-[state="open"]:placeholder:duration-300 text-on-foreground bg-foreground data-[state="open"]:placeholder:text-[0.9375rem] placeholder:leading-[1.5rem] text-[0.9375rem] leading-[1.5rem] data-[state="open"]:placeholder:ease-out data-[state="open"]:placeholder:translate-x-[3px] rounded-md w-full px-[14px] py-[7px] border-gray-300 dark:border-slate-600 autofill:bg-foreground autofill:dark:bg-foreground focus:border-input border-[2px] focus:ring-0 data-[state="open"]:border-primary data-[state="open"]:shadow-sm  data-[state="open"]:shadow-primary`}
                >
                  <SelectValue
                    className="text-on-foreground/90 group-data-[state='open']:placeholder:transition-all group-data-[state='open']:placeholder:duration-300 group-data-[state='open']:placeholder:text-muted-foreground group-data-[state='open']:placeholder:ease-out group-data-[state='open']:placeholder:translate-x-[3px] group-data-[state='open']:placeholder:opacity-90"
                    placeholder="Categories"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Cable</SelectItem>
                    <SelectItem value="banana">Wire</SelectItem>
                    <SelectItem value="blueberry">Switch</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className={`shadow-sm group data-[state="open"]:placeholder:transition-all data-[state="open"]:placeholder:duration-300 text-on-foreground bg-foreground data-[state="open"]:placeholder:text-[0.9375rem] placeholder:leading-[1.5rem] text-[0.9375rem] leading-[1.5rem] data-[state="open"]:placeholder:ease-out data-[state="open"]:placeholder:translate-x-[3px] rounded-md w-full px-[14px] py-[7px] border-gray-300 dark:border-slate-600 autofill:bg-foreground autofill:dark:bg-foreground focus:border-input border-[2px] focus:ring-0 data-[state="open"]:border-primary data-[state="open"]:shadow-sm  data-[state="open"]:shadow-primary`}
                >
                  <SelectValue
                    className="text-on-foreground/90 group-data-[state='open']:placeholder:transition-all group-data-[state='open']:placeholder:duration-300 group-data-[state='open']:placeholder:text-muted-foreground group-data-[state='open']:placeholder:ease-out group-data-[state='open']:placeholder:translate-x-[3px] group-data-[state='open']:placeholder:opacity-90"
                    placeholder="Out of Stock"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">In Stock</SelectItem>
                    <SelectItem value="banana">Out of Stock</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className="w-full flex flex-col gap-4 md:flex-row">
            <div className="w-full flex justify-between gap-4 md:flex-row">
              <InputComponent
                id="search-product"
                placeholder="Search Product"
                className="max-w-72"
              />
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger
                    className={`shadow-sm group data-[state="open"]:placeholder:transition-all data-[state="open"]:placeholder:duration-300 text-on-foreground bg-foreground data-[state="open"]:placeholder:text-[0.9375rem] placeholder:leading-[1.5rem] text-[0.9375rem] leading-[1.5rem] data-[state="open"]:placeholder:ease-out data-[state="open"]:placeholder:translate-x-[3px] rounded-md w-full px-[14px] py-[7px] border-gray-300 dark:border-slate-600 autofill:bg-foreground autofill:dark:bg-foreground focus:border-input border-[2px] focus:ring-0 data-[state="open"]:border-primary data-[state="open"]:shadow-sm  data-[state="open"]:shadow-primary`}
                  >
                    <SelectValue
                      className="text-on-foreground/90 group-data-[state='open']:placeholder:transition-all group-data-[state='open']:placeholder:duration-300 group-data-[state='open']:placeholder:text-muted-foreground group-data-[state='open']:placeholder:ease-out group-data-[state='open']:placeholder:translate-x-[3px] group-data-[state='open']:placeholder:opacity-90"
                      placeholder="25"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">5</SelectItem>
                      <SelectItem value="banana">10</SelectItem>
                      <SelectItem value="blueberry">20</SelectItem>
                      <SelectItem value="grapes">25</SelectItem>
                      <SelectItem value="pineapple">50</SelectItem>
                      <SelectItem value="pineapple">100</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <ButtonComponent btnText="Export" />
                <ButtonComponent btnText="+ Add Product" />
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <br />
        <br />
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-foreground">
              <TableHead className="min-w-[200px]">
                PRODUCT
                <ArrowUpDown className="w-4 h-4 inline ml-2" />
              </TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead className="w-[100px]">STOCK</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>QTY</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className="text-right">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((product) => (
              <TableRow
                key={product._id}
                className="rounded-lg cursor-pointer dark:hover:bg-gray-600/40 hover:bg-gray-200/60"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative">
                      {/* <Image
                        src={"/images/smartphone-1.png"}
                        alt={product.image}
                        fill
                        className="object-cover rounded-md"
                      /> */}
                    </div>
                    <div>
                      <div className="text-on-foreground font-medium">
                        {product.productName}
                      </div>
                      <div className="text-on-foreground/60 text-sm">
                        {product.description}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* {getCategoryIcon(product.category)} */}
                    <span>{product.category}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {/* <Switch checked={product.active} />
                   */}
                  200
                </TableCell>
                <TableCell className="text-on-foreground uppercase">
                  {product.sku}
                </TableCell>
                <TableCell className="text-on-foreground">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-on-foreground">
                  {product.quantity}
                </TableCell>
                <TableCell className="text-on-foreground">
                  {/* {getStatusBadge(product.status)} */}
                </TableCell>
                <TableCell className="text-on-foreground text-right">
                  <div className="flex justify-end items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* 
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
  </div> */}

      <br />
      <br />
    </div>
  );
}
