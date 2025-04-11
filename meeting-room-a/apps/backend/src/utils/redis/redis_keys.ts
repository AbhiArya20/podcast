class RedisKeys {
  public static getRateLimiterKey(keySeparator: string, area?: string) {
    return `ratelimit:${keySeparator}:${area ?? "root"}`;
  }
  public static getUserKey(_id?: string) {
    return `user:${_id}`;
  }
  public static getUserStatusKey(_id?: string) {
    return `user:status:${_id}`;
  }
  public static getAddressKey(_id?: string) {
    return `address:${_id}`;
  }
  public static getCartKey(_id?: string) {
    return `cart:${_id}`;
  }
  public static getCategoryKey(_id?: string) {
    return `category:${_id}`;
  }
  public static getCollectionKey(_id?: string) {
    return `collection:${_id}`;
  }
  public static getOrderKey(_id?: string) {
    return `order:${_id}`;
  }
  public static getProductKey(_id?: string) {
    return `product:${_id}`;
  }
  public static getReviewKey(_id?: string) {
    return `review:${_id}`;
  }
  public static getVendorKey(_id?: string) {
    return `vendor:${_id}`;
  }
  public static getWishlistKey(_id?: string) {
    return `wishlist:${_id}`;
  }
}
export default RedisKeys;
