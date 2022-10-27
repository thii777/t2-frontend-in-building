import BasicAppBar from "../components/organims/headers/basicHeader";
import BasicBackground from "../components/organims/background/basicBackground";
import BasicTitle from "../components/organims/cards/titles";
import ProductsAndServices from "../components/molecules/productsAndServices";
import Vantagens from "../components/molecules/vantagens";

export default function Main() {
  return (
    <div>
      <BasicAppBar />
      <BasicBackground />
      <BasicTitle value="Produtos e Serviços" />
      <ProductsAndServices />
      <BasicTitle value="Vantagens" />
      <Vantagens />
    </div>
  );
}
