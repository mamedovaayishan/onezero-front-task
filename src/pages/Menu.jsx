import React from "react";
import CategoryList from "../components/category/CategoryList";
import CategoryButtons from "../components/category/CategoryButtons";

const Menu = () => {



    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="d-flex row mt-4">
                        <h1>Menu</h1>
                    </div>
                    <CategoryButtons/>
                    <CategoryList/>
                </div>
            </section>
        </>
    );
};

export default Menu;
