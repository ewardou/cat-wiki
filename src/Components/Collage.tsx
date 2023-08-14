import image1 from '../assets/image 1.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';

export default function Collage() {
    return (
        <div className="grid grid-cols-2 grid-rows-[min-content_1fr] gap-4">
            <img src={image2} alt="" className="h-auto w-full" />
            <img src={image1} alt="" className="place-self-end" />
            <img src={image3} className="col-start-2 row-span-full" alt="" />
        </div>
    );
}
