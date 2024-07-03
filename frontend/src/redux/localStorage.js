// localStorage.js

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      auth: state.auth,
      productList: state.productList,
      products: state.products,
      cart: state.cart,
      orders: state.orders,
      orderDetails: state.orderDetails,
      // Ajoutez d'autres parties de l'état ici si nécessaire
    });
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};
