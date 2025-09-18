type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions extends RequestInit {
  data?: Record<string, unknown>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function fetchApi(
  endpoint: string,
  method: RequestMethod = "GET",
  options: FetchOptions = {}
) {
  const {data, headers = {}, ...rest} = options;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText);
  }

  const contentType = response.headers.get("Content-Type");
  if (!contentType || !contentType.includes("application/json")) {
    return null;
  }

  const result = await response.json();
  return result;
}

export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    fetchApi(endpoint, "GET", options) as Promise<T>,

  post: <T>(endpoint: string, options?: FetchOptions) =>
    fetchApi(endpoint, "POST", options) as Promise<T>,

  put: <T>(endpoint: string, options?: FetchOptions) =>
    fetchApi(endpoint, "PUT", options) as Promise<T>,

  delete: <T>(endpoint: string, options?: FetchOptions) =>
    fetchApi(endpoint, "DELETE", options) as Promise<T>,

  patch: <T>(endpoint: string, options?: FetchOptions) =>
    fetchApi(endpoint, "PATCH", options) as Promise<T>,
};
