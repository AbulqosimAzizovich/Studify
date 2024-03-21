//form wizard 2

export const itemsNameList = ["Featured Items", "Newsletters", "Notifications", "Blogs"];
export const listOfYears: number[] = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035]

export const customNavData = [
    { id: 1, icon: "fa-user", title: "Personal info" },
    { id: 2, icon: "fa-chain-broken", title: "Connect bank account" },
    { id: 3, icon: "fa-group", title: "Inquiries" },
    { id: 4, icon: "fa-group", title: "Completed " },
];

export const popularBanksList = [
    { image: "hdfc.png", bankName: "ABC BANK" },
    { image: "Bank-of-Baroda.png", bankName: "XYZ BANK" },
    { image: "idbi.png", bankName: "PQR BANK" },
    { image: "rbl.png", bankName: "DEF BANK" },
    { image: "us-bank.png", bankName: "MNO BANK" },
    { image: "axis.png", bankName: "WXY BANK" },
    { image: "SCB.png", bankName: "STD BANK" },
];

export const businessNavData = [
    { id: 1, title: "Choose account" },
    { id: 2, title: "Business settings" },
    { id: 3, title: "Contact details" },
    { id: 4, title: "Pay details" },
    { id: 5, title: "completed" },
];

export const selectAccountTypeData = [
    { icon: "fa-university", title: "Business" },
    { icon: "fa-user", title: "Personal " },
];

export const variationBoxData = [
    { title: "Tivo", details: "2-3 Members" },
    { title: "Dunzo", details: "4-5 Members" },
    { title: "Multikart", details: "2 Member" },
    { title: "Roxo", details: "1 Member" },
];

export const numberingWizardSubTitle = [
    { text: "Fill up your details and proceed next steps." },
];

export const studentValidationFormSubTitle = [
    { text: "Please make sure fill all the filed before click on next button." },
];
export const verticalValidationWizardSubTitle = [
    { text: "Fill up your true details and next proceed." },
];
export const shippingFormSubTitle = [
    { text: "Fill up your true details and next proceed." },
];

export const stepperHorizontalData = ["Basic Info", "Cart Info", "Feedback", "Finish"];
export const paymentModeName = ["Visa", "MasterCard", "paypal"];
export const netBankingFormBankList = [
    { id: 1, bankList: [{id: 1, text: "Industrial & Commercial Bank"}, {id: 2, text: "Agricultural Bank"}, {id: 3, text: "JPMorgan Chase & Co."}] },
    { id: 2, bankList: [{id: 4, text: "Construction Bank Corp."}, {id: 5, text: "Bank of America"}, {id: 6, text: "HDFC Bank"}] },
]

export const countryData = ['Select Country', 'Africa', 'India', 'Indonesia', 'Netherlands', 'U.K', 'U.S'];

export const verticalWizardNav = [
    {
        id: 1,
        class: 'contact',
        icon: 'user',
        title: 'Your Info',
        subTitle: 'Add your details',
    },
    {
        id: 2,
        class: 'cart',
        icon: 'chain-broken',
        title: 'Cart Info',
        subTitle: 'Add your a/c details',
    },
    {
        id: 3,
        class: 'banking',
        icon: 'group',
        title: 'Net Banking',
        subTitle: 'Choose your bank',
    },
];

export const shippingFormNav = [
    {
        id: 1,
        icon: "fa-user",
        title: "Billing",
    },
    {
        id: 2,
        icon: "fa-truck",
        title: "Shipping",
    },
    {
        id: 3,
        icon: "fa-money",
        title: "Payment",
    },
    {
        id: 4,
        icon: "fa-check-square",
        title: "Finish",
    },
];

export const homeAndOfficeAddressData = [
    {
        value: "shipping-choose1",
        label: "Home",
        name: "Filomena Green ",
        adress: "2211 Fruitville Rd, Sarasota, Florida, US 34237",
        contact: "(941) 321-5643",
    },
    {
        value: "shipping-choose2",
        label: "Work",
        name: "Ms. Ila Runte DDS",
        adress: " 1531 E 23rd St S, Independence, Mississippi, US 64055",
        contact: "(816) 252-4500",
        check: 'checked'
    },
];

export const shippingMethodsData = [
    {
        value: "standardDelivery",
        label: "Standard Delivery - Free",
        details: "Estimated 5-7 days shipping",
    },
    {
        value: "expressDelivery",
        label: "Express Delivery - $24",
        details: "Estimated 1-2 days shipping",
        check: 'checked'
    },
];

export const currentCartTableFooterData = [
    { footerTittle: "Sub Total :", price: "1284.00" },
    { footerTittle: "Discount :", price: "20.00" },
    { footerTittle: "Shipping Charge :", price: "100.78" },
    { footerTittle: "Tax :", price: "205.34" },
    { footerTittle: "Total (USD) :", price: "1569.7" },
];

export const currentCartTableBodyData = [
    {
        imagePath: "product/13.png",
        productName: "T-shirt",
        productSum: "$98 * 2",
        price: "$400",
    },
    {
        imagePath: "email-template/4.png",
        productName: "Headphone",
        productSum: "$4*2",
        price: "$450",
    },
    {
        imagePath: "product/2.png",
        productName: "T-shirt ",
        productSum: "$10*2",
        price: "$234",
    },
    {
        imagePath: "dashboard-2/product/2.png",
        productName: "Chairs ",
        productSum: "$98*2",
        price: "$200",
    },
];

//two-factor
export const modalOneData = [
    {
        icon: "fa-spin fa-cog",
        title: "2FA Authenticator",
        description: "Obtain codes from a authy/google authenticator/ios 15 etc.",
    },
    {
        icon: "fa-comments",
        title: "SMS",
        description: "The backup login method will be sent to you via SMS if you require it.",
    },
];

export const otpGenerate = [1, 2, 3, 4, 5, 6];
