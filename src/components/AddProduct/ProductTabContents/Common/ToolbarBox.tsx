import React from "react";
import { Col, Label } from "reactstrap";
import { P } from "../../../../AbstractElements";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToolbarBoxProp } from "../../../../Types/EcommerceType";

export default function ToolbarBox({ label, paragraph }: ToolbarBoxProp) {
  const content = "Write Message";

  return (
    <Col xs={12}>
      {label && (
        <Col xs={12}>
          <Label>{"Additional Description"}</Label>
        </Col>
      )}
      <div className="toolbar-box">
        <CKEditor editor={ClassicEditor} data={content} />
      </div>
      <P className="f-light">{paragraph}</P>
    </Col>
  );
}
