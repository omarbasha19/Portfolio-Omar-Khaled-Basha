import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/omar_basha.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "obasha998@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Alexandria, Egypt",
      Link: "https://www.google.com/maps/place/Alexandria,+Alexandria+Governorate,+Egypt/@31.2156,29.9553,12z"
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 1092001947",
      Link: "tel:+201092001947",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Arab Academy for Science, Technology & Maritime Transport – AI College",
      Link: "https://aast.edu/en/colleges/ai/"
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/omarbasha19",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/omar-khaled-87378a2ba/",
    },
  ],
};
