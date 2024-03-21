import { CalendarItemType, ReactstrapCalendarItem, CustomSwitchDataItem, DefaultTouchspinType, IconsUncheckedBordersSwitchProp, SwitchSizingIconsType, VariationSwitch1, VariationSwitch2 } from "../../../Types/FormType";
import { BordersIconsTitle, IconsSwitchTitle, SwitchIconsTitle, SwitchSizingTitle, UncheckedSwitchTitle } from "../../../Utils/Constants";


export const reactstrapCalendarData: ReactstrapCalendarItem[] = [
    {
        id: 1,
        labelText: 'Date and time',
        type: CalendarItemType.DateTimeLocal,
        value: '2023-05-03T18:45:00',
    },
    {
        id: 2,
        labelText: 'Date',
        type: CalendarItemType.Date,
        value: '2023-05-01',
    },
    {
        id: 3,
        labelText: 'Month',
        type: CalendarItemType.Month,
        value: '2023-01',
    },
    {
        id: 4,
        labelText: 'Week',
        type: CalendarItemType.Week,
        value: '2023-W09',
    },
    {
        id: 5,
        labelText: 'Time',
        type: CalendarItemType.Time,
        value: '21:45:00',
    },
];

//touchspin
export const touchspinSubTitle = [
    {
        text: "Use the",
        code: ".decrement-touchspin ",
    },
    {
        text: "and",
        code: ".increment-touchspin ",
    },
    { text: "class." },
];

export const defaultTouchspinData: DefaultTouchspinType[] = [
    { id: 1, color: 'primary' },
    { id: 2, color: 'secondary' },
    { id: 3, color: 'success' },
    { id: 4, color: 'danger' },
    { id: 5, color: 'warning' },
    { id: 6, color: 'info' },
    { id: 7, color: 'dark' },
]

//switch
export const customSwitchSubTitle = [
    {
        text: "A switch has the markup of a custom checkbox but uses the .form-switch class to render a ",
        code: "toggle switch",
    },
    {
        text: ".",
    },
];

export const disabledOutlineSwitchSubTitle = [
    {
        text: "Use the",
        code: ".switch-outline ",
    },
    {
        text: "class through created outline. ",
    },
];

export const variationOfSwitchSubTitle = [
    {
        text: "Use the",
        code: ".tgl-skewed/tgl-flip",
    },
    {
        text: " class through created variations. ",
    },
];

export const switchSizingHeadingSubTitle = [
    {
        text: "Use the",
        code: ".switch-sm",
    },
    {
        text: "and",
        code: ".switch-lg ",
    },
    { text: "class through defined switch sizing." },
];

export const switchSizingWithIconsHeadingSubTitle = [
    {
        text: "Use the",
        code: ".icon-state ",
    },
    {
        text: "class through visible icons in switches.",
    },
];

export const customSwitchData: CustomSwitchDataItem[] = [
    {
        id: 1,
        colClass: 'col-sm-6',
        child: [
            { id: 1, color: 'primary' },
            { id: 2, color: 'secondary' },
            { id: 3, color: 'success' },
            { id: 4, color: 'danger' },
            { id: 5, color: 'warning' },
            { id: 6, color: 'info' },
            { id: 7, color: 'dark' },
        ]
    },
    {
        id: 2,
        colClass: 'col-sm-6',
        cardClass: 'radius-none',
        formsize: 'default-square',
        child: [
            { id: 1, color: 'primary' },
            { id: 2, color: 'secondary' },
            { id: 3, color: 'success' },
            { id: 4, color: 'danger' },
            { id: 5, color: 'warning' },
            { id: 6, color: 'info' },
            { id: 7, color: 'dark' },
        ]
    },
    {
        id: 3,
        cardClass: 'common-flex',
        child: [
            { id: 1, color: 'primary', disabled: 'disabled' },
            { id: 2, color: 'secondary', disabled: 'disabled' },
            { id: 3, color: 'success', disabled: 'disabled' },
            { id: 4, color: 'danger', disabled: 'disabled' },
            { id: 5, color: 'warning', disabled: 'disabled' },
            { id: 6, color: 'info', disabled: 'disabled' },
            { id: 7, color: 'dark', disabled: 'disabled' },
        ]
    },
];

const iconsSwitchSubTitle = [
    {
        text: "Use the",
        code: ".switch-state ",
    },
    {
        text: "and",
        code: "icon-state ",
    },
    {
        text: "through defined icons switches.",
    },
];

const unCheckedSwitchSubTitle = [
    {
        text: "Use the",
        code: ".bg-*",
    },
    {
        text: "class through created default switches.",
    },
];

const bordersWithIconsSubTitle = [
    {
        text: "Use the",
        code: ".switch-outline ",
    },
    {
        text: "and",
        code: ".icon-state",
    },
    { text: "class through created outline and icons. " },
];

export const iconsUncheckedBordersSwitchData: IconsUncheckedBordersSwitchProp[] = [
    {
        id: 1,
        colClass: 'col-sm-6',
        title: IconsSwitchTitle,
        subTitle: iconsSwitchSubTitle,
        child: [
            {
                id: 1,
                mediaBodyClass: 'icon-state',
                color: 'primary',
                labelText: 'Primary Switch',
            },
            {
                id: 2,
                mediaBodyClass: 'icon-state',
                color: 'secondary',
                labelText: 'Secondary Switch',
            },
            {
                id: 3,
                mediaBodyClass: 'icon-state',
                color: 'success',
                labelText: 'Success Switch',
            },
            {
                id: 4,
                mediaBodyClass: 'icon-state',
                color: 'danger',
                labelText: 'Danger Switch',
            },
            {
                id: 5,
                mediaBodyClass: 'icon-state',
                color: 'warning',
                labelText: 'Warning Switch',
            },
            {
                id: 6,
                mediaBodyClass: 'icon-state',
                color: 'info',
                labelText: 'Info Switch',
            },
            {
                id: 7,
                mediaBodyClass: 'icon-state',
                color: 'dark',
                labelText: 'Dark Switch',
            }
        ]
    },
    {
        id: 2,
        colClass: 'col-sm-6',
        title: UncheckedSwitchTitle,
        subTitle: unCheckedSwitchSubTitle,
        child: [
            {
                id: 1,
                color: 'primary',
                labelText: 'Unchecked Primary Switch',
            },
            {
                id: 2,
                color: 'secondary',
                labelText: 'Unchecked Secondary Switch',
            },
            {
                id: 3,
                color: 'success',
                labelText: 'Unchecked Success Switch',
            },
            {
                id: 4,
                color: 'danger',
                labelText: 'Unchecked Danger Switch',
            },
            {
                id: 5,
                color: 'warning',
                labelText: 'Unchecked Warning Switch',
            },
            {
                id: 6,
                color: 'info',
                labelText: 'Unchecked Info Switch',
            },
            {
                id: 7,
                color: 'dark',
                labelText: 'Unchecked Dark Switch',
            }
        ]
    },
    {
        id: 3,
        title: BordersIconsTitle,
        subTitle: bordersWithIconsSubTitle,
        child: [
            {
                id: 1,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'primary',
                labelText: 'Bordered Primary Switch',
            },
            {
                id: 2,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'secondary',
                labelText: 'Bordered Secondary Switch',
            },
            {
                id: 3,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'success',
                labelText: 'Bordered Success Switch',
            },
            {
                id: 4,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'danger',
                labelText: 'Bordered Danger Switch',
            },
            {
                id: 5,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'warning',
                labelText: 'Bordered Warning Switch',
            },
            {
                id: 6,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'info',
                labelText: 'Bordered Info Switch',
            },
            {
                id: 7,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'dark',
                labelText: 'Bordered Dark Switch',
            }
        ]
    },
];

export const variationSwitchesData1: VariationSwitch1[] = [
    {
        id: 1,
        class: 'skewed',
        on: 'ON',
        off: 'OFF',
        text: 'Skewed'
    },
    {
        id: 2,
        class: 'flip',
        on: 'Yeah!',
        off: 'Nope',
        text: 'Flip'
    }
];
export const variationSwitchesData2: VariationSwitch2[] = [
    {
        id: 1,
        iconClass: 'icon-state',
        color: 'warning',
        text: 'Checked'
    },
    {
        id: 2,
        color: 'success',
        text: 'Flat'
    }
];

const switchSizingSubTitle = [
    {
        text: "Use the",
        code: ".switch-sm",
    },
    {
        text: " and ",
        code: ".switch-lg ",
    },
    { text: "class through defined switch sizing." },
];

const switchSizingWithIconsSubTitle = [
    {
        text: "Use the",
        code: ".icon-state ",
    },
    {
        text: "class through visible icons in switches.",
    },
];

export const switchSizingIconsData: SwitchSizingIconsType[] = [
    {
        id: 1,
        title: SwitchSizingTitle,
        subTitle: switchSizingSubTitle,
        child: [
            {
                id: 1,
                labelText: 'Small Size',
                size: 'switch-sm',
                check: 'checked',
            },
            {
                id: 2,
                labelText: 'Small Size Unhecked',
                size: 'switch-sm',
            },
            {
                id: 3,
                labelText: 'Normal Size',
                check: 'checked',
            },
            {
                id: 4,
                labelText: 'Normal Unhecked',
            },
            {
                id: 5,
                labelText: 'Disabled State',
                disabled: 'disabled',
            },
            {
                id: 6,
                labelText: 'Large Size',
                size: 'switch-lg',
                check: 'checked',
            },
            {
                id: 7,
                labelText: 'Large Unhecked',
                size: 'switch-lg',
            },
            {
                id: 8,
                labelText: 'Disabled',
                size: 'switch-lg',
                disabled: 'disabled',
            },
        ]
    },
    {
        id: 2,
        title: SwitchIconsTitle,
        subTitle: switchSizingWithIconsSubTitle,
        child: [
            {
                id: 1,
                labelText: 'Small Size',
                size: 'switch-sm icon-state',
                check: 'checked',
            },
            {
                id: 2,
                labelText: 'Small Size Unhecked',
                size: 'switch-sm icon-state',
            },
            {
                id: 3,
                labelText: 'Normal Size',
                size: 'icon-state',
                check: 'checked',
            },
            {
                id: 4,
                labelText: 'Normal Unhecked',
                size: 'icon-state',
            },
            {
                id: 5,
                labelText: 'Disabled With Icon',
                size: 'icon-state',
                disabled: 'disabled',
            },
            {
                id: 6,
                labelText: 'Large Size',
                size: 'switch-lg icon-state',
                check: 'checked',
            },
            {
                id: 7,
                labelText: 'Large Unhecked',
                size: 'switch-lg icon-state',
            },
            {
                id: 8,
                labelText: 'Disabled',
                size: 'switch-lg icon-state',
                disabled: 'disabled',
            },
        ]
    }
];

//typeahead
export const basicTypeaheadSubTitle = [
    {
        text: "This is the simple demo for Typeahead.",
    },
];
export const customTemplateSubTitle = [
    {
        text: "Custom templates give you full control over how suggestions get rendered",
    },
];
export const multipleSelectionSubTitle = [
    {
        text: "Two datasets that are prefetched, stored, and searched on the client. Highlighting is enabled.",
    },
];
export const prefetchSubTitle = [
    {
        text: "Prefetched data is fetched and processed on initialization",
    },
];
export const remoteTypeaheadSubTitle = [
    {
        text: "Remote data is only used when the data provided by local and prefetch is insufficient",
    },
];
export const bloodHoundSubTitle = [
    {
        text: "Bloodhound offers advanced functionalities such as prefetching and backfilling with remote data.",
    },
];
export const scrollableDropdownSubTitle = [
    {
        text: "Dataset shows in scrollable dropdown menu.",
    },
];
export const rTlSupportSubTitle = [
    {
        text: "Dataset shows in Right Side.",
    }
]
