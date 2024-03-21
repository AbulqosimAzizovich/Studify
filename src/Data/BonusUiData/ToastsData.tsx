import { ToastPlacementType, ToastType } from "../../Types/BonusUiType";

export const liveToastSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast and given directions. ',
        code: '[top-0/bottom-0/start-0/end-0]'
    }
];

export const colorsSchemeSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast. ',
    }
];

export const stackingToastsSubTitle = [
    {
        text: 'You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.',
        code: ' [toast-*] '
    },
    {
        text: 'through change icons colors.',
    },
];

export const translucentToastSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast and given directions. ',
        code: '[toast-*]'
    },
    {
        text: 'through change icons colors.'
    }
];

export const toastPlacementSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast. ',
        code: '.form-select'
    },
    {
        text: 'through select any positions.'
    }
]

export const stackingToastsData: ToastType[] = [
    { id: 2, iconColor: 'warning', header: 'Roxo theme', time: '2 sec ago', text: "Hello, I'm a UX-designer." },
    { id: 3, iconColor: 'danger', header: 'Zeta theme', time: '6 min ago', text: "Hello, I'm a Software developer." },
    { id: 4, iconColor: 'success', header: 'Voxo theme', time: '3 sec ago', text: "Hello, I'm a professional web-designer." },
  ];
  
  export const translucentToastsData: ToastType[] = [
    { id: 2, iconColor: 'dark', header: 'Koho theme', timeColor: 'txt-muted', time: '1 sec ago', text: "Hello, I'm a full-stack developer." },
    { id: 3, iconColor: 'secondary', header: 'Fastkart theme', timeColor: 'txt-danger', time: 'just now', text: "Hello, I'm a UX-designer." },
    { id: 4, iconColor: 'success', header: 'Oslo theme', timeColor: 'txt-muted', time: '44 min ago', text: "Hello, I'm a penetration-tester." },
  ];

  export const toastPlacementOptions: ToastPlacementType[] = [
    { value: '', label: 'Select a position...' },
    { value: 'top-0 start-0', label: 'Top left' },
    { value: 'top-0 start-50 translate-middle-x', label: 'Top center' },
    { value: 'top-0 end-0', label: 'Top right' },
    { value: 'top-50 start-0 translate-middle-y', label: 'Middle left' },
    { value: 'top-50 start-50 translate-middle', label: 'Middle center' },
    { value: 'top-50 end-0 translate-middle-y', label: 'Middle right' },
    { value: 'bottom-0 start-0', label: 'Bottom left' },
    { value: 'bottom-0 start-50 translate-middle-x', label: 'Bottom center' },
    { value: 'bottom-0 end-0', label: 'Bottom right' },
  ];