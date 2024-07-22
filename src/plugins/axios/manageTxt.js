import Base from "@axios/axios";

class ManageTxt {
  static async artDigitalTxt() {
    return Base.txt.get(`/artDigital.js`)
      .then((response) => {
        console.log("Recup des text art digital");
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e.response;
      });
  }
}

export default ManageTxt;
