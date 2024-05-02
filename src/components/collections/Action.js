import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, imageSrc, title, text }) => (
  <Link to={`/card/${id}`} className="card-link">
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img src={imageSrc} alt="Card" className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  </Link>
);

const Action = () => {
  const cardsData = [
    { id: 1, imageSrc: '/images/tokyo_ghoul.jpg', title: 'Title 1', text: 'The story follows Ken Kaneki, a student who barely survives a deadly encounter with Rize Kamishiro,his date who reveals herself as a ghoul and tries to eat him. He is taken to the hospital in critical condition. ' },
    { id: 2, imageSrc: '/images/tomodachi.jpg', title: 'Title 2', text: 'High school student Yuuichi Katagiri cherishes his close circle of friends, composed of four classmates: Yutori Kokorogi,Shiho Sawaragi, Makoto Shibe, and Tenji Mikasa. However, when the funds for the upcoming school trip are stolen, the incident causes Shiho and Makoto—who had been tasked with collecting the money—to distance ' },
    { id: 3, imageSrc: '/images/Demon_Slayer.jpg', title: 'Title 3', text: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders.Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life.One day, Tanjirou decides to go down to the local village to make a" },
    { id: 4, imageSrc: '/images/onepiece2.jpg', title: 'Title 4', text: "A fleet of pirate ships with the same Jolly Roger are shown along with a man sporting said flag, Woonan.Next a night scene where piles of gold treasure are seen bright at sea with a silhouette of Woonan.  Then an island is shown while gold rains down as it fades out ending with a shot of a treasure map." },
    { id: 5, imageSrc: '/images/horimiya-img.jpg', title: 'Title 5', text: 'Admired at school for her friendly attitude and academic achievements, high school student Kyouko Hori has been hiding another side of herself.With her parents often away from home due to work, Hori also has to look after her younger brother and do the housework, leaving no opportunities .' },
    { id: 6, imageSrc: '/images/eminence.jpeg', title: 'Title 6', text: "Even in his past life, Cid's dream wasn't to become a protagonist or a final boss.He'd rather lie low as a minor character until it's prime time to reveal he's a mastermind...or at least, do the next best thing-pretend to be one! And now that he's been reborn into another world, he's ready to set the perfect conditions  to live out his dreams to the fullest." },
    // Add more card data as needed
  ];

 

  return (
    <div className="grid grid-cols-1 mt-[616px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cardsData.map(card => (
      
          <Card key={card.id} id={card.id} imageSrc={card.imageSrc} title={card.title} text={card.text} />
     
      ))}
    </div>
  );
};

export default Action;
