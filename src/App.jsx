import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={'¡Bienvenido a nuestra tienda online!'}/>
    </div>
  );
}
export default App;