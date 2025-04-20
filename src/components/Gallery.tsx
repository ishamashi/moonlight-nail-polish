import Image from 'next/image';

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/id/237/600/400',
    alt: 'Nail Art 1',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/238/600/400',
    alt: 'Nail Art 2',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/239/600/400',
    alt: 'Nail Art 3',
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/240/600/400',
    alt: 'Nail Art 4',
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/241/600/400',
    alt: 'Nail Art 5',
  },
  {
    id: 6,
    src: 'https://picsum.photos/id/242/600/400',
    alt: 'Nail Art 6',
  },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
}
