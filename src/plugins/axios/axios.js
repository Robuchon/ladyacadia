import axios from "axios";

let txtURL;

if (import.meta.env.VITE_YOUR_R2ADRESSTXT !== undefined) {
  txtURL = import.meta.env.VITE_YOUR_R2ADRESSTXT;
} else {
  console.log("Error with .env");
}

let imgURL;

if (import.meta.env.VITE_YOUR_R2ADRESSIMG !== undefined) {
  imgURL = import.meta.env.VITE_YOUR_R2ADRESSIMG;
} else {
  console.log("Error with .env");
}

class Base {
  static txt = axios.create({
    baseURL: txtURL,
  });

  static img = axios.create({
    baseURL: imgURL,
  });
}

export default Base;
