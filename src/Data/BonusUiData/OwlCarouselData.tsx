
export const slidesOnlySubTitle = [
    {
        text: 'The ',
        code: '.active '
    },
    {
        text: 'class needs to be added to one of the slides otherwise the carousel will not be visible.',
        code: ' .d-block'
    },
    {
        text: ' and ',
        code: ' .w-100 '
    },
    {
        text: 'on carousel images to prevent browser default image alignment.'
    }
];

export const withControlsSubTitle = [
    {
        text: 'Use the ',
        code: '.carousel-control-prev'
    },
    {
        text: ' & ',
        code: '.carousel-control-next'
    },
    {
        text: ' through previous and next controls. We recommend using ',
        code: '<button>'
    },
    {
        text: ' elements, but you can also use ',
        code: ' <a> '
    },
    {
        text: ' elements with ',
        code: 'role="button".'
    }
];

export const autoPlayVariantSubTitle = [
    {
        text: 'Use the ',
        code: ' .owl-carousel '
    },
    {
        text: 'through slides.'
    }
];

export const mouseOverSubTitle = [
    {
        text: 'Use the ',
        code: '.owl-carousel '
    },
    {
        text: 'through slides.'
    }
];

export const withIndicatorsSubTitle = [
    {
        text: 'Use the ',
        code: '.carousel-indicators'
    },
    {
        text: ' through carousel indicates.'
    }
];

export const withCaptionSubTitle = [
    {
        text: 'Add captions to your slides easily with the',
        code: ' .carousel-caption'
    },
    {
        text: ' element within any ',
        code: ".carousel-item."
    }
];

export const crossFadeSubTitle = [
    {
        text: 'Add ',
        code: ' .carousel-fade '
    },
    {
        text: ' to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content, you may want to add ',
        code: " .bg-body"
    },
    {
        text: ' or some custom CSS to the .carousel-items for proper cross-fading.'
    }
];

export const individualCarouselSubTitle = [
    {
        text: 'Add ',
        code: 'data-bs-interval=""'
    },
    {
        text: ' to a',
        code: ' .carousel-item'
    },
    {
        text: '  to change the amount of time to delay between automatically cycling to the next item.'
    }
];

export const disableTouchSubTitle = [
    {
        text: 'Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the ',
        code: 'enableTouch '
    },
    {
        text: ' attribute.'
    }
];

export const darkVariantSubTitle = [
    {
        text: 'Add ',
        code: '.carousel-dark'
    },
    {
        text: '  to the ',
        code: '.carousel'
    },
    {
        text: '  for darker controls, indicators, and captions. '
    }
];

export const owlCarouselData = [
  { id: 1, image: '11.jpg'},
  { id: 2, image: '9.jpg'},
  { id: 3, image: '6.jpg'},
];
export const controlCarouselData = [
  { id: 1, image: '6.jpg'},
  { id: 2, image: '7.jpg'},
  { id: 3, image: '10.jpg'},
  { id: 4, image: '4.jpg'},
  { id: 5, image: '1.jpg'},
];
export const indicatorCarouselData = [
  { id: 1, image: '3.jpg'},
  { id: 2, image: '8.jpg'},
  { id: 3, image: '10.jpg'},
];
export const captionCarouselData = [
  { id: 1, image: '9.jpg', captionHeader: 'The area in the house that is most comfortable.', captionText: "You can watch folks you wouldn't have in your house amuse you in your living room thanks to the development of television." },
  { id: 2, image: '1.jpg', captionHeader: 'Drawing Room', captionText: 'Regardless of how big or tiny your home is, think about hiring an interior designer. They give you a calm living atmosphere in addition to decorating your home.' },
  { id: 3, image: '2.jpg', captionHeader: 'House Interior', captionText: "If you want to alter your way of life, start with redesigning your house's interior." },
];
export const crossFadeCarouselData = [
  { id: 1, image: '1.jpg' },
  { id: 2, image: '11.jpg' },
  { id: 3, image: '7.jpg' },
  { id: 4, image: '10.jpg' },
];
export const individualCarouselData = [
  { id: 1, image: '5.jpg', interval: '10000' },
  { id: 2, image: '2.jpg', interval: '2000' },
  { id: 3, image: '10.jpg' },
];
export const disableTouchSwipingData = [
  { id: 1, image: '4.jpg' },
  { id: 2, image: '8.jpg' },
  { id: 3, image: '6.jpg' },
];
export const darkVariantData = [
  { id: 1, image: '1.jpg', captionHeader: 'We decorate our homes', captionText: 'If you have been dreaming about bringing your living room together, our designers are here to help. Come see what we can do for your space.' },
  { id: 2, image: '3.jpg', captionHeader: 'This couch is a great topic of conversation.', captionText: 'A sofa is the ideal spot to enjoy a movie, nod off, and wake up.' },
  { id: 3, image: '6.jpg', captionHeader: 'Sometimes all you really need to unwind is a comfortable couch.', captionText: 'A house you can create with your friends is a great place.' },
];

// slider options
export const autoPlaySliderOptions = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  adaptiveHeight: true,
  centerPadding: '10px',
  draggable: false,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const mouseWheelSliderOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    AutoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    pauseOnHover: true
};