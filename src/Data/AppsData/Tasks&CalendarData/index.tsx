export const viewTaskNav = [
    {
        id: 1,
        title: 'Created by me',
    },
    {
        id: 2,
        title: "Today's Tasks",
    },
    {
        id: 3,
        title: 'Delayed Tasks',
    },
    {
        id: 4,
        title: 'Upcoming Tasks',
    },
    {
        id: 5,
        title: 'This week tasks',
    },
    {
        id: 6,
        title: 'This month tasks',
    },
    {
        id: 7,
        title: 'Assigned to me',
    },
    {
        id: 8,
        title: 'My tasks',
    },
];

export const tagsTaskNav = [
    {
        id: 9,
        title: 'notification',
    },
    {
        id: 10,
        title: "Newsletter",
    },
    {
        id: 11,
        title: 'Business',
    },
    {
        id: 12,
        title: 'Holidays',
    },
];

export const timeList = ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];

export const taskLists = [
    {
        id: 1,
        title: "Client meeting",
        collection: "General",
        description: "Documentation that is used to explain regarding some attributes of an object.",
    },
    {
        id: 2,
        title: "Plan webinar",
        collection: "General",
        description: "kanban board is one of the tools that can be used to implement kanban to manage.",
    },
    {
        id: 3,
        title: "Email newsletter",
        collection: "General",
        description: "There is some Console error in user profile page.",
    },
    {
        id: 4,
        title: "Publish podcast",
        collection: "General",
        description: "Clone the theme test data file from the GitHub repository.",
    },
    {
        id: 5,
        title: "Lunch website",
        collection: "General",
        description: "Documentation that is used to explain regarding some attributes of an object to the client.",
    },
    {
        id: 6,
        title: "Client meeting",
        collection: "General",
        description: "Digital News Report shows that podcasting is now a worldwide that has become one of the hottest topic.",
    },
    {
        id: 7,
        title: "Plan webinar",
        collection: "General",
        description: "There are many tools available for testing websites, we’ve chosen classics: Chrome dev tools.",
    }
]


//calendar data
export const calendarInitialState = {
    calendarEvents: [
        {
            title: 'Atlanta Monster',
            start: new Date('2022-04-04 00:00'),
            id: '99999998',
        },
        {
            title: 'My Favorite Murder',
            start: new Date('2022-04-05 00:00'),
            id: '99999999',
        },
    ],
    events: [
        { title: 'Birthday Party', id: '1', icon: 'birthday-cake' },
        { title: 'Meeting With Team.', id: '2', icon: 'user' },
        { title: 'Tour & Picnic', id: '3', icon: 'plane' },
        { title: 'Reporting Schedule', id: '4', icon: 'file-text' },
        { title: 'Lunch & Break', id: '5', icon: 'briefcase' },
    ],
};