// GROQ queries (plain strings; add `defineQuery` + typegen in Phase 2 if desired).
export const blogPostsQuery = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, publishedAt,
  "author": author->name
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, body,
  "author": author->{name, "slug": slug.current}
}`;

export const caseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(_createdAt desc){
  _id, title, "slug": slug.current, client, industry, summary
}`;

export const whitepapersQuery = `*[_type == "whitepaper" && defined(slug.current)] | order(_createdAt desc){
  _id, title, "slug": slug.current, summary
}`;
