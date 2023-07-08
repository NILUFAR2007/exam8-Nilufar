import axios from "axios";
import { Component } from "react";
import "./products.css";

type TProduct = {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  thumbnail: string;
  title: string;
  price: number;
}[];

interface ProductsState {
  products: TProduct;
}
export default class Products extends Component<{}, ProductsState> {
  state: ProductsState = {
    products: [],
  };

  async componentDidMount() {
    const getMovies = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        const data = await res.data;
        const products = await data.products;

        console.log("products  => ", products);
        this.setState({ products });
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }
  render() {
    const { products } = this.state;
    return (
      <>
         <div className="productfor">
          
        <section className="sc-bqyKva ehfErK">
          <div className="btn-container">
            <button type="button" className="active">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button type="button" className="null">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <p>22 products found</p>
          <form>
            <label htmlFor="sort">sort by</label>
            <select name="sort" id="sort" className="sort-input">
              <option value="price-lowest">price (lowest)</option>
              <option value="price-highest">price (highest)</option>
              <option value="name-a">name (a-z)</option>
              <option value="name-z">name (z-a)</option>
            </select>
          </form>
        </section>
 
       <div className="products-container">
        {products.map((product) => {
          return (
            <article key={product.id} className="sc-bdfBwQ cIKpxU">
              <div className="container">
                <img src={product.thumbnail} alt="modern bookshelf" />
                <a className="link" href="/products/recoAJYUCuEKxcPSr">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </a>
              </div>
              <footer>
                <h5> {product.title} </h5>
                <p>$ {product.price}</p>
              </footer>
            </article>
          );
        })}
        </div>
         </div>
      </>
    );
  }
}
