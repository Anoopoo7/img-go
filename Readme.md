<h1 align="center">
  <img src="https://i.ibb.co/8sjpqvj/logo-cleanup-removebg-preview.png" alt="project Logo" width="200">
  <br>
  <br>
  ImgGo
</h1>

<p align="center">
  <a href="https://github.com/Anoopoo7/img-go">
    <img src="https://img.shields.io/github/stars/Anoopoo7/img-go?style=for-the-badge" alt="GitHub stars">
  </a>
  <a href="https://github.com/Anoopoo7/img-go/issues">
    <img src="https://img.shields.io/github/issues/Anoopoo7/img-go?style=for-the-badge" alt="GitHub issues">
  </a>
  <a href="https://github.com/Anoopoo7/img-go/network">
    <img src="https://img.shields.io/github/forks/Anoopoo7/img-go?style=for-the-badge" alt="GitHub forks">
  </a>
  <a href="https://github.com/Anoopoo7/img-go/LICENSE">
    <img src="https://img.shields.io/github/license/Anoopoo7/img-go?style=for-the-badge" alt="GitHub license">
  </a>
</p>

Img-go is a powerful and user-friendly solution for handling image uploads seamlessly in your projects. It simplifies the process of integrating image upload functionality into your applications, saving you time and effort.
<br/><br/>

## Key Features and Benefits

- **Easy Integration:** With just a few lines of code, you can seamlessly integrate image uploading functionality into your application, reducing development time and complexity.

- **Flexible Configuration:** Customize the upload process with a range of configurable options, allowing you to adapt the package to your specific needs.

- **Multi-Platform Support:** Whether you're building a web application, mobile app, or desktop application, Your NPM Package Name provides consistent image upload capabilities across various platforms.

- **Resilient Performance:** Benefit from optimized and efficient image upload processes, ensuring fast and reliable performance even with large files.

- **Comprehensive Documentation:** Our well-documented package comes with clear examples, making it easy for developers of all levels to get started quickly and effectively.

  <br/><br/>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)

## Installation

```bash
npm install img-go
```

## Usage

create an ```config.js``` file on the root of your app.
```bash
{
    "imgConfig": {
        "fileType": "file",
        "action": "upload",
        "authToken": "<auth token>",
        "cookie": "<cookie>"
    }
}
```


Then create a function for handling the ```input```'s ```onChange``` event

```bash
import { upload } from "img-go";


const handleUpload = async (event) => {
  const response = await upload(event);
}
```

Then call the handleUpload function on the onchange

```bash
<input type="file" onChange={handleUpload} />
```

## Options

You can chnage the image formats by passing optional parameter. Default is .jpg
```bash
const format = ".png";

const handleUpload = async (event, format) => {
  const response = await upload(event);
}

```

---

<p align="center">
  <a href="https://github.com/Anoopoo7">
    <img src="https://img.shields.io/badge/Visit%20My%20GitHub-Anoopoo7-333?style=for-the-badge&logo=github" alt="GitHub profile">
  </a>
</p>

