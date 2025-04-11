type QueryParams = Record<string, unknown> & {
  search?: string;
  limit?: number;
  page?: number;
};

class FilterGenerator {
  static generateFilter(
    queryParams: QueryParams,
    defaultQueryValue: Record<string, unknown> = {},
    allowedFields: string[] = [],
    searchAllowed: string[] = []
  ) {
    const query = { ...defaultQueryValue };

    for (const field of allowedFields) {
      if (queryParams[field] !== undefined && queryParams[field] !== null) {
        query[field] = queryParams[field];
      }
    }

    // Logic to perform a case-insensitive search across multiple fields
    if (queryParams.search && searchAllowed.length) {
      const searchRegex = new RegExp(queryParams.search, "i");
      query.$or = searchAllowed.map((field) => ({ [field]: searchRegex }));
    }

    // Logic for sorting
    const sort: Record<string, -1 | 1> = {};
    const sortBy = queryParams.sortBy ?? "createdAt";
    const desc = queryParams.desc ?? true;
    sort[sortBy as string] = desc === true ? -1 : 1;

    // Logic for limit items per page
    let limit = queryParams.limit ?? 20;
    limit = Math.min(100, limit);
    limit = Math.max(1, limit);

    // Logic for page number
    const page = queryParams.page ?? 1;
    const skip = (page - 1) * limit;
    return { query, sort, skip, limit, page };
  }
}

export default FilterGenerator;
