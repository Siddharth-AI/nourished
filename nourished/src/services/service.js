import axios from "axios";

export const uploadfiles = async (file) => {

  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "reactProjectImage");
  formData.append("cloud_name", "dl8pdgd0r");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dl8pdgd0r/image/upload", formData);
    return res.data.secure_url;
  } catch (error) {
    console.error("Error uploading the image:", error);
    return null;
  }
};

export const getServices = async (endpoint) => {
  try {
    const res = await axios.get(`http://localhost:3000/${endpoint}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(`error when check ${endpoint}`, error);
  }
};