import React from 'react'
import { Image, LI, ProgressBar, UL } from "../../../../../../AbstractElements";
import SvgIcon from '../../../CommonIcons/CommonSvgIcons'
import { dynamicImage } from '../../../..'
import { Progress } from "../../../../../Constants";
import { WebCardProps } from "../../../../../../Types/DashboardsType";

export default function Comment_CustomerContent({ item }: WebCardProps) {
    return (
        <>
            <div className="comment">
                <UL className='simple-list flex-row'>
                    {item.comment.map((list) => (
                        <LI key={list.id}>
                            <SvgIcon iconId={list.icon} />
                            <span>{list.spanText}</span>
                        </LI>
                    ))}
                </UL>
            </div>
            <div className="flex-shrink-0">
                <div className="user-details customers">
                    <UL className='simple-list'>
                        {item.customers.map((list) => (
                            <LI className="d-inline-block" key={list.id}>
                                <Image src={dynamicImage(`dashboard-3/user/${list.image}`)} alt="user" />
                            </LI>
                        ))}
                    </UL>
                </div>
                <div className="progress-value">
                    <span>{Progress}<span>{item.progressValue}{'%'}</span></span>
                    <ProgressBar value={item.progressValue} color={item.color} />
                </div>
            </div>
        </>
    )
}
