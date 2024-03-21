import { P } from "../../AbstractElements"
import { RibbonType } from "../../Types/BonusUiType"

export const leftRibbonSubTitle = [
    {
        text: 'Use the class of ',
        code: '.ribbon-*'
    },
    {
        text: '[ribbon-space-bottom/ribbon-clip/ribbon-vertical-left/ribbon-bookmark/ribbon-clip-bottom/ribbon-vertical-left] through create ribbons and all ribbon colors are available.',
        code: '[.ribbon-*] '
    }
]

export const rightRibbonSubTitle = [
    {
        text: 'Use the class of ',
        code: '.ribbon-*'
    },
    {
        text: '[ribbon-right/ribbon-clip-right/ribbon-vertical-right/ribbon-bookmark/ribbon-clip-bottom-right/ribbon-vertical-right] through create ribbons and all ribbon colors are available.',
        code: '[.ribbon-*]'
    }
]


export const leftSideData: RibbonType[] = [
    {
        classMain: 'ribbon-wrapper border border-1 height-equal alert-light-light',
        ribbonClass: 'ribbon ribbon-primary ribbon-space-bottom',
        ribbonText: 'SAVE 10%',
        subText: <P><em className="txt-danger">Ribbon designs</em> have been a part of web design. There is a design for you in this collection, regardless of whether you use <em className="txt-danger">CSS ribbons </em> to identify your items.</P>
    },
    {
        classMain: 'ribbon-wrapper border border-1 height-equal',
        ribbonClass: 'ribbon ribbon-secondary ribbon-clip',
        ribbonText: 'SAVE 50%',
        subText: <P>The <em className="txt-danger">ribbon and tag</em> frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information.</P>
    },
    {
        classMain: 'ribbon-vertical-left-wrapper border border-1 vertical-lp-space height-equal alert-light-light',
        ribbonClass: 'ribbon ribbon-warning ribbon-vertical-left',
        ribbonText: <i className="icofont icofont-love" />,
        subText: <P>The <em className="txt-danger">ribbons</em> have also been utilised by certain inventive developers in the menu and navigation choices.The possibilities are endless when it comes to creativity. </P>
    },
    {
        classMain: 'ribbon-wrapper border border-1 height-equal',
        ribbonClass: 'ribbon ribbon-info ribbon-bookmark',
        ribbonText: 'Cashback 20%',
        subText: <P> Although the majority of the <em className="txt-danger">ribbon components</em> on this list have static, straightforward styles, we have also gathered dynamic ribbons.</P>
    },
    {
        classMain: 'ribbon-wrapper-bottom border border-1 clip-bp-space height-equal alert-light-light',
        ribbonClass: 'ribbon ribbon-dark ribbon-clip-bottom',
        ribbonText: '40% OFF',
        subText: <P>Edge <em className="txt-danger">ribbon </em>among the most often used <em className="txt-danger">ribbon styles is CSS.</em>{" This design's author provides you with a short piece of code that has room for several optional components and effects."}</P>
    },
    {
        classMain: 'ribbon-vertical-left-wrapper border border-1 vertical-lp-space height-equal',
        ribbonClass: 'ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger',
        ribbonText: <i className="icon-gift" />,
        subText: <P>The entire ribbon and other components seem clean since they were created entirely with CSS. You may utilize the <em className="txt-danger">ribbons</em> as cards to deliver the material.</P>
    }
]


export const rightSideData: RibbonType[] = [
    {
        classMain: 'ribbon-wrapper border border-1 height-equal',
        ribbonClass: 'ribbon ribbon-dark ribbon-right',
        ribbonText: '50% OFF',
        subText: <P>The <em className="txt-danger">ribbon and tag</em> frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information.</P>
    },
    {
        classMain: 'ribbon-wrapper-right border border-1 height-equal alert-light-light',
        ribbonClass: 'ribbon ribbon-primary ribbon-clip-right ribbon-right',
        ribbonText: 'SAVE 50%',
        subText: <P>Since very early times, <em className="txt-danger">ribbon designs</em> have been a part of web design. There is a design for you in this collection, regardless of whether you use <em className="txt-danger">CSS ribbons </em> to identify your items.</P>
    },
    {
        classMain: 'ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal',
        ribbonClass: 'ribbon ribbon-bookmark ribbon-vertical-right ribbon-secondary',
        ribbonText: <i className="icon-signal" />,
        subText: <P>The entire ribbon and other components seem clean since they were created entirely with CSS. You may utilize the <em className="txt-danger">ribbons</em> as cards to deliver the material. </P>
    },
    {
        classMain: 'ribbon-wrapper border border-1 height-equal alert-light-light',
        ribbonClass: 'ribbon ribbon-warning ribbon-bookmark ribbon-right',
        ribbonText: 'SAVE 20%',
        subText: <P>Edge <em className="txt-danger">ribbon </em>among the most often used <em className="txt-danger">ribbon styles is CSS.</em> {"This design's author provides you with a short piece of code that has room for several optional components and effects."}</P>
    },
    {
        classMain: 'ribbon-wrapper-bottom border border-1 clip-bp-space height-equal',
        ribbonClass: 'ribbon ribbon-success ribbon-clip-bottom-right',
        ribbonText: 'Cashback 10%',
        subText: <P> Although the majority of the   <em className="txt-danger">ribbon components</em> on this list have static, straightforward styles, we have also gathered dynamic ribbons.</P>
    },
    {
        classMain: 'ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal alert-light-light',
        ribbonClass: 'ribbon ribbon-danger ribbon-vertical-right',
        ribbonText: <i className="fa fa-taxi" />,
        subText: <P>The <em className="txt-danger">ribbons</em> have also been utilized by certain inventive developers in the menu and navigation choices. The possibilities are endless when it comes to creativity.</P>
    }
]