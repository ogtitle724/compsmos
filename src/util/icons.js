"use client";

import { memo } from "react";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoGithub,
  IoLogoVercel,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiAmazonaws,
  SiExpress,
  SiThreedotjs,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function IconHtml(props) {
  return <IoLogoHtml5 size={props.size} color={"#dd4b25"} />;
}

function IconCss(props) {
  return <IoLogoCss3 size={props.size} color={"#2862e9"} />;
}

function IconJs(props) {
  return <IoLogoJavascript size={props.size} color={"#ebd81c"} />;
}

function IconReact(props) {
  return <IoLogoReact size={props.size} color={"#5dd2f3"} />;
}

function IconThree(props) {
  return <SiThreedotjs size={props.size} color={"#000000"} />;
}

function IconNext(props) {
  return <TbBrandNextjs size={props.size} color={"#000000"} />;
}

function IconNode(props) {
  return <IoLogoNodejs size={props.size} color={"#87bf00"} />;
}

function IconEx(props) {
  return <SiExpress size={props.size} color={"#000000"} />;
}

function IconMongo(props) {
  return <SiMongodb size={props.size} color={"#4da53f"} />;
}

function IconAws(props) {
  return <SiAmazonaws size={props.size} color={"#f79400"} />;
}

function IconVercel(props) {
  return <IoLogoVercel size={props.size} color={"#000000"} />;
}

function IconGithub(props) {
  return <IoLogoGithub size={props.size} color={"#000000"} />;
}

function IconGit(props) {
  return <FaGitAlt size={props.size} color={"#e94e31"} />;
}

export const MemoIconHtml = memo(IconHtml);
export const MemoIconCss = memo(IconCss);
export const MemoIconJs = memo(IconJs);
export const MemoIconReact = memo(IconReact);
export const MemoIconThree = memo(IconThree);
export const MemoIconNext = memo(IconNext);
export const MemoIconNode = memo(IconNode);
export const MemoIconEx = memo(IconEx);
export const MemoIconMongo = memo(IconMongo);
export const MemoIconAws = memo(IconAws);
export const MemoIconVercel = memo(IconVercel);
export const MemoIconGithub = memo(IconGithub);
export const MemoIconGit = memo(IconGit);