import { AdditionalAlertType, AlertColorType } from "../../Types/UiKitsType"

export const linkColorSubTitle = [
    {
        text: "Use the ",
        code: '.alert-link'
    },
    {
        text: ' utility class to quickly provide matching colored links within any alert'
    }
];

export const linkLightSubTitle = [
    {
        text: "Use the ",
        code: '.alert-link'
    },
    {
        text: ' utility class to quickly provide matching colored links within any alert'
    }
];

export const outlineAlertSubTitle = [
    {
        text: "Use the ",
        code: '.border-*'
    },
    {
        text: 'utility class to quickly provide matching border and border-width within any alert.'
    }
];

export const alertWithIconSubTitle = [
    {
        text: "Use the ",
        code: '.dismiss-text'
    },
    {
        text: ' class to add dismiss text instead of icon'
    }
];

export const dismissAlertSubTitle = [
    {
        text: "Use the ",
        code: '.alert-dismissible'
    },
    {
        text: ' utility class to quickly remove the alerts.'
    }
];

export const liveAlertSubTitle = [
    {
        text: "Click the button below to show an alert,then dismiss it with the built-in close button."
    }
];

export const leftBorderAlertSubTitle = [
    {
        text: "Use the ",
        code: '.border-left-wrapper '
    },
    {
        text: 'to change border-left radius.'
    }
];

export const additionalAlertSubTitle = [
    {
        text: "Use the ",
        code: '.alert'
    },
    {
        text: ' utility class to quickly provide additional content within any alerts.'
    }
]

export const alertColorData: AlertColorType[] = [
    {
        data: [
            {
                text: 'Primary Alert',
                class: 'primary',
                alertText: 'primary alert'
            },
            {
                text: 'Secondary Alert',
                class: 'secondary',
                alertText:  'secondary alert'
            },
            {
                text: 'Success Alert',
                class: 'success',
                alertText: 'success alert' 
            },
            {
                text: 'Info Alert',
                class: 'info',
                alertText: 'info alert' 
            }
        ]
    },
    {
        data: [
            {
                text: 'Warning Alert',
                class: 'warning',
                alertText: 'warning alert' 
            },
            {
                text: 'Danger Alert',
                class: 'danger',
                alertText: 'danger alert' 
            },
            {
                text: 'Light Alert',
                class: 'light',
                alertText: 'light alert' 
            },
            {
                text: 'Dark Alert',
                class: 'dark',
                alertText: 'dark alert' 
            }
        ]
    }
]

export const alertLightColorData: AlertColorType[] = [
    {
        data: [
            {
                text: 'Primary Light Alert',
                class: 'light-primary',
                textClass: 'txt-primary',
                alertText: 'primary alert'
            },
            {
                text: 'Secondary Light Alert',
                class: 'light-secondary',
                textClass: 'txt-secondary',
                alertText: 'secondary alert'            
            },
            {
                text: 'Success Light Alert',
                class: 'light-success',
                textClass: 'txt-success',
                alertText: 'success alert'
            },
            {
                text: 'Info Light Alert',
                class: 'light-info',
                textClass: 'txt-info',
                alertText: 'info alert'
            }
        ]
    },
    {
        data: [
            {
                text: 'Warning Light Alert',
                class: 'light-warning',
                textClass: 'txt-warning',
                alertText: 'warning alert'
            },
            {
                text: 'Danger Light Alert',
                class: 'light-danger',
                textClass: 'txt-danger',
                alertText: 'danger alert'
            },
            {
                text: 'Light Light Alert',
                class: 'light-light',
                textClass: 'txt-dark',
                alertText: 'light alert'
            },
            {
                text: 'Dark Light Alert',
                class: 'light-dark',
                textClass: 'txt-dark',
                alertText: 'dark alert'
            }
        ]
    }
]

export const additionalAlertData: AdditionalAlertType[] = [
    {
        class: 'light-primary',
        head: 'Please! Check your notifications',
        headclass: 'txt-primary',
        text: 'The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.',
        subtext: 'The emergency notification system is free and is available in all 50 states.',
    },
    {
        class: 'light-secondary',
        head: 'Something went wrong! Please, chrome update.',
        headclass: 'txt-secondary',
        text: 'The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.',
        subtext: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
    },
    {
        class: 'light-success',
        head: 'Please! Hidden cameras were not installed.',
        headclass: 'txt-success',
        text: 'Due to increasingly accessible technology, hidden cameras have grown in popularity among regular people in recent years.',
        subtext: 'Consider moving clocks and plush animals from your area if you think they may be concealing cameras because they are both portable items.',
    }
]