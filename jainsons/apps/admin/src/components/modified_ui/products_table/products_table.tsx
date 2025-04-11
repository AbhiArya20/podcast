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
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getProducts } from "@/https/http";

interface Product {
  _id: string;
  productName: string;
  description: string;
  category: string;
  active: boolean;
  sku: string;
  price: number;
  quantity: number;
  status: "Inactive" | "Scheduled" | "Publish";
  image: string;
}

// const getStatusBadge = (status: Product["status"]) => {
//   const variants = {
//     Inactive: "destructive",
//     Scheduled: "warning",
//     Publish: "success",
//   } as const;

//   return <Badge variant={variants[status]}>{status}</Badge>;
// };

export default function ProductTable() {
  const { data } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await getProducts();
      return response.data?.data?.products as Product[];
    },
  });

  return (
    <div className="bg-foreground w-full p-4 rounded-lg shadow-md">
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
                    <Image
                      src={"/images/smartphone-1.png"}
                      alt={product.image}
                      fill
                      className="object-cover rounded-md"
                    />
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
              <TableCell>{/* <Switch checked={product.active} /> */}</TableCell>
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
  );
}
