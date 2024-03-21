import { Fragment } from "react";
import { CardHeader } from "reactstrap";
import { H4, P } from "../../../AbstractElements";
import { CommonCardHeaderTypes } from "../../../Types/CommonComponentType";

export default function CommonCardHeader({ headClass, title, subTitle, titleClass }: CommonCardHeaderTypes) {
  return (
    <CardHeader className={headClass}>
      <H4 className={`mb-0 ${titleClass}`}>{title}</H4>
      {subTitle && (
        <P className="f-m-light mt-1">
          {subTitle.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}
            </Fragment>
          ))}
        </P>
      )}
    </CardHeader>
  );
}
