import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./store/reducers";
import ProductsList from "./components/ProductsList";

function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main corner={<Cart />} />}>
            <Route index element={<ProductsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
