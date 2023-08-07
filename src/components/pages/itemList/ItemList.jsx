import { Skeleton, Stack } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "50px",
        gap: "20px",
      }}
    >
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((elemento) => (
            <Stack spacing={1} key={elemento}>
              <Skeleton variant="rounded" width={360} height={372} />
              <Skeleton variant="rectangular" width={360} height={60} />
              <Skeleton variant="rectangular" width={360} height={120} />
              <Skeleton variant="rounded" width={"28%"} height={30} />
            </Stack>
          ))}
    </section>
  );
};

export default ItemList;
