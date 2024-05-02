# [ReactJS Image Zoom](https://www.npmjs.com/package/reactjs-image-zoom)

[![GitHub license](https://img.shields.io/npm/l/reactjs-image-zoom.svg?style=plastic)]() [![Version](https://img.shields.io/npm/v/reactjs-image-zoom)](https://www.npmjs.com/package/reactjs-image-zoom)
[![Downloads](https://img.shields.io/npm/dw/reactjs-image-zoom?style=plastic)](http://www.npmtrends.com/reactjs-image-zoom)
![Badge gzip size](https://img.shields.io/bundlephobia/min/reactjs-image-zoom)

### Preview :

![Preview](https://res.cloudinary.com/dacp0r5b7/image/upload/v1662852808/icons/github/2022-09-11_04-00-44_2_lvttwg.gif)

## Getting Started

### **Installation**

```sh
   npm install reactjs-image-zoom
```

```sh
   yarn add reactjs-image-zoom
```

### Simple Example

```tsx
<Zoom imgsrc={Bannerimg} />
```

This will include default properties of the Component and renders.

### Usage

```jsx
// import "./App.css";
import Zoom from "reactjs-image-zoom";
import Image from "./assets/imgs/nws.png";

function App() {
    return (
        <Zoom
            width={150} // width in percent default is 100%
            height={500} // height of the box
            maxwidth={500} // width of the box
            repeat="repeat" // default is no-repeat
            position="center" // cover
            imagesrc={Image} // Image component | URL
            size={200} // it is in percent
            bgsize="cover" // background-size
            cursor="zoom-in" // pointer
            borderpixel={2} // size of border
            bordercolor="red" // color of border
            style={{ margin: "20px" }} // add custom style
            className="img-box" // classname for box
            color="red" // color when image not loaded
        />
    );
}
```

<!-- [Live examples](https://lyef.github.io/lyef-counter) -->

### If you know about default values 👍

| key         | Value       | Guide / What they does      |
| ----------- | ----------- | --------------------------- |
| imgsrc      | default url | source of Image             |
| height      | 400         | height 400px                |
| width       | 100         | width 100%                  |
| maxwidth    | 400         | Width of container          |
| repeat      | no-repeat   | css bg-repeat property      |
| position    | center      | css position property       |
| bgsize      | cover       | css bg property             |
| size        | 100         | How zoomed image should be? |
| cursor      | zoom-in     | css cursor property         |
| borderpixel | 1           | border width                |
| color       | #8f8f8f     | Color of container          |
| bordercolor | #ddd        | Color of border             |

## Architecture

We've developed this component for easy implementation of multiple component images in react application as you have seen in different ecommerse website that they are using for viewing this product.

To know more about the architecture or if you want to contribute with this component: [Contributing Documentation](https://github.com/neeswebservices/reactjs-image-zoom/graphs/contributors).

### License

[MIT License](https://github.com/neeswebservices/reactjs-image-zoom/master/LICENSE.md) @ [neeswebservices](https://nischal-dahal.com.np/)
