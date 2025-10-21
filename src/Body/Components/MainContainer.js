import "./MainContainer.css";
import ProductItems from "./ProductItems";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

function MainContainer(props) {
  const mpcartvaluehandler = (x, name, amt, img) => {
    props.bmpcartvalue(x, name, amt, img);
  };

  return (
    <div className="MainItemContainer">
      <div className="itemcotainer">
        <div className="ProductHeading">
          <h2>Fresh Vegetables</h2>
          <div className="Productheadingsidenote">
            <a href="#" className="Vewmore">
              <span>View more</span>
              <div className="leftarrow">
                <span>
                  <FiChevronRight size="12px" color="#C14086" />
                </span>
              </div>
            </a>
            <button className="viewbutton">
              <span>
                <FiChevronLeft size="20px" color="Grey" />
              </span>
            </button>
            <button className="viewbutton">
              <span>
                <FiChevronRight size="20px" color="Grey" />
              </span>
            </button>
          </div>
        </div>
        <div className="ProductContainer">
          <ProductItems name="Veg" mpcartvalue={mpcartvaluehandler} />
        </div>
      </div>
      <div className="itemcotainer">
        <div className="ProductHeading">
          <h2>Fruits</h2>
          <div className="Productheadingsidenote">
            <a href="#" className="Vewmore">
              <span>View more</span>
              <div className="leftarrow">
                <span>
                  <FiChevronRight size="12px" color="#C14086" />
                </span>
              </div>
            </a>
            <button className="viewbutton">
              <span>
                <FiChevronLeft size="20px" color="Grey" />
              </span>
            </button>
            <button className="viewbutton">
              <span>
                <FiChevronRight size="20px" color="Grey" />
              </span>
            </button>
          </div>
        </div>
        <ProductItems name="Fruits" mpcartvalue={mpcartvaluehandler} />
      </div>
    </div>
  );
}
export default MainContainer;
