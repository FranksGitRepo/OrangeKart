import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useURLSearchParams = () => {
  // Use the useLocation hook to get the current location object
  const location = useLocation();

  // Create a state variable for the search parameters
  const [searchParams, setSearchParams] = useState({});

  // Create a helper function to parse the search parameters and update the state
  const parseSearchParams = () => {
    const urlSearchParams = new URLSearchParams(location.search);
    const newSearchParams = {};
    for (const [key, value] of urlSearchParams.entries()) {
      newSearchParams[key] = value;
    }
    // Update the url params state
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    // Parse the initial search parameters and set the initial state
    parseSearchParams();

    // Add a dependency on location.search to update the search parameters when the location changes
    // Parse the new search parameters and update the state
    return () => {};
  }, [location.search]);

  // Return the search parameters
  return searchParams;
};
