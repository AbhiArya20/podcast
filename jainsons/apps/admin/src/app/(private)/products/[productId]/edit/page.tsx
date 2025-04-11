"use client";

import React from "react";

function EditProduct({ params }: { params: { productId: string } }) {
  const productId = params.productId;

  return <div className="p-4">Products: {productId}</div>;
}

export default EditProduct;
