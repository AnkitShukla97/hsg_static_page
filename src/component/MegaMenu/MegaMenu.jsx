import MegaMenuImg from "../../assets/megamenu_img.jpg";
import "./MegaMenu.css";

const MegaMenu = () => {
  return (
    <div className="megaMenu">
      <div className="container">
        <div className="megaMenu_main">
          <img
            src={MegaMenuImg}
            alt="simple image"
            title="simple image"
            width="100%"
            height="100%"
          />
          <div className="menu_sec">
            <div>
              <h4>Title 1</h4>
              <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
              </ul>
            </div>
            <div>
              <h4>Title 2</h4>
              <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
              </ul>
            </div>
            <div>
              <h4>Title 3</h4>
              <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
