import React, { useEffect, useState } from "react";
import "./style.css";

import img1 from "../../../assets/images/thumbnail-1.jpg";
import img2 from "../../../assets/images/thumbnail-1.jpg";
import img3 from "../../../assets/images/thumbnail-1.jpg";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import topData from "../../../data/topdata";

const TopProducts = (props) => {
  // console.log(props.)

  const [data, setData] = useState([]);
  useEffect(() => {
    if (Number.parseInt(props.id) == 0) {
      setData(topData.TopSelling);
    } else if (Number.parseInt(props.id) == 1) {
      setData(topData.TrendingProducts);
    } else if (Number.parseInt(props.id) == 2) {
      setData(topData.Recentlyadded);
    } else if (Number.parseInt(props.id) == 3) {
      setData(topData.TopRated);
    }
  }, [props.id]);

  // con
  // useEffect(()=>{
  //     setData(topData.props.title);
  // },[])
  console.log(data);
  return (
    <>
      <div className="topSelling_box">
        <h3>{props.title}</h3>
        {data.map((item, idx) => {
          return (
            <div className="items d-flex align-items-center">
              <div className="img">
                <Link to="">
                  <img src={data[idx].img} className="w-100" />
                </Link>
              </div>

              <div className="info px-3">
                <Link to="">
                  <h4>{data[idx].des}</h4>
                </Link>
                <Rating
                  name="half-rating-read"
                  defaultValue={data[idx].rating}
                  precision={0.5}
                  readOnly
                />
                <div className="d-flex align-items-center">
                  <span className="price text-g font-weight-bold">$28.85</span>{" "}
                  <span className="oldPrice">$32.8</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={data[0].img} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>{data[0]}</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">$28.85</span>{" "}
              <span className="oldPrice">$32.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img1} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">$28.85</span>{" "}
              <span className="oldPrice">$32.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img1} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">$28.85</span>{" "}
              <span className="oldPrice">$32.8</span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default TopProducts;
