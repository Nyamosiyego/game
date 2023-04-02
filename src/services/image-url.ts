import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const croppedUrl = url.replace("/media/", "/media/crop/600/400/");
    return croppedUrl;
}

export default getCroppedImageUrl;