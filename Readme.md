<h1 align="center">
  <img src="https://i.ibb.co/THmLrVs/img-result-cleanup-1.png" alt="project Logo" width="200">
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

## Description

Briefly describe what your package does and why it's useful. Include any key features and benefits.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Contributing](#contributing)

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

