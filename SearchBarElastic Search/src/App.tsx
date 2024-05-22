import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import React from "react";
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  WithSearch
} from "@elastic/react-search-ui";
import {
  BooleanFacet,
  Layout,
  SingleLinksFacet,
  SingleSelectFacet
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { SearchDriverOptions } from "@elastic/search-ui";

const connector = new AppSearchAPIConnector({
  searchKey: "search-hd9p2q8wg63724pqhis34ce7",
  engineName: "ecommerce",
  endpointBase: "http://localhost:3002",
});
const config: SearchDriverOptions = {
  alwaysSearchOnInitialLoad: true,
  apiConnector: connector,
  hasA11yNotifications: true,
  searchQuery: {
    result_fields: {
      title: { 
        snippet: {
          fallback: true
        }
      },
      description: {
        snippet: {
          fallback: true
        }
      },
      brand:{
        snippet:{
          fallback: true
        }
      },
      type:{
        snippet:{
          fallback: true
        }
      },
      category:{ raw: {} },
      rating:{ raw: {} },
      sale_price:{ raw: {} },
      market_price:{ raw: {} },
      sub_category:{raw: {}}


    },
    search_fields: {
      title: {
        weight: 5
      },
      description: {},
      brand: {},
      type: {},
      sub_category: {}
    },
    disjunctiveFacets: ["category"],
    facets: {
      category: {type: "value", size: 30},
      rating:{
        type: "range",
        ranges: [
          {from: -1, name: "Any"},
          {from: 0, to: 1 , name: "1 star" },
          {from: 1.1, to: 2, name:"2 star"},
          {from: 2.1, to: 3, name:"3 star" },
          {from:3.1, to: 4, name:"4 star"},
          {from: 4.1, name:"4 star and above"}
        ]
      },
      sale_price:{
        type: "range",
        ranges: [
          {from: -1, name: "Any"},
          {from: 0, to: 100, name: "0-100"},
          {from: 101, to: 200, name: "101-200"},
          {from: 201, to: 300, name: "201-300"},
          {from: 301, to: 400, name: "301-400"},
          {from: 401, to:500, name: "401-500"},
          {from: 501, name: "500 and above"}
        ]
      }
    }
  }
};
export default function App() {
  return (
    <SearchProvider config={config}>
      <WithSearch
        mapContextToProps={({ wasSearched }) => ({
          wasSearched
        })}
      >
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={<SearchBox debounceLength={0} />}
                  sideContent={
                    <div>
                      <Facet
                        field="category"
                        label="Category"
                        isFilterable={true}
                      />
                      <Facet
                        field="rating"
                        label="Rating"
                        // view={SingleSelectFacet}
                        isFilterable={true}
                      />
                      <Facet
                        field="sale_price"
                        label="Sale Price"
                        isFilterable={true}
                      />

                    </div>
                  }
                  bodyContent={
                    <Results
                      titleField="title"
                      shouldTrackClickThrough
                    />
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}

