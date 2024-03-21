import React from "react";

export default function SvgIcon(props: any) {
    return (
        <svg className={props.className} style={props.style} onClick={props.onClick}>
            <use href={`${process.env.PUBLIC_URL}/assets/svg/icon-sprite.svg#${props.iconId}`}></use>
        </svg>
    )
};