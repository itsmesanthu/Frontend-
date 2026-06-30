import React, { useEffect, useState } from "react";
import Card from "./Card";

function Prod() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/1"
        );
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.log("Error while fetching:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={styles.cardContainer}>
        {data && (
          <Card
            id={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
            category={data.category}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};

export default Prod;