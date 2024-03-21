
//dynamic image
const images = require.context(`/public/assets/images`, true);

export const dynamicImage = (image: string | undefined) => {
    return images(`./${image}`);
};

//dynamic Number
export function dynamicNumber(totalLength: number) {
    return Array.from({ length: totalLength }, (_, index) => index + 1);
};