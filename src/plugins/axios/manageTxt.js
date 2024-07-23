import Base from "@axios/axios";

class ManageTxt {
  static async artDigitalTxt(fileName) {
    return Base.txt.get(fileName)
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
