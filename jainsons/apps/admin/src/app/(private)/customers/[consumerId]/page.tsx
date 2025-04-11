"use client";

import React from "react";

function Customers({ params }: { params: { consumerId: string } }) {
  const consumerId = params.consumerId;
  return <div className="p-4">Consumers: {consumerId}</div>;
}

export default Customers;
