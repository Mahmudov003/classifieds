import "../feedback/feedback.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Main(props) {
  const array = [1, 2, 3, 4, 5];
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(
    (e) => {
      (async function () {
        try {
          const response = await axios.get(
            `http://188.225.31.249:3001/findings`,
            {
              params: {
                _page: page,
                _limit: 10,
              },
            }
          );
          setProducts(response.data);
        } catch (error) {
          console.log("error");
        }
      })();
    },
    [page]
  );

  console.log(products);
  return (
    <main className="main">
      <div className="row">
        <div className="col-product">
            {products.map((product) => {
               return <div className="card-product">
                  <img className="product-img" src={product.image} alt="product-image" />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <span>{product.tags[0]}</span>
                  <p> {product.tags[1]}</p>
               </div>
            })}
          {array.map((num) => {
            return <button onClick={(e) => setPage(num)} key={num}>{num}</button>;
          })}
        </div>
      </div>
    </main>
  );
}

export default Main;
