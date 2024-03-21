import { ChangeEvent } from "react";
import { ActionMeta, SingleValue } from "react-select";

export interface CommonCardFooterProps {
    footerClass?: string;
    color1: string;
    btn2Class?: string;
    btn1Class?: string;
    color2: string;
}
export interface VariationRadioItem {
    id: number;
    colClass?: string;
    title: string;
    child: RadioOption[];
}

interface RadioOption {
    id: number;
    labelText: string;
    image?: string;
    check?: string;
    name: string;
    icon?: string;
    iconColor?: string;
}
export interface CommonCheckboxItem {
    id: number;
    text: string;
    check?: string;
}
export interface UpgradeCheckboxItem extends CommonCheckboxItem {
    sales: string;
}

export interface ActivitiesCheckboxItem extends CommonCheckboxItem {
    color: string;
}

export interface DefaultStyleItem {
    id: number;
    color: string;
    badgeTitle: string;
    digits: string;
    text: string;
    check?: string;
}

export interface FormData {
    firstName: string;
    lastName: string;
    username: string;
    city: string;
    zip: string;
    password: string;
    file: string;
    description: string;

}
export interface Option {
    value: string;
    label: string;
}
export interface DropItemProps {
    selectedOption: null | string;
    setSelectedOption: (option: null | string) => void;
    validate: boolean;
    tip?: boolean;
    colClass: string;
    className?: string;
}

export interface DropItemChangeProp {
    (newValue: SingleValue<Option> | null, actionMeta: ActionMeta<Option>): void;
}
export interface RadioPayMethodProps {
    colClass: string;
}

export interface CustomFormSelectProps {
    inputId: string;
    options: string[];
    title: string;
}

export interface ButtonDropdownListProps {
    color: string;
    title?: string;
    options: string[];
    outline?: boolean;
    divider?: boolean;
    split?: boolean;
    span?: boolean;
}

export interface TouchspinProp {
    color: string;
    arrowIcon?: boolean;
    outline?: boolean;
    btnClass?: string;
}

export interface DefaultTouchspinType {
    id: number;
    color: string;
}

export interface CommonPrefixAndPostfixProp {
    postIcon?: boolean
    preIcon?: boolean
    preButton?: boolean
    PostButton?: boolean
    color?: boolean
}

interface SwitchItem {
    id: number;
    color: string;
    disabled?: string;
}

export interface CustomSwitchDataItem {
    id: number;
    colClass?: string;
    cardClass?: string;
    formsize?: string;
    child: SwitchItem[];
}

interface IconSwitchItem {
    id: number;
    mediaBodyClass?: string;
    color: string;
    labelText: string;
}
interface ObjectType {
    text?: string;
    code?: string;
};

export interface IconsUncheckedBordersSwitchProp {
    id: number;
    colClass?: string;
    title: string;
    subTitle: ObjectType[];
    child: IconSwitchItem[];
}

export interface VariationSwitch1 {
    id: number;
    class: string;
    on: string;
    off: string;
    text: string;
}

export interface VariationSwitch2 {
    id: number;
    iconClass?: string;
    color: string;
    text: string;
}

interface SwitchSizingIconItem {
    id: number;
    labelText: string;
    size?: string;
    check?: string;
    disabled?: string;
}

export interface SwitchSizingIconsType {
    id: number;
    title: string;
    subTitle: ObjectType[];
    child: SwitchSizingIconItem[];
}

export interface CommonTypeaheadProps {
    id: string;
    title: string;
    subTitle: ObjectType[];
    divId: string;
    options: string[] | OptionType[];
    placeholder: string;
    labelKey?: string;
    className?: string;
}

export interface OptionType {
    name: string;
    header?: boolean;
    divider?: boolean;
}

export interface MultipleSectionDataItem {
    name: string;
    divider?: boolean;
    header?: boolean;
};

export interface InputValues {
    email: string;
    password: string;
    checkbox: boolean;
}

export interface CommonSelectDropdownProps {
    inputClass?: string;
    options: string[];
    title: string;
    multiple?: boolean;
    optionClass?: string;
}

export interface CommonOpenMenuProps {
    inputId: string;
    colClass: string;
    options: string[];
}

interface CheckboxItem {
    id: string;
    labelText: string;
    check?: string;
    disabled?: string;
    groupClass?: string;
}

export interface CheckboxGroup {
    id: number;
    title: string;
    child: CheckboxItem[];
}

export interface IconCheckboxItem {
    id: string;
    icon: string;
    text: string;
    check?: string;
}

export interface SolidBorderStyleItem {
    id: number;
    image: string;
    spanText: string;
    color?: string;
    check?: string;
}

export interface VerticalStyleItem {
    id: number;
    megaTitle: string;
    child: ChildFormItem[];
}

export interface ChildFormItem {
    id: number;
    color: string;
    name: string;
    mediaBodyClass?: string;
    badgeTitle: string;
    digits: string;
    spanClass?: string;
    star?: StarItem[];
    spanText: string;
    colClass?: string;
    cardClass?: string;
    check?: string;
}

export interface StarItem {
    id: number;
    icon: string;
    class?: string;
}

export enum CalendarItemType {
    DateTimeLocal = 'datetime-local',
    Date = 'date',
    Month = 'month',
    Week = 'week',
    Time = 'time',
}

export interface ReactstrapCalendarItem {
    id: number;
    labelText: string;
    type: CalendarItemType;
    value: string;
}

export interface MultiplesDateOptions {
    validatedValue: string | string[];
    input: HTMLElement;
    isTyping: boolean;
}

export interface ImageWithCheckboxItem {
    id: number;
    title: string;
    image: string;
    check?: string;
    disabled?: string;
}

export interface BorderedRadioItem {
    id: number;
    color: string;
    check?: string;
    text: string;
}

interface InlineCheckboxItem {
    id: number;
    type: 'checkbox';
    check?: string;
    disabled?: string;
    text: string;
    formGroupClass?: string;
}
interface InlineRadioItem {
    id: number;
    type: 'radio';
    check?: string;
    disabled?: string;
    name: string;
    text: string;
    formGroupClass?: string;
}

export interface InlineInputType {
    id: number;
    title: string;
    child: (InlineCheckboxItem | InlineRadioItem)[];
}

export interface CustomWizardFormPropsType {
    title: string
    divClass?: string
    navColClass: string
    tabColClass: string
}

export interface VerticalWizardNavProps {
    activeCallBack: (tab: number) => void;
    steps: number
}

export interface ActiveCallbackProp {
    activeCallBack: (tab: number) => void;
}

export interface StepperHorizontalProp {
    step: number;
    finishClicked: boolean;
}

export interface BasicInfoFormData {
    email: string;
    firstName: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
    placeHolderName: string;
    cardNumber: string;
    expiration: string;
    cvvNumber: string;
    uploadDocumentation: string;
    informationCheckBox: boolean;
    linkedInLink: string;
    gitHubLink: string;
    giveFeedBack: string;
    state: string;
    agreeConditions: boolean;
}

export interface BasicInfoFormProps {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    formData: BasicInfoFormData;
}

export interface StudentValidationFormData {
    password: string;
    name: string;
    email: string;
    confirmPassWord: string;
    portfolioURL: string;
    projectDescription: string;
    twitterUrl: string;
    gitHubUrl: string;
}
export interface StudentValidationFormProp {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    formData: StudentValidationFormData;
    selectedImage?: string | null;
}

export interface VerticalWizardNavProps {
    activeCallBack: (tab: number) => void;
    steps: number
}

export interface VerticalWizardFormData {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    state: string;
    zip: string
    recipientUserName: string;
    userName: string;
    cardNumber: string;
    expirationDate: string;
    cvvNumber: string;
    documentationName: string;
    bankName: string;
    feedBack: string;
}

export interface VerticalWizardFormProps {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    formData: VerticalWizardFormData;
}

export interface ActiveCallbackProp {
    activeCallBack: (tab: number) => void;
}

export interface NewAddressModalPropsTypes {
    toggle: () => void;
    showModal: boolean;
}
interface RadioBoxValuesInterFace {
    address: string;
    shippingMethod: string;
}
export interface ShippingInformationProps {
    handleNextButton?: () => void;
    radioBoxValues: RadioBoxValuesInterFace;
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PaymentFormProps {
    payMethod: string;
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FirstModalPropsType {
    toggle: () => void
    modalOne: boolean
}
export interface SecondModalPropsType {
    toggle2: () => void;
    modal2: boolean;
}

