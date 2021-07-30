import React from 'react';
import S3FileUpload from 'react-s3';
import Form from "react-bootstrap/Form";




const config = {
  bucketName: "thenoblecookies",
  dirName: "CookiePics" /* optional */,
  region: "us-east-1",
  accessKeyId: "AKIARRDBSFQ5NOXWEKMT",
  secretAccessKey: "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",
};

const S3Upload = () => {
    const upload = (e) => {
        S3FileUpload.uploadFile(e.target.files[0], config)
        .then((data) => {
            console.log(data.location)
        }).catch((err) => {
            alert(err)
        })
    }

    return (
      <div>
        <Form.Group onChange={upload} controlId="formFile" className="mb-3">
          <Form.Label>S3 Bucket Upload</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </div>
    );
}

export default S3Upload;