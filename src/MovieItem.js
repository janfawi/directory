import MoviesList from "./MoviesList";

import { ProductWrapper } from "./styles";
// import DeleteButton from "./buttons/DeleteButton";
const MoviesItem = (movie) => {
  return (
    <ProductWrapper>
      <img
        alt={movie.title}
        src={movie.image}
        // onClick={() => setProduct(product)}
      />
      <p>{movie.title}</p>
      {/* <p className="product-price">{product.price} KD</p> */}
      {/* <DeleteButton handleDelete={handleDelete} productId={product.id} /> */}
    </ProductWrapper>
  );
};

export default MoviesItem;
