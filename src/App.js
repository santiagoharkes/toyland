import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as productsActions from "redux/products/productsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;
