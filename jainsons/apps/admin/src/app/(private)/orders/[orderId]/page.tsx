"use client";
import React from "react";

function Order({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId;

  return <div className="p-4">Orders: {orderId}</div>;
}

export default Order;
