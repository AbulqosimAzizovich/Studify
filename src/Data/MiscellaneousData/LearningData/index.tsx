import { CourseCheckboxProps } from "../../../Types/MiscellaneousType";

export const learningListData = [
    {
        id: 1,
        image: '1.jpg',
        date: '05',
        month: 'January 2023',
        title: 'Java Language',
        by: 'by: Paige Turner',
        hits: '15 Hits',
        paragraph: 'Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.'
    },
    {
        id: 2,
        image: '2.jpg',
        date: '10',
        month: 'March 2023',
        title: 'Web Development',
        by: 'by: Petey Cruiser',
        hits: '34 Hits',
        paragraph: 'Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services, and many more such applications and websites are being created every day.'
    },
];

export const learningGridData = [
    {
        id: 1,
        src: '3.jpg',
        title: 'This course is designed to start you on a path toward future studies in web development and design.'
    },
    {
        id: 2,
        src: '1.jpg',
        title: 'A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn.'
    },
    {
        id: 3,
        src: '4.jpg',
        title: 'User interface design (UI) is the design for machines and software, such as mobile devices, computers.'
    },
    {
        id: 4,
        src: '2.jpg',
        title: 'Spoken English Courses are pursued by candidates from all levels to improve their communication skills.'
    },
    {
        id: 5,
        src: '4.jpg',
        title: 'This course is designed to start you on a path toward future studies in web development and design.'
    },
    {
        id: 6,
        src: '3.jpg',
        title: 'A Web Development course belongs to the field of Computer Science and IT. It enables students to learn.'
    },
]

export const findCourseCheckbox: CourseCheckboxProps[] = [
    {
        id: 1,
        title: 'Categories',
        child: [
            {
                id: 1,
                type: 'checkbox',
                text: 'Accounting'
            },
            {
                id: 2,
                type: 'checkbox',
                text: 'Design'
            },
            {
                id: 3,
                type: 'checkbox',
                text: 'Development'
            },
            {
                id: 4,
                type: 'checkbox',
                text: 'Management'
            },
        ]
    },
    {
        id: 2,
        title: 'Duration',
        child: [
            {
                id: 5,
                type: 'checkbox',
                text: '0-50 hours'
            },
            {
                id: 6,
                type: 'checkbox',
                text: '50-100 hours'
            },
            {
                id: 7,
                type: 'checkbox',
                text: '100+ hours'
            },
        ]
    },
    {
        id: 3,
        title: 'Price',
        child: [
            {
                id: 8,
                type: 'radio',
                text: 'All Courses',
                name: "rdo-ani"
            },
            {
                id: 9,
                type: 'radio',
                text: 'Paid Courses',
                name: "rdo-ani",
            },
            {
                id: 10,
                type: 'radio',
                text: 'Free Courses',
                name: "rdo-ani",
                check: 'checked'
            },
        ]
    },
    {
        id: 4,
        title: 'Status',
        child: [
            {
                id: 11,
                type: 'checkbox',
                text: 'Registration',
            },
            {
                id: 12,
                type: 'checkbox',
                text: 'Progress',
            },
            {
                id: 13,
                type: 'checkbox',
                text: 'Completed',
            },
        ]
    },
];

export const categoriesData = [
    {
        id: 1,
        title: 'Design',
        child: [
            {
                id: 1,
                text: 'UI Design',
                value: 28
            },
            {
                id: 2,
                text: 'UX Design',
                value: 35
            },
            {
                id: 3,
                text: 'Interface Design',
                value: 17
            },
            {
                id: 4,
                text: 'User Experience',
                value: 26
            },
        ]

    },
    {
        id: 2,
        title: 'Development',
        child: [
            {
                id: 1,
                text: 'Frontend Development',
                value: 48
            },
            {
                id: 2,
                text: 'Backend Development',
                value: 19
            },
        ]
    },
];

export const upcomingCoursesData = [
    {
        id: 1,
        title: 'UX Development',
        anchorText: 'Development Team',
        value: 18,
        month: 'Dec',
        star: [
            { id: 1, class: 'star' },
            { id: 2, class: 'star' },
            { id: 3, class: 'star' },
            { id: 4, class: 'star' },
            { id: 5, class: 'star-half-o' },
        ]
    },
    {
        id: 2,
        title: 'Business Analyst',
        anchorText: 'Analyst Team',
        value: 28,
        month: 'Dec',
        star: [
            { id: 1, class: 'star' },
            { id: 2, class: 'star' },
            { id: 3, class: 'star' },
            { id: 4, class: 'star' },
            { id: 5, class: 'star' },
        ]
    },
    {
        id: 3,
        title: 'Web Development',
        anchorText: 'Designer',
        value: 5,
        month: 'Jan',
        star: [
            { id: 1, class: 'star' },
            { id: 2, class: 'star' },
            { id: 3, class: 'star' },
            { id: 4, class: 'star' },
            { id: 5, class: 'star-o' },
        ]
    },
];

export const commentBoxData = [
    {
        id: 1,
        src: 'comment.jpg',
        name: 'Jolio Mark',
        paragraph: 'The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.'
    },
    {
        id: 2,
        src: '9.jpg',
        name: 'John deo',
        paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        id: 3,
        src: '4.jpg',
        name: 'Mark Jolio',
        paragraph: 'Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.'
    },
];