import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function Editor({
  ckRef,
  data,
  config,
  onReady,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <CKEditor
      ref={ckRef}
      editor={ClassicEditor}
      data={data}
      config={config}
      onReady={onReady}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}
