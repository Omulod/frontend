import ContactCard from "@/components/common/cards/contact-card";
import SectionHeading from "@/components/common/section-heading";
import Button from "@/components/ui/button";
import { cn } from "@/helpers/cn";
import ContactUsForm from "./contact-us-form";

const contactUsData = [
  {
    title: "Have a partnership in mind?",
    image: "/images/contact-person-1.png",
    name: "Mosharrof Hossain",
    position: "Co-Founder & COO",
    email: "mosharrof@omulod.com",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    title: "Have a project to discuss?",
    image: "/images/contact-person-2.png",
    name: "Fahad Abdullah",
    position: "Co-Founder & CTO",
    email: "fahad@omulod.com",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

const ContactUsSection = () => {
  return (
    <div className="container py-28 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <SectionHeading
          subtitle="Contact Us"
          title="Ready to share your vision? Let’s talk!"
        />

        <div className="mt-14 p-2.5 rounded-[100px] bg-[#1a1a1a] backdrop-blur-3xl shadow-button-secondary w-fit flex items-center gap-6">
          <Button size="small" className="lg:px-16">
            Request a quote
          </Button>
          <Button
            size="small"
            className={cn(
              "lg:px-20 bg-transparent shadow-none hover:shadow-none"
            )}
          >
            Book a call
          </Button>
        </div>

        <ContactUsForm />
      </div>
      <div className="lg:col-span-4 h-fit border border-neutral-500 rounded-2xl overflow-hidden">
        {contactUsData.map((item, index) => (
          <ContactCard
            key={index}
            title={item.title}
            image={item.image}
            name={item.name}
            position={item.position}
            email={item.email}
            facebook={item.facebook}
            linkedin={item.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUsSection;
