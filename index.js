const { v4 } = require("uuid");

async function handleUpload(imageFile, format) {
  const imgConfig = {
    cookie:
      "__gpi=UID=00000e5a12edbf3f:T=1719005434:RT=1719005735:S=ALNI_MaHoHVS2ZXOYRh1DJgU1KYzcwrA6g; PHPSESSID=v47t37gfu92vdave10iouchrt4; __gads=ID=8f5c998af401c5b5:T=1719005434:RT=1723280687:S=ALNI_MaEnsUx-YxcUMfJx22bN716sCYyBA; __eoi=ID=2d1e3844e0a2c0f2:T=1719005434:RT=1723280687:S=AA-AfjZihGykiS5P-zXDlFWVF0ef; FCNEC=%5B%5B%22AKsRol_RWhttYtEudA8QMxozany8_9R45D766PMzBGeYRMb5A_YUq7k-KtNATncnI68aZ1H83lLm-_xmDJCfk7MaoN5ZSNlTDO6515TQMW2KIuiohGQ-uAu-rhM1Tpu8Pi3GKV991YIEdMy4bDBb04LdrZm6-Kv5Fg%3D%3D%22%5D%5D; PHPSESSID=v47t37gfu92vdave10iouchrt4",
    fileType: "file",
    action: "upload",
    authToken: "995df11134a3e488fa2a9524aee17a151ca41d74",
  };
  try {
    const unique_id = v4();

    var myHeaders = new Headers();
    myHeaders.append("Cookie", imgConfig.cookie);
    myHeaders.append("accept", "application/json");

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

  if (imageFiles?.length <= 0) {
    console.log("Images Not Found??");
    return null;
  }

  const uploadResults = [];

  for (let i = 0; i < imageFiles?.length; i++) {
    const imageFile = imageFiles[i];
    const result = await handleUpload(imageFile, format);
    uploadResults.push(result);
  }

  return uploadResults;
}

module.exports = {
  upload,
  uploads,
};
