import { AdditiveBorderType, GridTableHeadType } from "../../Types/UiKitsType";

export const gridColumnSubTitle = [
    {
        text: 'You may use predefined grid classes. Using ',
        code: '.col-md-*'
    },
    {
        text: 'you can set the grid system.'
    }
];

export const verticalAlignSubTitle = [
    {
        text: 'You can use the ',
        code: 'align-items-*'
    },
    {
        text: ' class to set the Vertical alignment.'
    }
];

export const horizontalAlignSubTitle = [
    {
        text: 'You can use the ',
        code: 'justify-content-*'
    },
    {
        text: ' class to set the horizontal alignment.'
    }
];

export const nestingSubTitle = [
    {
        text: 'To nest your content with the default grid, add a new',
        code: '.row'
    },
    {
        text: ' and set of ',
        code: '.col-sm-*'
    },
    {
        text: ' columns within an existing ',
        code: '.col-sm-*'
    },
    {
        text: '  column.'
    }
];

export const orderSubTitle = [
    {
        text: 'Using ',
        code: '.row.order '
    },
    {
        text: 'class, you can set the order position.'
    }
];

export const offsetSubTitle = [
    {
        text: 'You can offset the grid column using ',
        code: '.offset-'
    },
    {
        text: ' grid class.'
    }
];

export const gridOptionsSubTitle = [
    {
        text: "Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize."
    }
]

export const gridtableHeadData: GridTableHeadType[] = [
    {
        text1: 'Extra small',
        text2: '<576px'
    },
    {
        text1: 'Small',
        text2: '≥576px'
    },
    {
        text1: 'Medium',
        text2: '≥768px'
    },
    {
        text1: 'Large',
        text2: '≥992px'
    },
    {
        text1: 'Extra large',
        text2: '≥1200px'
    },
    {
        class: 'digits',
        text1: 'Extra extra large',
        text2: '≥1400px'
    },
]

export const gridColumnData: AdditiveBorderType[] = [
    {
        class: 'col-md-1',
        text: 'col-md-1'
    },
    {
        class: 'col-md-2',
        text: 'col-md-2'
    },
    {
        class: 'col-md-2',
        text: 'col-md-2'
    },
    {
        class: 'col-md-3',
        text: 'col-md-3'
    },
    {
        class: 'col-md-4',
        text: 'col-md-4'
    },
    {
        class: 'col-md-5',
        text: 'col-md-5'
    },
    {
        class: 'col-md-7',
        text: 'col-md-7'
    },
    {
        class: 'col-md-6',
        text: 'col-md-6'
    },
    {
        class: 'col-md-6',
        text: 'col-md-6'
    },
    {
        class: 'col-md-8',
        text: 'col-md-8'
    },
    {
        class: 'col-md-4',
        text: 'col-md-4'
    },
    {
        class: 'col-md-9',
        text: 'col-md-9'
    },
    {
        class: 'col-md-3',
        text: 'col-md-3'
    },
    {
        class: 'col-md-10',
        text: 'col-md-10'
    },
    {
        class: 'col-md-2',
        text: 'col-md-2'
    },
    {
        class: 'col-md-12',
        text: 'col-md-12'
    }
]

export const gridOrderBodyData: AdditiveBorderType[] = [
    {
        class: 'col-3 order-3',
        text: 'First Item (order-3)'
    },
    {
        class: 'col-5 order-first',
        text: 'Second Item (order-first)'
    },
    {
        class: 'col-4 order-last',
        text: 'Third Item (order-last)'
    },
    {
        class: 'col-3 order-2',
        text: 'Fourth Item (order-2)'
    },
    {
        class: 'col-sm-2 col-4 order-5',
        text: 'fifth Item (order-5)'
    },
    {
        class: 'col-sm-6 col-4 order-4',
        text: 'sixth Item (order-4)'
    }
]

export const offsetBodyData: AdditiveBorderType[] = [
    {
        class: 'col-sm-5 col-4 offset-sm-3 offset-2',
        text: 'col-5 offset-3'
    },
    {
        class: 'col-sm-2 col-4 offset-sm-2 offset-1',
        text: 'col-2 offset-2'
    },
    {
        class: 'col-sm-4 col-5 offset-2',
        text: 'col-4 offset-2'
    },
    {
        class: 'col-sm-3 col-4 offset-sm-2 offset-1',
        text: 'col-3 offset-2'
    }
]