import { PaginationType } from "../../Types/BonusUiType";

export const defaultPageSubTitle = [
    {
        text: 'If the pagination component is used to navigate between a set of search results, an appropriate label could be ',
        code: 'aria-label="Search results pages'
    }
]

export const activeDisableSubTitle = [
    {
        text: 'Use ',
        code: '.disabled '
    },
    {
        text: 'for links that appear un-clickable and',
        code: ' .active'
    },
    {
        text: ' to indicate the current page.'
    }
]

export const iconPageSubTitle = [{ text: 'Use an icon or symbol in place of text for some pagination links.' }]

export const roundedPageSubTitle = [
    {
        text: 'Used in rounded pagination.Use an icon or symbol in place of text for some pagination links.',
        code: '[.rounded-circle]'
    }
]

export const pageAlignSubTitle = [
    {
        text: 'Change the alignment of pagination components with flexbox utilities. For example, with ',
        code: '.justify-content-center:'
    },
    {
        text: '.'
    }
]

export const pageSizeSubTitle = [
    {
        text: 'Use ',
        code: '[pagination-lg/pagination-md/pagination-lg]'
    },
    {
        text: ' for additional sizes.'
    }
]

export const defaultPagiData: PaginationType[] = [
    {
        id: 'Pagination1',
        text: 'Previous'
    },
    {
        id: 'Pagination2',
        text: '1'
    },
    {
        id: 'Pagination3',
        text: '2'
    },
    {
        id: 'Pagination4',
        text: '3'
    },
    {
        id: 'Pagination5',
        text: 'Next'
    }
]

export const activeClassData: PaginationType[] = [
    {
        id: 'Pagination1',
        text: 'Previous'
    },
    {
        id: 'Pagination2',
        text: '1'
    },
    {
        id: 'Pagination3',
        text: '2'
    },
    {
        id: 'Pagination4',
        text: '3'
    },
    {
        id: 'Pagination5',
        text: 'Next'
    }
]

export const iconlistData: PaginationType[] = [
    {
        id: 'Pagination1',
        text: <span aria-hidden="true">«</span>
    },
    {
        id: 'Pagination2',
        text: '1'
    },
    {
        id: 'Pagination3',
        text: '2'
    },
    {
        id: 'Pagination4',
        text: '3'
    },
    {
        id: 'Pagination5',
        text: '...'
    },
    {
        id: 'Pagination6',
        text: '20'
    },
    {
        id: 'Pagination8',
        text: <span aria-hidden="true">»</span>

    }
]

export const alignPageData: string[] = ['Previous', '1', '2', '3', 'Next']
export const alignCenterData: string[] = ['Previous', 'I', 'II', 'III', 'Next']
export const alignbottomData: string[] = ['Previous', 'i ', 'ii ', 'iii', 'Next']