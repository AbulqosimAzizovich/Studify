import { TableHeadType } from "../../Types/CommonComponentType";
import { blockQuotesDataType, textColorDataType } from "../../Types/UiKitsType";

export const headingSubTitle = [
    {
        text: "All HTML headings, ",
        code: '<h1>'
    },
    {
        text: ' through',
        code: '<h6>'
    }, {
        text: ', are available.'
    }
];

export const fontWeightSubTitle = [
    {
        text: "Using ",
        code: 'f-w-*'
    },
    {
        text: ' class, you can change the font weight.'
    }
];

export const listingSubTitle = [
    {
        text: "All typography list:- ",
        code: '<ul>'
    },
    {
        text: ' , ',
        code: '<ol>'
    }, {
        text: ' & ',
        code: '<dl>'
    }
];

export const textColorSubTitle = [
    {
        text: "You can Give text color by using ",
        code: 'text-*'
    },
    {
        text: ' class'
    }
];

export const blockQuotesSubTitle = [
    {
        text: "The ",
        code: '<blockquote>'
    },
    {
        text: ' tag specifies a section that is quoted from another source.'
    }
];

export const InlineTextSubTitle = [
    {
        text: "Styling for common inline HTML5 elements."
    }
]

export const headingTableHead: TableHeadType[] = [
    {
        class: 'pt-0',
        name: 'Code'
    },
    {
        class: 'pt-0',
        name: 'Font-Size'
    },
    {
        class: 'pt-0',
        name: 'Heading'
    }
];

export const colorHeadData: TableHeadType[] = [
    {
        class: 'pt-0',
        name: 'Code'
    },
    {
        class: 'pt-0',
        name: 'Heading'
    }
];

export const unorderListData: string[] = [
    'One who looks on the bright side of things',
    'One who does something not professionally but for pleasure',
    'A person who knows everything',
    'A handwriting that cannot be read',
    'One who looks on the bright side of things',
    'A sound that cannot be heard',
    'The study of ancient writing and scriptures',
    'The study of rocks and soil',
    'creates more sophisticated capabilities for a web page to use coding language.',
    'Maintaining contact and communicating clearly are also essential. possess abilities for a designer'
];

export const textColorData: textColorDataType[] = [
    {
        class: 'txt-primary',
        text: 'This is Primary text You can archive this adding',
        code: '.txt-primary'
    },
    {
        class: 'txt-secondary',
        text: 'This is Secondary text You can archive this adding',
        code: '.txt-secondary'
    },
    {
        class: 'txt-success',
        text: 'This is Success text You can archive this adding',
        code: '.txt-success'
    },
    {
        class: 'txt-info',
        text: 'This is Info text You can archive this adding',
        code: '.txt-info'
    },
    {
        class: 'txt-warning',
        text: 'This is Warning text You can archive this adding',
        code: '.txt-warning'
    },
    {
        class: 'txt-danger',
        text: 'This is Danger text You can archive this adding',
        code: '.txt-danger'
    },
    {
        class: 'txt-dark',
        text: 'This is Dark text You can archive this adding',
        code: '.txt-dark'
    },
    {
        class: 'txt-primary',
        text: 'This is Primary text You can archive this adding',
        code: '.txt-primary'
    }
];

export const blockQuotesData: blockQuotesDataType[] = [
    {
        class: 'figure d-block dark-blockquote',
        text: 'The only impossible journey is the one you never begin.',
        footer: 'Tony Robbins'
    },
    {
        class: 'figure text-center d-block dark-blockquote',
        text: 'In this life we cannot do great things. We can only do small things with great love.',
        footer: 'Mother Teresa'
    },
    {
        class: 'figure text-end d-block dark-blockquote',
        text: 'Live in the sunshine, swim the sea, drink the wild air.',
        footer: 'Ralph Waldo Emerson'
    }
]