import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const QualityEducationTeam = () => {
  const teamMembers = [
    {
      name: "Julian Jameson",
      profession: "Profession",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5DeE18amJY8pjelUS2dqUKR8Wwknqq6FD0Tl_EiarUEXtSgnblX6FRPRzed3T1HgiOY&usqp=CAU"
    },
    {
      name: "Julian Jameson",
      profession: "Profession",
      image: "https://media.licdn.com/dms/image/D4E03AQGsg2dq-4e9_A/profile-displayphoto-shrink_200_200/0/1666699246969?e=2147483647&v=beta&t=TAtebPApNRoRV-grPKqYNt1LZTb28_JbNKZdNfdddXo"
    },
    {
      name: "Julian Jameson",
      profession: "Profession",
      image: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/01/How-To-Add-Grain-In-Photoshop-11.png"
    },
    {
      name: "Julian Jameson",
      profession: "Profession",
      image: "https://c.superprof.com/i/m/20927231/160/20220608190646/20927231.webp"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Speed for automatic scrolling (3000 ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-[#b3db97] font-semibold mb-2">Team</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Quality Education</h2>
        <p className="text-gray-600 max-w-2xl">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-2">
            <TeamMemberCard {...member} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const TeamMemberCard = ({ name, profession, image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm mt-8">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6 text-center">
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{profession}</p>
        <div className="flex justify-center space-x-4">
          <SocialIcon icon={<Facebook size={20} />} href="#" />
          <SocialIcon icon={<Instagram size={20} />} href="#" />
          <SocialIcon icon={<Twitter size={20} />} href="#" />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} className="text-[#b3db97] hover:text-[#96BB7C] transition-colors duration-300">
    {icon}
  </a>
);

export default QualityEducationTeam;

 