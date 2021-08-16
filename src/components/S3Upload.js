import React from 'react';
import S3FileUpload from 'react-s3';
import Form from "react-bootstrap/Form";
import config from "../keys/keyconfigS3";


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
          <Form.Label>Upload your design here!</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </div>
    );
}

export default S3Upload;