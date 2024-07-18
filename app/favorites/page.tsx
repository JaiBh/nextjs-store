import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text="You have no favorites yet"></SectionTitle>;
  return (
    <div>
      <SectionTitle text="favorites"></SectionTitle>
      <ProductsGrid
        products={favorites.map((fav) => fav.product)}
      ></ProductsGrid>
    </div>
  );
}
export default FavoritesPage;
