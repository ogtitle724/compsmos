"use client";
import useChatObserver from "@/hook/useChatObserver";
import { useEffect, useRef, useState } from "react";
import { aboutMe } from "@/config/profile";
import "./style.css";

function AboutMe() {
  const observer = useChatObserver();
  const chatContainer = useRef();

  useEffect(() => {
    if (chatContainer.current && observer) {
      const chats = chatContainer.current.querySelectorAll(".chatbox");
      chats.forEach((chat) => {
        observer.observe(chat);
      });
    }
  }, [observer]);

  return (
    <section ref={chatContainer} className="aboutme">
      {aboutMe.map((chatData, idx) => {
        return <ChatBox key={"chat-" + idx} id={idx + 1} message={chatData} />;
      })}
    </section>
  );
}

function ChatBox(props) {
  return (
    <div id={props.id} className={"chatbox"}>
      <Loading />
      <p className="chat chat--hide">{props.message}</p>
    </div>
  );
}

function Loading() {
  return (
    <div className="c loading">
      <div className="loading__dot" style={{ "--i": "0ms" }}></div>
      <div className="loading__dot" style={{ "--i": "200ms" }}></div>
      <div className="loading__dot" style={{ "--i": "300ms" }}></div>
    </div>
  );
}

export default AboutMe;
