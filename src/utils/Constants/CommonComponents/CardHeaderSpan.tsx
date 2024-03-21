import React from "react";
import { CardHeader } from "reactstrap";
import { CardHeaderSpanType } from "../../../Types/CommonComponentType";
import { H3, H4 } from "../../../AbstractElements";

export default function CardHeaderSpan({
  headingClassName,
  smallHeading,
  heading,
  span,
  span2,
  bigHeadingClassName,
}: CardHeaderSpanType) {
  return (
    <CardHeader className={headingClassName ? headingClassName : ""}>
      {smallHeading ? (
        <H4>{smallHeading}</H4>
      ) : (
        <H3 className={bigHeadingClassName ? bigHeadingClassName : ""}>{heading}</H3>
      )}
      {span && <span dangerouslySetInnerHTML={{ __html: span }} />}
      {span2 && <span dangerouslySetInnerHTML={{ __html: span2 }} />}
    </CardHeader>
  );
}
