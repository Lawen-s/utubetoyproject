import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dummyData } from "../assets/state";


const StyledBody = styled.div`
  margin: 20px 50px 10px 10px;
  padding-bottom: auto;
  display:flex;
  textarea {
    font-size: 20px; 
    width: 500px;
    height: 60px;
  }
  button{
    margin: 0px 0px 0px 15px;
    flex: none;
    align-items: center;
  }
`;
const Label = styled.div`
  margin: 5px 0px 10px 10px;
  flex-wrap: nowrap;
  font-size: 20px;
`

const Commentlist = styled.div`
  border-bottom: 1px solid;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 10px 0 15px;
`;


export default function Comments({ videoInfo, showComment }) {
  const [comment, setComment] = useState()
  //const dummyCommit = dummyData.comment;
  //console.log(showComment.map(el => { }));

  const inputComment = (e) => {
    // console.log(e.target.value)
    setComment(e.target.value);
  };

  const viewComment = () => {
    const infoComment = {
      userId: 1,
      postId: videoInfo.id,
      comment: comment,
      createdAt: new Date(),
      updatedAt: new Date(),

    }
    //댓글 저장
    axios.post(`http://localhost:4000/comment/${videoInfo.id}`, infoComment)
      .then((el) => {
        console.log(el)
      })
  }

  return (<>{/* todo에서 입력, 삭제 icon 가져오기 */}
    <Label>
      <label>댓글</label>
    </Label>
    < StyledBody >
      <textarea value={comment} type="text" placeholder="설명을 입력하세요" onChange={inputComment}></textarea>
      <button onClick={viewComment}>댓글 달기</button>
    </StyledBody >


    {/* {dummyCommit.map((el) => <h2>{el.comment}</h2>)} */}
    {showComment === null ? null : showComment.map((el) => <Commentlist>{el.comment}</Commentlist>)}

  </>)
}
