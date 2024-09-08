import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCategories,filterByCategory,} from "../../features/categoriesSlice";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CategoryButtons = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Yüklənir...</div>;
  }

  if (status === "failed") {
    return <div>Xəta: {error}</div>;
  }
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory(category));
  };

  return (
    <div>
      <Row xs="auto" className="mt-2 g-4 mb-3">
        <Col>
          <Button
            onClick={() => handleCategoryClick("all")}
            color="gray"
            size="lg"
            variant={selectedCategory === "all" ? "dark" : "outline-dark"}
          >
            All
          </Button>
        </Col>
        {categories.map((category) => (
          <Col>
            <Button
              key={category}
              onClick={() => handleCategoryClick(category.name[0].value)}
              color="gray"
              size="lg"
              variant={selectedCategory === category.name[0].value ? "dark" : "outline-dark"}
            >
              {category.name[0].value}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryButtons;
