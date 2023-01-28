import React from "react";
import { useState } from "react";
import Card from "./Card.jsx";

const Form1 = () => {
  const [formData, setFormdata] = useState({
    name: "",
    age: "",
    caption: "",
    imgurl: "",
  });

  const [storage, setStorage] = useState([]);

  const inputHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    let key = event.target.name;
    let value = event.target.value;
    setFormdata({ ...formData, [key]: value });
    // console.log(formData)
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setStorage([...storage, formData]);
    setFormdata({
      name: "",
      age: "",
      caption: "",
      imgurl: "",
    });

    console.log(storage);
  };
  return (
    <div>
      <div className="form-div">
        <form action="#">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={inputHandler}
            placeholder="Enter Name"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={inputHandler}
            placeholder="Enter Age"
          />
          <input
            type="text"
            name="caption"
            value={formData.caption}
            onChange={inputHandler}
            placeholder="Enter Caption"
          />
          <input
            type="text"
            name="imgurl"
            value={formData.imgurl}
            onChange={inputHandler}
            placeholder="Enter Imgurl"
          />
          <input type="submit" value="post" onClick={submitHandler} />
        </form>
      </div>
      {storage.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};

export default Form1;
