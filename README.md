# masonry
React Masonry, a beautifull example of masonry



```js
import { Masonry } from './masonry'
import MasonryItem from './masonryItem';
import { imageList } from './mockData';

const MasonryResponsive = () => {
    return (
        <Masonry columns={{ 576: 1, 716: 2, 810: 2, 1024: 3, 1280: 4, 1536: 4, 1920: 6 }} gap={16}> // beakpoint
            {imageList.map((item) => {
                return (
                    <MasonryItem item={item} />
                )
            })}
        </Masonry>
    )
}

export default MasonryResponsive
```

![vhvhj](public/1.png)
```js
mock data:

export const imageList = [
    { src: '/img/gallery/img-1.webp', title: 'Image 1' },
    { src: '/img/gallery/img-2.webp', title: 'Image 2' },
    { src: '/img/gallery/img-3.webp', title: 'Image 3' },
    { src: '/img/gallery/img-28.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-24.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-32.webp', title: 'Image 8' },
    { src: '/img/gallery/img-20.webp', title: 'Image 9' },
    { src: '/img/gallery/img-23.webp', title: 'Image 1' },
    { src: '/img/gallery/img-29.webp', title: 'Image 2' },
    { src: '/img/gallery/img-30.webp', title: 'Image 3' },
    { src: '/img/gallery/img-6.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-31.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-2.webp', title: 'Image 8' },
    { src: '/img/gallery/img-17.webp', title: 'Image 9' },
    { src: '/img/gallery/img-27.webp', title: 'Image 1' },
    { src: '/img/gallery/img-29.webp', title: 'Image 2' },
    { src: '/img/gallery/img-30.webp', title: 'Image 3' },
    { src: '/img/gallery/img-28.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-31.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-32.webp', title: 'Image 8' },
    { src: '/img/gallery/img-17.webp', title: 'Image 9' },
    { src: '/img/gallery/img-27.webp', title: 'Image 1' },
    { src: '/img/gallery/img-29.webp', title: 'Image 2' },
    { src: '/img/gallery/img-30.webp', title: 'Image 3' },
    { src: '/img/gallery/img-28.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-31.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-32.webp', title: 'Image 8' },
    { src: '/img/gallery/img-17.webp', title: 'Image 9' },
        { src: '/img/gallery/img-1.webp', title: 'Image 1' },
    { src: '/img/gallery/img-2.webp', title: 'Image 2' },
    { src: '/img/gallery/img-3.webp', title: 'Image 3' },
    { src: '/img/gallery/img-28.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-24.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-32.webp', title: 'Image 8' },
    { src: '/img/gallery/img-20.webp', title: 'Image 9' },
    { src: '/img/gallery/img-23.webp', title: 'Image 1' },
    { src: '/img/gallery/img-29.webp', title: 'Image 2' },
    { src: '/img/gallery/img-30.webp', title: 'Image 3' },
    { src: '/img/gallery/img-6.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-31.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-2.webp', title: 'Image 8' },
    { src: '/img/gallery/img-17.webp', title: 'Image 9' },
    { src: '/img/gallery/img-27.webp', title: 'Image 1' },
    { src: '/img/gallery/img-29.webp', title: 'Image 2' },
    { src: '/img/gallery/img-30.webp', title: 'Image 3' },
    { src: '/img/gallery/img-28.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-31.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-32.webp', title: 'Image 8' },
    { src: '/img/gallery/img-17.webp', title: 'Image 9' },
    { src: '/img/gallery/img-27.webp', title: 'Image 1' },
    { src: '/img/gallery/img-29.webp', title: 'Image 2' },
    { src: '/img/gallery/img-30.webp', title: 'Image 3' },
    { src: '/img/gallery/img-28.webp', title: 'Image 4' },
    { src: '/img/gallery/img-26.webp', title: 'Image 6' },
    { src: '/img/gallery/img-31.webp', title: 'Image 5' },
    { src: '/img/gallery/img-19.webp', title: 'Image 7' },
    { src: '/img/gallery/img-32.webp', title: 'Image 8' },
    { src: '/img/gallery/img-17.webp', title: 'Image 9' },
]
```
![vhvhj](public/2.png)
![vhvhj](public/3.png)
![vhvhj](public/4.png)
