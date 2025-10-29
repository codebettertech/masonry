# masonry
React Masonry, a beautifull example of masonry



´´´java
import { Masonry } from './masonry'
import MasonryItem from './masonryItem';

import { imageList } from './mockData';

const MasonryResponsive = () => {
    return (
        <Masonry columns={{ 576: 1, 716: 2, 810: 2, 1024: 3, 1280: 4, 1536: 4, 1920: 6 }} gap={16}>
            {imageList.map((item) => {
                return (
                    <MasonryItem item={item} />
                )
            })}
        </Masonry>
    )
}

export default MasonryResponsive
´´´

![vhvhj](public/1.png)
![vhvhj](public/2.png)
![vhvhj](public/3.png)
![vhvhj](public/4.png)
