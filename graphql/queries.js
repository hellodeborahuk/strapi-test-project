`query singlePageQuery {
    page {
      data {
        attributes {
          PageContent {
            __typename
            ...on ComponentComponentsContent {
              Title
              description
              Image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                } 
              }
              Disabled
            }
          }
        }
      }
    }
  }`