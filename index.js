const { v4 } = require("uuid");

const imageUpload = require("../../config.json");

async function handleUpload(imageFile, format) {
  const { imgConfig } = imageUpload || {};
  try {
    const unique_id = v4();

    var myHeaders = new Headers();
    myHeaders.append("Cookie", imgConfig.cookie);

    var formdata = new FormData();
    formdata.append("source", imageFile, unique_id + (format || ".jpg"));
    formdata.append("type", imgConfig.fileType);
    formdata.append("action", imgConfig.action);
    formdata.append("timestamp", new Date().getTime());
    formdata.append("auth_token", imgConfig.authToken);

    const response = await fetch("https://imgbb.com/json", {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    });

    const result = await response.json();

    return {
      image: result?.image?.url || result?.image?.display_url,
      height: result?.image?.display_height,
      width: result?.image?.display_width,
      size: result?.image?.size_formatted,
      delete: result?.image?.delete_url,
    };
  } catch (error) {
    console.error("error", error);
    return null;
  }
}

async function upload(event, format) {
  const imageFile = event?.target?.files?.[0] || false;

  if (!imageFile) {
    console.log("Image Not Found??");
    return null;
  }
  return await handleUpload(imageFile, format);
}

async function uploads(event, format) {
  const imageFiles = event?.target?.files || [];

  if (imageFiles.length <= 0) {
    console.log("Images Not Found??");
    return null;
  }

  const uploadPromises = imageFiles.map(async (imageFile) => {
    return await handleUpload(imageFile, format);
  });

  return await Promise.all(uploadPromises);
}

module.exports = {
  upload,
  uploads,
};
