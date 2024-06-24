import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";
import image4 from "../assets/images/img4.jpg";
import image5 from "../assets/images/img5.jpg";
import image6 from "../assets/images/img6.jpg";

function Pro() {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
  ];
  return (
    <div className="flex flex-col items-center gap-10 justify-center mt-10">
      <h1>Projects</h1>

      <div className="grid md:grid-cols-3  gap-10">
        {images.map((pictures) => (
          <img
            src={pictures.image}
            key={pictures.id}
            alt=""
            className=" cursor-pointer w-[300px] h-[300px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Pro;
