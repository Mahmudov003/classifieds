import "../products/feedback.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

let timer;
function Main(props) {
  const array = [1, 2, 3, 4, 5];
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [topilmalar, setTopilmalar] = useState("topdim");
  useEffect(() => {
    axios
      .get(`http://188.225.31.249:3001/findings`, {
        params: {
          _page: page,
          _limit: 10,
          q: search,
          type: topilmalar,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        alert("Serverdan ma'lumot kelmadi...");
      });
  }, [page, search, topilmalar]);

  function searchProducts(e) {
    clearInterval(timer);
    timer = setTimeout(() => {
      setSearch(e.target.value);
    }, 800);
  }

  function topilmalarFunction(e) {
    setTopilmalar(e.target.value);
  }

  return (
    <main className="main">
      <div className="row">
        <div className="col-product">
          <div className="search-products">
            <form action="">
              <input
                onChange={searchProducts}
                id="search-products-input"
                type="text"
                placeholder="Qidirilyotgan buyum"
              />
            </form>
            <button className="finding-btn" value={"topdim"} onClick={topilmalarFunction}>
              Topilmalar
            </button>
            <button className="finding-btn" value={"yoqotdim"} onClick={topilmalarFunction}>Yoqotilmalar</button>
          </div>
          <div>
            {products.map((product) => {
              if (topilmalar== "") {
                console.log("top");
                return (
                  <div className="card-product" key={product.id}>
                    <img
                      className="product-img"
                      src={product.image}
                      alt="product"
                    />
                    <h3 className="product-title">{product.title}</h3>
                    <p>{product.description}</p>
                    <span>{product.tags[0]}</span> &nbsp;
                    <span>{product.tags[1]}</span>
                    <p>{product.type}</p>
                  </div>
                );
              }
              
              return (
                <div className="card-product" key={product.id}>
                  <img
                    className="product-img"
                    src={product.image}
                    alt="product"
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <p>{product.description}</p>
                  <span>{product.tags[0]}</span> &nbsp;
                  <span>{product.tags[1]}</span>
                  <b>{product.type}</b>
                </div>
              );
            })}
          </div>
          {array.map((num) => {
            return (
              <button className="page-btn" onClick={(e) => setPage(num)} key={num}>
                {num}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Main;
