import { Stack } from "@mui/material";
import { category } from "../../constants";
import { collors } from "../../constants/collors";
const Category = ({ selectedCategoryHandelar, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{ borderRadius: "0" ,
          background: item.name === selectedCategory && collors.secondary,
          color: item.name === selectedCategory && '#fff'
        }}
          onClick={ () => selectedCategoryHandelar(item.name)}
        >
          <span style={{ color: item.name === selectedCategory ? '#fff' : collors.secondary 
        }}>{item.icon}</span>
          <span style={{ opacity: '1'}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
