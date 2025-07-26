import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: <Github size={100} className="text-c4" />,
    label: "GitHub",
    value: "",
    href: "https://github.com/Khaled-Almassri",
  },
  {
    icon: <Linkedin size={100} className="text-c4" />,
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/khaled-almassri/",
  },
  {
    icon: <Mail size={100} className="text-c4" />,
    label: "Email",
    value: "khalednaiel@gmail.com",
    href: "mailto:khalednaiel@gmail.com",
  },
  {
    icon: <Phone size={100} className="text-c4" />,
    label: "Phone",
    value: "+971 50 541 6228",
    href: "tel:+971505416228",
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col justfiy-between gap-[30px] mx-auto text-center text-c4 max-w-[80%] text-[28px] pt-[200px]">
        <p>
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello — feel free to reach out. You can contact me by email or phone, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <section className="flex items-center justify-center px-4 text-c4">
        <div className="max-w-6xl w-full py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between items-center p-6 rounded-xl border border-c1/10 shadow hover:shadow-lg hover:bg-c3/10 transition duration-300 text-center min-h-[220px]"
              >
                <div className="flex flex-col items-center">
                  <div>{contact.icon}</div>
                  <p className="mt-3 text-lg font-semibold">{contact.label}</p>
                </div>

                <p className="text-sm text-c4 mt-4 break-all">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col justfiy-between gap-[30px] mx-auto text-center text-c4 max-w-[80%] text-[28px] pb-[150px]">
        <h1 className="text-c1 text-[48px]">Let’s Collaborate</h1>
        <p>
          I'm always interested in new challenges and collaborations. If you're hiring, mentoring, or building something in the cloud — let's connect.
        </p>
      </div>
    </>
  );
};

export default ContactPage;
