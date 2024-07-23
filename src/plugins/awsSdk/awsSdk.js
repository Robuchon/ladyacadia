import S3 from "aws-sdk/clients/s3.js";

class ManageR2 {
  static download = async (fileName) => {
    const s3 = new S3({
      endpoint:
        "940c809c3437a3496c0f893153eea77a.r2.cloudflarestorage.com", // Remplacez par votre endpoint R2
      accessKeyId: "52f7c212bd87559df0af59263e174ef7", // Remplacez par votre access key
      secretAccessKey:
        "491eb8f23f683cf84cla2c2da340e1708af8efe6e4053fd24a76ddfe79226e6e", // Remplacez par votre secret key
    });

    const params = {
      Bucket: "text", // Remplacez par le nom de votre bucket
      Key: fileName,
    };

    try {
      const data = await s3.getObject(params).promise();
      console.log("Data retrieved:", data);
      return data.Body.toString("utf-8"); // assuming the file is text-based
    } catch (error) {
      console.error("Error retrieving file:", error);
      throw error;
    }
  };
}

export default ManageR2;
