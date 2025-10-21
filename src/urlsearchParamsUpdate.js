import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback } from "react";

// Custom hook for updating URL parameters without page reload
export const useUpdateURLParams = () => {
  // Get the 'navigate' function from 'useNavigate' hook to navigate programmatically
  const navigate = useNavigate();

  // Get the current search parameters and a function to update them
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to update the URL parameters
  const updateURLParams = useCallback(
    (newParams) => {
      // Create a new instance of URLSearchParams with the current search parameters
      const updatedParams = new URLSearchParams(searchParams);

      // Loop through the new parameters and update the 'updatedParams' object
      Object.entries(newParams).forEach(([key, value]) => {
        // If the value is 'null', delete the key from the parameters
        if (value === null || value === "" || value === undefined) {
          updatedParams.delete(key);
        } else {
          // Otherwise, set the key with the new value
          updatedParams.set(key, value);
        }
      });
      // Navigate to the new URL with the updated search parameters and
      // set 'replace' to 'true' to prevent a full page reload
      navigate(`?${updatedParams.toString()}`, { replace: true });
    },
    [navigate, searchParams]
  ); // Add 'navigate' and 'searchParams' to the dependency array

  // Return the 'updateURLParams' function
  return { updateURLParams };
};
