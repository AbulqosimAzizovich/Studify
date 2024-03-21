import { AvatarGroupType, AvatarSizetype, AvatarStatusType } from "../../Types/UiKitsType"

export const sizesSubTitle = [
    {
        text: "You can change the size of avatar using ",
        code: '.img- *  (70/80/90/100)'
    },
    {
        text: ' class.'
    }
];

export const statusSubTitle = [
    {
        text: "Using ",
        code: ' .status-* (online/offline/dnd)'
    },
    {
        text: ' class you can set the status of avatar.'
    }
];

export const shapesSubTitle = [
    {
        text: "Using the",
        code: '.b-r-* (8/30/35/25)'
    },
    {
        text: ' class you can set the shapes of avatar.'
    }
];

export const ratioSubTitle = [
    {
        text: "Give the shape to avatar using ",
        code: '.radio'
    },
    {
        text: ' and',
        code: ' img-* (50/70/80/90/100)'
    },
    {
        text: ' class.'
    }
];

export const groupSubTitle = [
    {
        text: "You can set the group of avatars like ",
        code: '.img-* (40/50/60/80/100) '
    },
    {
        text: 'and',
        code: ' .b-r-* (8/30/35)'
    },
    {
        text: '.'
    }
]

export const avatarSizeData: AvatarSizetype[] = [
    {
        class: 'img-100 rounded-circle',
        image: 'avtar/3.jpg'
    },
    {
        class: 'img-90 rounded-circle',
        image: 'avtar/4.jpg'
    },
    {
        class: 'img-80 rounded-circle',
        image: 'avtar/7.jpg'
    },
    {
        class: 'img-70 rounded-circle',
        image: 'avtar/11.jpg'
    }
]

export const avatarStatusData: AvatarStatusType[] = [
    {
        class: 'img-100 rounded-circle',
        image: 'user/1.jpg',
        status: 'status-online'
    },
    {
        class: 'img-90 rounded-circle',
        image: 'avtar/16.jpg',
        status: 'status-dnd'
    },
    {
        class: 'img-80 rounded-circle',
        image: 'avtar/7.jpg',
        status: 'status-offline'
    },
    {
        class: 'img-70 rounded-circle',
        image: 'avtar/3.jpg',
        status: 'status-online'
    }
]

export const avatarShapeData: AvatarSizetype[] = [
    {
        class: 'img-100 b-r-8',
        image: 'avtar/4.jpg'
    },
    {
        class: 'img-90 b-r-30',
        image: 'avtar/16.jpg'
    },
    {
        class: 'img-80 b-r-35',
        image: 'avtar/3.jpg'
    },
    {
        class: 'img-70 rounded-circle',
        image: 'avtar/11.jpg'
    }
]

export const avatarRatioData: AvatarSizetype[] = [
    {
        class: 'b-r-8 img-100',
        image: 'avtar/11.jpg'
    },
    {
        class: 'b-r-8 img-90',
        image: 'avtar/4.jpg'
    },
    {
        class: 'b-r-8 img-80',
        image: 'user/1.jpg'
    },
    {
        class: 'b-r-8 img-70',
        image: 'avtar/16.jpg'
    },
    {
        class: 'b-r-8 img-50',
        image: 'avtar/7.jpg'
    }
];

export const avatarGroupData: AvatarGroupType[] = [
    {
        id: 1,
        child: [
            {
                id: 1,
                class: 'img-100 b-r-8',
                image: 'avtar/4.jpg' 
            },
            {
                id: 2,
                class: 'img-80 b-r-30',
                image: 'avtar/16.jpg' 
            },
            {
                id: 3,
                class: 'img-50 b-r-35',
                image: 'avtar/3.jpg' 
            },
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                class: 'img-60 rounded-circle',
                image: 'avtar/16.jpg' 
            },
            {
                id: 2,
                class: 'img-80 b-r-8',
                image: 'user/1.jpg' 
            },
            {
                id: 3,
                class: 'img-60 rounded-circle',
                image: 'avtar/16.jpg' 
            },
        ]
    },
    {
        id: 3,
        child: [
            {
                id: 1,
                class: 'img-40 rounded-circle',
                image: 'user/3.jpg' 
            },
            {
                id: 2,
                class: 'img-40 rounded-circle',
                image: 'user/5.jpg' 
            },
            {
                id: 3,
                class: 'img-40 rounded-circle',
                image: 'user/1.jpg' 
            },
        ]
    },
]