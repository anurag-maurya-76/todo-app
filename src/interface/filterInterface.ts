export type SortDir = "ASC" | "DESC";
export type SortBy = "Date" | "Name" | "Description" | "Status" | "";

export interface Filter {
  sortDir: SortDir;
  sortBy: SortBy;
  searchParamter: string;
  searchBy: "Date" | "";
}
