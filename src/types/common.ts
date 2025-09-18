export type NavItem = {
  label: string;
  href: string;
  slug: string;
  onClick?: () => void;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type ApiPostsResponse<T> = {
  pagination: Pagination;
  posts: T[];
};

export type ApiPostResponse<T> = {
  meta: Pagination;
  post: T;
};
