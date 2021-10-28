import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Body = styled.div`
  margin: 10px 50px 100px 50px;
  .drop {
    display: flex;
  }
  label {
    display: block;
  }
  input {
    width: 490px;
  }
  textarea {
      width: 490px;
      height: 60px;
  }
  video {
    width: 220px;
    height: 220px;
  }
`;

const Dropbox = styled.div`
  text-align: center;
  border: 1px solid;
  width: 220px;
  height: 220px;
  i {
    margin-top: 102px;
  }
`;

export default function Upload() {
  const [title, isTitle] = useState("");
  const [description, isDescription] = useState("");
  const [selectOne, isSelectOne] = useState(null);
  const [selectTwo, isSelectTwo] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [thumbnail, isThumbnail] =useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 1) alert("하나의 파일만 업로드하세요.");
    else {
      isTitle(acceptedFiles[0].name);
      setUploadFile(acceptedFiles[0]);
      let file = acceptedFiles[0];
      console.log(file)
      let reader = new FileReader();
      reader.onloadend = () => {
        isThumbnail(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const setTitle = (e) => {
    isTitle(e.target.value);
  };

  const setDescription = (e) => {
    // console.log(e.target.value)
    isDescription(e.target.value);
  }

  const setSelectOne = (e) => {
    // console.log(e.target.value)
    isSelectOne(e.target.value);
  }

  const setSelectTwo = (e) => {
    // console.log(e.target.value)
    isSelectTwo(e.target.value);
  }

  // 서버에 요청하는 함수
  const postUpload = () => {
    const formData = new FormData();
    formData.append('upload', uploadFile);
  };

  return (
    <Wrap>
      <Header />
      <Body>
        <div>
          <h1>Upload Video</h1>
        </div>
        <div className="drop">
          {thumbnail ? null : <Dropbox {...getRootProps()}>
            <input {...getInputProps()} />
            <i className="fas fa-plus"></i>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop a file here, or click</p>
            )}
          </Dropbox>}
          {thumbnail ? <video src={thumbnail} alt="썸네일"/> : null}
        </div>      
        <br />
        <br />
        <label>Title</label>
        <input value={title} type="text" placeholder="제목을 입력하세요" onChange={setTitle}></input>
        <br/>
        <br/>
        <label>Description</label> 
        <textarea value={description} type="text" placeholder="설명을 입력하세요" onChange={setDescription}></textarea>
        <br/>
        <br/>
        <select value={selectOne} onChange={setSelectOne}>
          <option>선택</option>
          <option>public</option>
          <option>private</option>
        </select>
        <br />
        <br />
        <select value={selectTwo} onChange={setSelectTwo}>
          <option>선택</option>
          <option>Film & Animation</option>
          <option>Autos & Vehicles</option>
          <option>Music</option>
          <option>Pets & Animals</option>
          <option>Sports</option>
        </select>
        <br />
        <br />
        <button onClick={postUpload}>Submit</button>
      </Body>
      <Footer />
    </Wrap>
  );
}
