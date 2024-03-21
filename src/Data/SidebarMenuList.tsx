import { SidebarMenuType } from "../Types/LayoutTypes";

export const menuList: SidebarMenuType[] = [
    {
      title: 'General',
      menucontent: 'Dashboards,Widgets',
      menu: [
        {
          id: 1,
          title: 'Dashboard',
          icon: 'home',
          type: 'sub',
          menu: [
            {
              title: 'Default',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/dashboard/default`,
            },
            {
              title: 'Ecommerce',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            },
            {
              title: 'Project',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/dashboard/project`,
            },
          ],
        },
        {
          id: 2,
          title: 'Widgets',
          icon: 'widget',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'General',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/widgets/general-widget`,
            },
            {
              title: 'Chart',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/widgets/chart-widget`,
            },
          ],
        },
      ],
    },
    {
      title: 'Applications',
      menucontent: 'Ready to use Apps',
      menu: [
        {
          id: 3,
          title: 'Project',
          type: 'sub',
          icon: 'project',
          active: false,
          menu: [
            {
              title: 'Project List',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/project/project-list`,
            },
            {
              title: 'Create New',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/project/create-project`,
            },
          ],
        },
        {
          id: 4,
          title: 'File Manager',
          url: `${process.env.PUBLIC_URL}/applications/file-manager`,
          icon: 'file',
          type: 'link'
        },
        {
          id: 5,
          title: 'Ecommerce',
          icon: 'ecommerce',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Add Products',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/add-products`,
            },
            {
              title: 'Product',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/product`,
            },
            {
              title: 'Product Page',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/product-page`,
            },
            {
              title: 'Product list',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/product-list`,
            },
            {
              title: 'Payment Details',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/payment-details`,
            },
            {
              title: 'Order History',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/order-history`,
            },
            {
              title: 'Invoices',
              type: 'sub',
              menu: [
                {
                  title: 'Invoice-1',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/invoice/invoice-1`,
                },
                {
                  title: 'Invoice-2',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/invoice/invoice-2`,
                },
                {
                  title: 'Invoice-3',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/invoice/invoice-3`,
                },
                {
                  title: 'Invoice-4',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/invoice/invoice-4`,
                },
                {
                  title: 'Invoice-5',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/invoice/invoice-5`,
                },
                {
                  title: 'Invoice-6',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/invoice/invoice-6`,
                },
              ]
            },
            {
              title: 'Cart',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/cart`,
            },
            {
              title: 'Wishlist',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`,
            },
            {
              title: 'Checkout',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/checkout`,
            },
            {
              title: 'Pricing',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/ecommerce/pricing`,
            },
          ],
        },
        {
          id:6,
          title: 'Email',
          icon: 'email',
          type: 'sub',
          active: false,
          menu: [
            {
                title: 'Email App',
                type: 'link',
                url: `${process.env.PUBLIC_URL}/applications/email/email-app`,
            },
            {
                title: 'Email Compose',
                type: 'link',
                url: `${process.env.PUBLIC_URL}/applications/email/email-compose`,
            },
            {
                title: 'Letter Box',
                type: 'link',
                url: `${process.env.PUBLIC_URL}/applications/email/letter-box`,
            },
          ]
        },
        {
          id:7,
          title: 'Chat',
          icon: 'chat',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Private Chat',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/chat/chat-private`,
            },
            {
              title: 'Group chat',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/chat/chat-group`,
            },
          ],
        },
        {
          id:8,
          title: 'Users',
          icon: 'user',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Users Profile',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/users/user-profile`,
            },
            {
              title: 'Users Edit',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/users/edit-profile`,
            },
            {
              title: 'Users Cards',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/applications/users/user-cards`,
            },
          ],
        },
        {
          id: 9,
          title: 'Bookmarks',
          url: `${process.env.PUBLIC_URL}/applications/bookmark`,
          bookmark: true,
          type: 'link',
          icon: 'bookmark',
        },
        {
          id: 10,
          title: 'Contacts',
          icon: 'contact',
          url: `${process.env.PUBLIC_URL}/applications/contacts`,
          type: 'link',
          active: false,
        },
        {
          id: 11,
          title: 'Tasks',
          url: `${process.env.PUBLIC_URL}/applications/task`,
          icon: 'task', 
          type: 'link',
        },
        {
          id: 12,
          title: 'Calendar',
          url: `${process.env.PUBLIC_URL}/applications/calendar-basic`,
          icon: 'calendar', 
          type: 'link',
        },
        {
          id: 13,
          title: 'Social App',
          url: `${process.env.PUBLIC_URL}/applications/social-app`,
          bookmark: true,
          icon: 'social', 
          type: 'link'
        },
        {
          id: 14,
          title: 'To-Do',
          url: `${process.env.PUBLIC_URL}/applications/to-do`,
          bookmark: true,
          icon: 'to-do', 
          type: 'link',
        },
        {
          id: 15,
          title: 'Search Result',
          url: `${process.env.PUBLIC_URL}/applications/search`,
          icon: 'search', 
          type: 'link'
        },
      ],
    },
    {
      title: 'Forms & Table',
      menucontent: 'Ready to use froms & tables',
      menu: [
        {
          id:16,
          title: 'Forms',
          icon: 'form',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Form Controls',
              type: 'sub',
              menu: [
                {
                  title: 'Form Validation',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-controls/form-validation`,
                },
                {
                  title: 'Base Inputs',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-controls/base-input`,
                },
                {
                  title: 'Checkbox & Radio',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-controls/radio-checkbox-control`,
                },
                {
                  title: 'Input Groups',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-controls/input-group`,
                },
                {
                  title: 'Input Mask',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-controls/input-mask`,
                },
                {
                  title: 'Mega Options',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-controls/mega-options`,
                },
              ],
            },
            {
              title: 'Form Widgets',
              type: 'sub',
              menu: [
                {
                  title: 'Datepicker',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-widgets/datepicker`,
                },
                {
                  title: 'Touchspin',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-widgets/touchspin`,
                },
                {
                  title: 'Switch',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-widgets/switch`,
                },
                {
                  title: 'Typeahead',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-widgets/typeahead`,
                },
                {
                  title: 'Clipboard',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-widgets/clipboard`,
                },
              ],
            },
            {
              title: 'Form Layout',
              type: 'sub',
              menu: [
                {
                  title: 'Form Wizard 1',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard-1`,
                },
                {
                  title: 'Form Wizard 2',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard-2`,
                },
                {
                  title: 'Two Factor',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/forms/form-layout/two-factor`,
                },
              ],
            },
          ],
        },
        {
          id: 17,
          title: 'Tables',
          icon: 'table',
          type: 'sub',
          menu: [
            {
              title: 'Reactstrap Tables',
              type: "sub",
              menu: [
                {
                  title: 'Basic Tables',
                  type: "link",
                  url: `${process.env.PUBLIC_URL}/table/reactstrap-tables/basic-table`,
                },
                {
                  title: 'Table Components',
                  type: "link",
                  url: `${process.env.PUBLIC_URL}/table/reactstrap-tables/table-components`,
                },
              ],
            },
            {
              title: 'Data Tables',
              type: "sub",
              menu: [
                {
                  title: 'Basic Init',
                  type: "link",
                  url: `${process.env.PUBLIC_URL}/table/data-tables/basic-init`,
                },
                {
                  title: 'Advance Init',
                  type: "link",
                  url: `${process.env.PUBLIC_URL}/table/data-tables/advance-init`,
                },
                {
                  title: 'API',
                  type: "link",
                  url: `${process.env.PUBLIC_URL}/table/data-tables/api`,
                },
                {
                  title: 'Data Sources',
                  type: "link",
                  url: `${process.env.PUBLIC_URL}/table/data-tables/data-sources`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Components',
      menucontent: 'UI Components & Elements',
      menu: [
        {
          id:18,
          title: 'Ui Kits',
          icon: 'ui-kits',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Typography',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/typography`,
            },
            {
              title: 'Avatars',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/avatars`,
            },
            {
              title: 'Helper Classes',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/helper-classes`,
            },
            {
              title: 'Grid',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/grid`,
            },
            {
              title: 'Tag & pills',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/tag-pills`,
            },
            {
              title: 'Progress',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/progress-bar`,
            },
            {
              title: 'Modal',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/modal`,
            },
            {
              title: 'Alert',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/alert`,
            },
            {
              title: 'Popover',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/popover`,
            },
            {
              title: 'Tooltip',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/tooltip`,
            },
            {
              title: 'Dropdown',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/dropdown`,
            },
            {
              title: 'Accordion',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/accordion`,
            },
            {
              title: 'Tabs',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/tabs`,
            },
            {
              title: 'Lists',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/ui-kits/lists`,
            },
          ],
        },
        {
          id:19,
          title: 'Bonus Ui',
          icon: 'bonus-kit',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Scrollable',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/scrollable`,
            },
            {
              title: 'Tree View',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/tree`,
            },
            {
              title: 'Toasts',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/toasts`,
            },
            {
              title: 'Rating',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/rating`,
            },
            {
              title: 'Dropzone',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/dropzone`,
            },
            {
              title: 'Tour',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/tour`,
            },
            {
              title: 'SweetAlert2',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/sweet-alert-2`,
            },
            {
              title: 'Owl Carousel',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/owl-carousel`,
            },
            {
              title: 'Ribbons',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/ribbons`,
            },
            {
              title: 'Pagination',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/pagination`,
            },
            {
              title: 'Breadcrumb',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/breadcrumb`,
            },
            {
              title: 'Range Slider',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/range-slider`,
            },
            {
              title: 'Image Cropper',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/image-cropper`,
            },
            {
              title: 'Basic Card',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/basic-card`,
            },
            {
              title: 'Creative Card',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/creative-card`,
            },
            {
              title: 'Timeline',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/bonus-ui/timeline`,
            },
          ],
        },
        {
          title: 'Icons',
          icon: 'icons',
          id:20,
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Flag icon',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/icons/flag-icon`,
            },
            {
              title: 'Fontawesome Icon',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/icons/font-awesome`,
            },
            {
              title: 'Ico Icon',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/icons/ico-icon`,
            },
            {
              title: 'Themify Icon',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/icons/themify-icon`,
            },
            {
              title: 'Feather Icon',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/icons/feather-icon`,
            },
            {
              title: 'Whether Icon',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/icons/whether-icon`,
            },
          ],
        },
        {
          title: 'Buttons',
          icon: 'button',
          id:21,
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Default Style',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/buttons/default`,
            },
            {
              title: 'Button Group',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/buttons/button-group`,
            },
          ],
        },
        {
          title: 'Charts',
          icon: 'charts',
          type: 'sub',
          id:22,
          active: false,
          menu: [
            {
              title: 'Apex Chart',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/charts/chart-apex`,
            },
            {
              title: 'Google Chart',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/charts/chart-google`,
            },
            {
              title: 'Chartjs Chart',
              type: "link",
              url: `${process.env.PUBLIC_URL}/components/charts/chartjs`,
            },
          ],
        },
      ],
    },
    {
      title: 'Pages',
      menucontent: 'All neccesory pages added',
      menu: [
        {
          id:23,
          title: 'Sample Page',
          url: `${process.env.PUBLIC_URL}/pages/sample-page`,
          icon: 'sample-page',
          active: false,
          type: "link",
        },
        {
          id:24,
          title: 'Others',
          icon: 'others',
          type: 'sub',
          menu: [
            {
              title: 'Error Page',
              type: 'sub',
              menu: [
                {
                  title: 'Error 400',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/others/error-page-400`,
                },
                {
                  title: 'Error 401',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/others/error-page-401`,
                },
                {
                  title: 'Error 403',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/others/error-page-403`,
                },
                {
                  title: 'Error 404',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/others/error-page-404`,
                },
                {
                  title: 'Error 500',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/others/error-page-500`,
                },
                {
                  title: 'Error 503',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/others/error-page-503`,
                },
              ],
            },
            {
              title: 'Authentication',
              type: 'sub',
              menu: [
                {
                  title: 'Login Simple',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/login`,
                },
                {
                  title: 'Login With Bg Image',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/login-bg-img`,
                },
                {
                  title: 'Login With Image Two ',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/login-bg-img2`,
                },
                {
                  title: 'Login With Validation',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/login-bs-validation`,
                },
                {
                  title: 'Login With Tooltip',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/login-bs-tooltip`,
                },
                {
                  title: 'Login With Sweetalert',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/login-sa-validation`,
                },
                {
                  title: 'Register Simple',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/sign-up`,
                },
                {
                  title: 'Register With Bg Image',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/sign-up-one`,
                },
                {
                  title: 'Register with Image Two',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/sign-up-two`,
                },
                {
                  title: 'Register Wizard',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/sign-up-wizard`,
                },
                {
                  title: 'Unlock User',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/unlock`,
                },
                {
                  title: 'Forget Password',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/forget-password`,
                },
                {
                  title: 'Reset Password',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/reset-password`,
                },
                {
                  title: 'Maintenance',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/auth/maintenance`,
                },
              ],
            },
            {
              title: 'Coming Soon',
              type: 'sub',
              menu: [
                {
                  title: 'Coming Simple',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/coming-soon/coming-simple`,
                },
                {
                  title: 'Coming With Bg Video',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/coming-soon/coming-bg-video`,
                },
                {
                  title: 'Coming With Bg Image',
                  type: 'link',
                  url: `${process.env.PUBLIC_URL}/coming-soon/coming-bg-img`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      menucontent: 'Bouns Pages & Apps',
      menu: [
        {
          id:25,
          title: 'Gallery',
          icon: 'gallery',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Gallery Grid',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/grid-gallery`,
            },
            {
              title: 'Gallery Grid Desc',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/grid-gallery-description`,
            },
            {
              title: 'Masonry Gallery',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/masonry-gallery`,
            },
            {
              title: 'Masonry With Desc',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/masonry-gallery-description`,
            },
            {
              title: 'Hover Effects',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/gallery-hover`,
            },
          ],
        },
        {
          id:26,
          title: 'Blog',
          icon: 'blog',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Blog Details',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-detail`,
            },
            {
              title: 'Blog Single',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-single`,
            },
            {
              title: 'Add Post',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/blog/add-post`,
            },
          ],
        },
        {
          id:27,
          title: 'FAQ',
          type: 'link',
          icon: 'faq',
          active: false,
          url: `${process.env.PUBLIC_URL}/miscellaneous/faq`,
        },
        {
          id:28,
          title: 'Job Search',
          icon: 'job-search',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Cards view',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/job-search/job-cards-view`,
            },
            {
              title: 'List View',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/job-search/job-list-view`,
            },
            {
              title: 'Job Details',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/job-search/job-details`,
            },
            {
              title: 'Apply',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/job-search/job-apply`,
            },
          ],
        },
        {
          id:29,
          title: 'Learning',
          icon: 'learning',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Learning List',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/learning/learning-list-view`,
            },
            {
              title: 'Detailed Course',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/learning/course-details`,
            },
          ],
        },
        {
          id:30,
          title: 'Maps',
          icon: 'maps',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'Google Maps',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/maps/google-map`,
            },
            {
              title: 'Leaflet Maps',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/maps/leaflet-map`,
            },
          ],
        },
        {
          id:31,
          title: 'Editors',
          icon: 'editors',
          type: 'sub',
          active: false,
          menu: [
            {
              title: 'CK Editor',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/editors/ck-editor`,
            },
            {
              title: 'MDE Editor',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/editors/mde-editor`,
            },
            {
              title: 'ACE Code Editor',
              type: 'link',
              url: `${process.env.PUBLIC_URL}/miscellaneous/editors/ace-code-editor`,
            },
          ],
        },
        {
          id:32,
          title: 'Knowledgebase',
          icon: 'knowledgebase', 
          type: 'link', 
          active: false,
          url: `${process.env.PUBLIC_URL}/miscellaneous/knowledgebase`,
        },
        {
          id:33,
          title: 'Support Ticket',
          icon: 'support-tickets', 
          type: 'link', 
          active: false,
          url: `${process.env.PUBLIC_URL}/miscellaneous/support-ticket`,
        },
      ],
    },
  ];