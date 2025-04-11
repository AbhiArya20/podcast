"use client";

import React from "react";

// Add Product Reviews as well
function EditProduct({ params }: { params: { productId: string } }) {
  const productId = params.productId;

  return <div className="p-4">Products: {productId}</div>;
}

export default EditProduct;
