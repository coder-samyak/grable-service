import { client } from "../../sanity/lib/client";

export { client };

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return client.fetch<T>(query, params);
}
