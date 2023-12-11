const { v4 } = require("uuid");

const imageUpload = require("../../config.json")

async function upload(event, format) {
    const { imgConfig } = imageUpload || {}
    try {
        const imageFile = event?.target?.files?.[0] || false;
        const unique_id = v4();

        if (!imageFile) {
            console.log("Image Not Found??");
            return null;
        }

        var myHeaders = new Headers();
        myHeaders.append('Cookie', imgConfig.cookie);

        var formdata = new FormData();
        formdata.append('source', imageFile, unique_id + format || '.jpg');
        formdata.append('type', imgConfig.fileType);
        formdata.append('action', imgConfig.action);
        formdata.append('timestamp', new Date().getTime());
        formdata.append('auth_token', imgConfig.authToken);

        const response = await fetch('https://imgbb.com/json', {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        });

        const result = await response.json();

        return ({
            image: result?.image?.url || result?.image?.display_url,
            height: result?.image?.display_height,
            width: result?.image?.display_width,
            size: result?.image?.size_formatted,
            delete: result?.image?.delete_url
        });
    } catch (error) {
        console.error('error', error);
        return null;
    }
}

module.exports = {
    upload
}
