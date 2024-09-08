import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardText} from "react-bootstrap";
import ProductModal from "../modal/ProductModal";


const CategoryList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { filteredCategories, status, error } = useSelector(
    (state) => state.categories
  );
  if (status === "loading") {
    return <div>Yüklənir...</div>;
  }

  if (status === "failed") {
    return <div>Xəta: {error}</div>;
  }

  return (
    <>
      {filteredCategories.map((category) => (
        <section className="mt-3" key={category.id}>
          <h3>{category.name[0].value}</h3>

          <Row xs={2} md={5} className="g-3 mt-2">
            {category.menuItems.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    // height="300"
                    onClick={() => setSelectedItem({ ...item, categoryName: category.name[0]?.value })}
                    src="https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-image-square.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{item.name[0].value}</Card.Title>
                    <CardText>${item.priceSell}</CardText>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ))}
      {selectedItem && (
        <ProductModal
          show={!!selectedItem}
          onHide={() => setSelectedItem(null)}
          item={selectedItem}
        />
      )}

    </>
  );
};

export default CategoryList;
