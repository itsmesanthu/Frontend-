import React, { useEffect, useState } from "react";
import Card from "./Card";

function Prod() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
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
  {data.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      image={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYfhVzDa4ZRHYCUfLWsJw-RWH8t2sYBDlLvgXfyYvJPpiOnDIJmI58q5yjTUuy-kM_TyIb5LXVEgzLbT3HW0ab8qcxsfd-0P6NU0N7mldLPLAszkqdsWBrLw"}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
    />
  ))}
  </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap:"wrap",
    gap:"40px",

    marginTop: "20px",
  },
};

export default Prod;