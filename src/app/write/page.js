"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

const Editor = dynamic(() => import("@comp/editor/editor"), {
  ssr: false,
});

export default function WritePage() {
  const router = useRouter();
  const [isOk, setIsOk] = useState(true);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  /*  useEffect(() => {
    const psw = prompt("비밀번호를 입력해주세요");

    if (psw === process.env.NEXT_PUBLIC_WRITE_PWD) setIsOk(true);
    else setIsOk(false);
  }, []); */

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDescription = (event, editor) => {
    setDescription(editor.getData());
    console.log(editor.getData());
  };

  const handleClkBtnSubmit = () => {
    const body = {
      title,
      description,
      isPublic: true,
    };
    sendReq(body);
  };

  const handleClkBtnSave = () => {
    const body = {
      title,
      description,
      isPublic: false,
    };
    sendReq(body);
  };

  const sendReq = (body) => {
    fetch(process.env.NEXT_PUBLIC_API_POST, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });
  };

  return (
    <>
      <input
        type="text"
        className="tl write__title"
        onChange={handleChangeTitle}
        placeholder="제목을 입력해주세요..."
      ></input>
      {isOk && (
        <Editor
          onChange={handleChangeDescription}
          config={{ placeholder: "내용을 입력해주세요..." }}
        />
      )}
      <section className="cx write__btn-wrapper">
        <button className="tl write__btn" onClick={handleClkBtnSave}>
          임시저장
        </button>
        <button className="tl write__btn" onClick={handleClkBtnSubmit}>
          발행하기
        </button>
      </section>
    </>
  );
}
