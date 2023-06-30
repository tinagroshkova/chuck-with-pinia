import {SITE_URL} from "@/utils/constants";
import { useCategoriesStore } from "@/stores/CategoriesStore";
export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      return jsonData;
    }
  } catch (error) {
    return null;
  }
}
async function fetchCategories() {
  const categoriesStore = useCategoriesStore();
  const jsonData = await fetchData(`${SITE_URL}/categories`);
  categoriesStore.categories.push(...jsonData);
}

export { fetchCategories }