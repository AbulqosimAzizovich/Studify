import { BasicDropdownType } from "../../Types/UiKitsType"

export const basicDropdownSubTitle = [
    {
        text: 'When the',
        code: '.show '
    },
    {
        text: 'class starts, dropdown appears. And ',
        code: '.btn-*'
    },
    {
        text: " to change button dark background colors."
    }
];

export const roundedDropdownSubTitle = [
    {
        text: 'When the',
        code: '.show '
    },
    {
        text: 'class starts, dropdown appears. And ',
        code: '.rounded-pill'
    },
    {
        text: " to change rounded dropdowns."
    }
];

export const splitDropdownSubTitle = [
    {
        text: 'When the',
        code: '.show '
    },
    {
        text: 'class starts, dropdown appears. And split the dropdown ',
        code: '.dropdown-toggle-split'
    }
];

export const headingDropdownSubTitle = [
    {
        text: 'Main heading and any sub-content in dropdown.'
    }
];

export const dropdownWithInputSubTitle = [
    {
        text: 'Use the checkbox using dropdown.',
        code: "(type='checkbox'/'radio')."
    }
];

export const darkDropdownSubTitle = [
    {

        code: '.dropdown-menu-dark '
    },
    {
        text: 'class through make dark mode.'
    }
];

export const uniqueDropdownSubTitle = [
    {
        text: 'Unique way to represent form dropdown and text dropdown.'
    }
];

export const justifyContentSubTitle = [
    {
        text: 'Use the ',
        code: '(text-start/text-center/text-end)'
    },
    {
        text: ' to change dropdown texts.'
    }
];

export const alignmentsSubTitle = [
    {
        text: 'Use the ',
        code: '(dropstart/dropup/dropend)'
    },
    {
        text: ' this class through change dropdown directions.'
    }
];

export const helperCardSubTitle = [
    {
        text: 'When the',
        code: '.show '
    },
    {
        text: 'class starts, dropdown appears.'
    }
];

export const dividerDropdownSubTitle = [
    {
        text: 'When the',
        code: '.show '
    },
    {
        text: 'class starts, dropdown appears. And',
        code: '.dropdown-divider'
    },
    {
        text: ' to change dropdown section.'
    }
];

export const dropdownSizingSubTitle = [
    {
        text: 'When the',
        code: '.show '
    },
    {
        text: 'class starts, dropdown appears. And',
        code: '[.btn-lg/.btn-sm]'
    },
    {
        text: 'class through button size changed.'
    }
]

export const basicDropdownData: BasicDropdownType[] = [
    {
        class: 'secondary',
        bodyClass:'dropdown-block',
        text: 'Ecommerce',
        menulist: ['Product', 'Product details', 'Cart']
    },
    {
        class: 'warning text-black',
        bodyClass:'dropdown-block',
        text: 'Ui kits',
        menulist: ['Typography', 'Avatars', 'Grid']
    },
    {
        class: 'danger',
        bodyClass:'dropdown-block',
        text: 'Error page',
        menulist: ['Error 400', 'Error 403', 'Error 500']
    }
]

export const roundedDropdownData: BasicDropdownType[] = [
    {
        class: 'success rounded-pill',
        text: 'Success',
        bodyClass:'dropdown-block',
        menulist: ['Dark', 'Light', 'Lighter']
    },
    {
        class: 'info rounded-pill',
        text: 'Info',
        bodyClass:'dropdown-block',
        menulist: ['Dark', 'Light', 'Lighter']
    },
    {
        class: 'warning rounded-pill',
        text: 'Warning',
        bodyClass:'dropdown-block',
        menulist: ['Dark', 'Light', 'Lighter']
    },
    {
        class: 'danger rounded-pill',
        text: 'Danger',
        bodyClass:'dropdown-block',
        menulist: ['Dark', 'Light', 'Lighter']
    },
]

export const splitDropdownData: BasicDropdownType[] = [
    {
        class: 'secondary',
        text: 'Animations',
        menulist: ['Animate', 'AOS animations']
    },
    {
        class: 'success',
        text: 'Charts',
        menulist: ['Echarts', 'Apex chart']
    },
    {
        class: 'info',
        text: 'Email',
        menulist: ['Email app', 'Email compose']
    },
    {
        class: 'warning',
        text: 'Icons',
        menulist: ['Flag icons', 'Fontawesome icons', 'Ico icons', 'Feather icons']
    },
    {
        class: 'danger',
        text: 'Learning',
        menulist: ['Learning List', 'Detailed Course']
    }
]

export const justifyData: BasicDropdownType[] = [
    {
        class: 'info',
        bodyClass: 'text-center dropdown-block',
        text: 'Text-center',
        menulist: ["Chocolate", "Ice-cream", "Trophy"]
    },
    {
        class: 'primary',
        bodyClass: 'text-end dropdown-block',
        text: 'Text-right',
        menulist: ["I'm fine.", "ohh wow!!", "That's the good news! "]
    },
]

export const alignmentData: BasicDropdownType[] = [
    {
        class: 'success',
        divClass: 'dropend',
        position: 'end',
        text: 'Success right',
        bodyClass: 'dropdown-block text-end',
        menulist: ["Good luck ", "Good job ", "Done!"]
    },
    {
        class: 'primary',
        position: 'down',
        text: 'Primary bottom',
        bodyClass: 'dropdown-block text-end',
        menulist: ["It's important", "Happy life ", "Another work"]
    },
    {
        class: 'danger',
        divClass: 'dropstart',
        position: 'start',
        text: 'Danger left',
        bodyClass: 'dropdown-block',
        menulist: ["Threat ", "Dangerous", "Alert "]
    }
]

export const helperCardData: BasicDropdownType[] = [
    {
        class: 'secondary',
        text: 'Helper Card',
        menulist: ["Learn More!", "There is a lot of information available here"]
    },
    {
        class: 'warning',
        text: 'Warning Card',
        menulist: ["Warning!", "Please! Check your notifications."]
    },
    {
        class: 'info',
        text: 'Alert Card',
        menulist: ["Danger", "It's a danger path."]
    }
]

export const dividerCommonData: BasicDropdownType[] = [
    {
        class: 'success rounded-pill',
        text: 'Wishlist',
        menulist: ["Shoes", "Bag", "Clothes ", "", "Separated link"]
    },
    {
        class: 'primary rounded-pill',
        text: 'Sports ',
        menulist: ["Badminton", "Tenis ", "Kho-Kho", "", "Separated link"]
    },
    {
        class: 'secondary rounded-pill',
        text: 'Colors ',
        menulist: ["Orange", "Yellow ", "Red ", "", "Separated link"]
    }
]