export type NavItem = {
  label: string;
  href: string;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type ApiListResponse<T> = {
  pagination: Pagination;
  posts: T[];
};
