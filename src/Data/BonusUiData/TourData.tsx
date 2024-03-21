import { StepType } from '@reactour/tour'
import { ProfileLikeType, TourDataType } from '../../Types/BonusUiType';

export const toursteps: StepType[] = [
    {
        selector: '.step1',
        content: 'This is Profile image',
        position: "right"
    },
    {
        selector: '.step2',
        content: 'Change Profile image here',
        position: "top"

    },
    {
        selector: '.step3',
        content: 'This is your Social details',
    },
    {
        selector: '.step4',
        content: 'This is your Your detail',
    },
    {
        selector: '.step5',
        content: 'This is the your first Post',
    },
    {
        selector: '.step6',
        content: 'This is the your Last Post'
    },
    {
        selector: '.step7',
        content: 'This is your follower details'
    },
    {
        selector: '.step8',
        content: 'This is your profile image'
    }
];

export const tourSocialData: TourDataType[] = [
    {
        link: 'https://www.facebook.com/',
        icon: 'facebook'
    },
    {
        link: 'https://accounts.google.com/',
        icon: 'google-plus'
    },
    {
        link: 'https://twitter.com/',
        icon: 'twitter'
    },
    {
        link: 'https://www.instagram.com/',
        icon: 'instagram'
    },
    {
        link: 'https://rss.app/',
        icon: 'rss'
    }
];

export const profileLikeData: ProfileLikeType[] = [
    {
        class: 'list-inline-item b-r-gray pe-3',
        icon: 'heart  ',
        text: 'Like'
    },
    {
        class: 'list-inline-item b-r-gray pe-3',
        icon: 'comment  ',
        text: 'Comment'
    },
    {
        class: 'list-inline-item',
        icon: 'paper-plane  ',
        text: 'Share'
    }
]
