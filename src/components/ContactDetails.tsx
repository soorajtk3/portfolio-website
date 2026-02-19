import { Mail, Phone, MapPin, Github, Linkedin, User } from "lucide-react";
import Card from "./Card";

const ContactDetails = () => {
  const handleOpenSocialPage = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
        <User className="text-white  w-12 h-12 md:w-16 md:h-16" />
      </div>
      <h2 className="text-3xl text-black-800 mb-4 font-bold">
        Sooraj Vijayan T K
      </h2>
      <h5 className="text-2xl mb-5 text-blue-600 font-semibold">
        Software Engineer
      </h5>
      <p className="text-center md:text-justify ml-3 md:ml-none max-w-200 mb-8 text-lg text-gray-600">
        I am a Software Engineer with nearly 4 years of professional experience
        building modern, scalable web applications. I specialize in frontend
        development using React.js and Next.js, focusing on creating responsive,
        high-performance user interfaces. In addition to frontend expertise, I
        have experience with backend technologies such as Node.js and Express,
        allowing me to contribute effectively across the full stack when
        required. With a strong foundation in JavaScript and a solid
        understanding of web architecture, I prioritize writing clean,
        maintainable code and delivering intuitive user experiences. I am
        passionate about continuous learning and staying aligned with the latest
        industry best practices to build efficient, production-ready
        applications.
      </p>
      <div className="flex gap-8 flex-wrap ml-3 md:ml-none">
        <Card
          iconColor="text-blue-600"
          icon={Mail}
          text="soorajtk3@gmail.com"
          color="bg-white"
        />
        <Card
          iconColor="text-blue-600"
          icon={Phone}
          text="9567107681"
          color="bg-white"
        />
        <Card
          iconColor="text-blue-600"
          icon={MapPin}
          text="Kannur, Kerala"
          color="bg-white"
        />
      </div>
      <div className="flex gap-4 mt-10 mb-6">
        <Card
          isSocial
          height="h-12"
          iconTextColor="text-white"
          iconColor="text-white"
          icon={Linkedin}
          text="Linkedin"
          color="bg-blue-600"
          onClick={() =>
            handleOpenSocialPage("https://www.linkedin.com/in/soorajvijayantk/")
          }
        />
        <Card
          isSocial
          iconTextColor="text-white"
          iconColor="text-white"
          icon={Github}
          text="Github"
          color="bg-gray-800"
          onClick={() => handleOpenSocialPage("https://github.com/soorajtk3")}
        />
      </div>
    </div>
  );
};

export default ContactDetails;
