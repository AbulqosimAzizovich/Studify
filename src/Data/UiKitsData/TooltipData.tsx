import { HtmlTooltipType, ModalcommonType, TooltipType } from "../../Types/UiKitsType";

export const basicTooltipSubTitle = [
    {
        text: 'Use the ',
        code: 'data-bs-title'
    },
    {
        text: ' to change tooltip title and ',
        code: 'data-bs-toggle'
    },
    {
        text: " to add tooltip attribute."
    }
];

export const coloredTooltipSubTitle = [
    {
        text: 'Use the ',
        code: 'btn- *'
    },
    {
        text: ' to change dark background color and ',
        code: "data-bs-placement='*' "
    },
    {
        text: "to tooltip positions change."
    }
];

export const tooltipDirectionSubTitle = [
    {
        text: 'Use the ',
        code: 'btn- *'
    },
    {
        text: ' to change dark background color and',
        code: " data-bs-placement='*'"
    },
    {
        text: "[top/right/bottom/left] to tooltip direction change."
    }
];

export const htmlTooltipSubTitle = [
    {
        text: 'Use the ',
        code: 'bg-*-light'
    },
    {
        text: ' to change light background color and ',
        code: "data-bs-title "
    },
    {
        text: " to the content under the HTML tag."
    }
];

export const filledTooltipSubTitle = [
    {
        text: 'Tooltip in hover effect through fill dark color.',
        code: '[.btn-outline-*]'
    },
    {
        text: '. and',
        code: "data-bs-title "
    },
    {
        text: "to the content under the HTML Tag."
    }
];

export const colorTooltipData: ModalcommonType[] = [
    {
        class: 'primary',
        text: 'Primary'
    },
    {
        class: 'secondary',
        text: 'Secondary'
    },
    {
        class: 'success',
        text: 'Success'
    },
    {
        class: 'warning text-black',
        text: 'Warning'
    },
    {
        class: 'danger',
        text: 'Danger'
    }
]

export const tooltipPosition: TooltipType[] = [
    {
        class: 'primary',
        text: 'Tooltip on top',
        position: 'top'
    },
    {
        class: 'secondary',
        text: 'Tooltip on right',
        position: 'right'
    },
    {
        class: 'success',
        text: 'Tooltip on bottom',
        position: 'bottom'
    },
    {
        class: 'warning',
        text: 'Tooltip on left',
        position: 'left'
    }
]

export const htmlTooltipData: HtmlTooltipType[] = [
    {
        class: 'primary',
        text: 'Notifications Received',
        tooltip: <><em>Thank</em> <u>you</u></>
    },
    {
        class: 'warning',
        text: 'Last Warning',
        tooltip: <><b>Thank</b> <em>you</em></>
    },
    {
        class: 'danger',
        text: "It's Danger",
        tooltip: <><em>Thank</em> <u>you</u></>
    },
    {
        class: 'info',
        text: 'Coming soon',
        tooltip: <><b>Thank</b> <em>you</em></>
    }
]

export const flippedTooltipData: TooltipType[] = [
    {
        class: 'primary',
        text: 'Tooltip Primary',
    },
    {
        class: 'secondary',
        text: 'Tooltip Secondary',
    },
    {
        class: 'success',
        text: 'Tooltip Success',
    },
    {
        class: 'info',
        text: 'Tooltip Info',
    }
]
