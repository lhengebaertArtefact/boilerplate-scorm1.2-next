import DisplayItems from "../../components/DisplayItems";

export async function generateStaticParams() {
  const items = ["i1", "i2"]; // Les identifiants d'items à pré-générer

  return items.map((itemsId) => ({
    itemsId, // La clé doit correspondre au paramètre dynamique dans votre route [itemsId]
  }));
}

interface ItemPageProps {
  params: {
    itemsId: string;
  };
}

export default function ItemPage({ params }: ItemPageProps) {
  const { itemsId } = params;
  console.log("itemsId :", itemsId);

  return (
    <div>
      <DisplayItems initialItemId={itemsId} />
    </div>
  );
}
