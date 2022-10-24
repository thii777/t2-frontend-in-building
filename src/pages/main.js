import BasicAppBar from "../components/organims/headers/basicHeader";
import BasicBackground from "../components/organims/background/basicBackground";
import BasicTitle from "../components/organims/cards/titles";
import Card from "../components/organims/cards/basicCard";

export default function Main() {
  return (
    <div>
      <BasicAppBar />
      <BasicBackground />
      <BasicTitle value="Produtos e Serviços" />
      <Card
        subTitle="Cartão consignado"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
        buttonValue="Peça já o seu"
      />

      <Card
        subTitle="Crédito consignado"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
        buttonValue="Simule agora"
      />

      <Card
        subTitle="Antecipação saque aniversario FGTS"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
        buttonValue="Confira aqui"
      />
    </div>
  );
}
