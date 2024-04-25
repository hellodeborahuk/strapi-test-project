# Backend challenge

Time estimate: 30 minutes

Time taken: 15 minutes

Learnings: `http://localhost:1337/graphql` gives helpful information when I forgot to change the Roles settings so it was quick to resolve. 

I've created a page as Single Type, but if it was multiple pages I would have used a Collection, which then if the page had a slug attribute I would have written a query that returned the page data filtered by that slug e.g. 

```graphql
  query singlePageQuery($slug:String) {
    pages(filters:{slug:{eq:$slug}}) {
      data {
        attributes {
```
