import React, { useState, useEffect } from "react";

// conditional rendering = Returing component based on a condition

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h2>Loading......</h2>;
  } else {
    return <h2>Multiple Returns</h2>;
  }
};

export default MultipleReturns;
