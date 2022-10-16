import { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="pictureVariants">
          <img
            className="pictureVariant"
            src="https://avatars.mds.yandex.net/i?id=85feb96d25741cfcc1f50c7364ae782c-5468635-images-thumbs&n=13"
            alt="alt"
          />
          <img
            className="pictureVariant"
            src="https://avatars.mds.yandex.net/i?id=85feb96d25741cfcc1f50c7364ae782c-5468635-images-thumbs&n=13"
            alt="alt"
          />
          <img
            className="pictureVariant"
            src="https://avatars.mds.yandex.net/i?id=85feb96d25741cfcc1f50c7364ae782c-5468635-images-thumbs&n=13"
            alt="alt"
          />
        </div>

        <div className="mainePicture">
          <img
            className="picture"
            src="https://avatars.mds.yandex.net/i?id=85feb96d25741cfcc1f50c7364ae782c-5468635-images-thumbs&n=13"
            alt="alt"
          />
        </div>

        <div className="productInfo">
          <div className="titleContainer">
            <p className="productTitle">Title</p>
            <p className="subTitle"> sub Title</p>
          </div>

          <div className="sizeContainer">
            <p className="sizeTitle">Size</p>
            <div className="sizeOutput">
              <p tabIndex={0} className="sizeBox">
                S
              </p>
              <p tabIndex={0} className="sizeBox">
                S
              </p>
              <p tabIndex={0} className="sizeBox">
                S
              </p>
            </div>
          </div>

          <div className="colorContainer">
            <p className="colorTitle">Color</p>
            <div className="colorOutput">
              <p tabIndex={0} className="colorBox">
                red
              </p>
              <p tabIndex={0} className="colorBox">
                black
              </p>
              <p tabIndex={0} className="colorBox">
                Yellow
              </p>
            </div>
          </div>

          <div className="priceComtainer">
            <p className="priceTitle">Price</p>

            <p className="priceValue">value</p>
          </div>

          <button className="addButton">
            <p className="buttonText">Add to Cart</p>
          </button>

          <div className="decription">
            <p className="descriptionText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              repellat recusandae voluptatem suscipit ut Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Non repellat recusandae
              voluptatem suscipit ut Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non repellat recusandae voluptatem suscipit ut
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
