import React from "react";
import { Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import { ActiveCallbackProp } from "../../../Types/EcommerceType";
import { Btn, H6, P } from "../../../AbstractElements";
import SvgIcon from "../../../utils/Constants/CommonComponents/CommonIcons/CommonSvgIcons";
import { Next, Previous } from "../../../utils/Constants";
import { productGalleryData } from "../../../Data/AppsData/EcommerceData/ProductData";

export default function ProductGallery({ activeCallBack }: ActiveCallbackProp) {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  return (
    <div className="sidebar-body">
      {productGalleryData.map((item) => (
        <div key={item.id} className="product-upload">
          <P>{item.title} </P>
          <Form>
            <Dropzone
              multiple={true}
              getUploadParams={getUploadParams}
              inputContent={
                <div className="dz-message needsclick mt-5" key={1}>
                  <SvgIcon iconId={item.icon} />
                  <H6>{"Drag your files here"}</H6>
                  <span className="note needsclick">{item.spanText}</span>
                </div>
              }
            />
          </Form>
        </div>
      ))}
      <div className="product-buttons">
        <Btn color="transparent" className="me-1" onClick={() => activeCallBack(1)}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="back-arrow" /> {Previous}
          </div>
        </Btn>
        <Btn color="transparent" onClick={() => activeCallBack(3)}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="front-arrow" /> {Next}
          </div>
        </Btn>
      </div>
    </div>
  );
}
