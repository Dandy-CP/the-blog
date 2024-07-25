import React from "react";
import { ContactBox } from "@/components/module/contact";

const ContactPage = () => {
  return (
    <div className="px-60 py-24 desktop:px-0 tablet:px-0 phone:px-0">
      <h1 className="text-4xl font-semibold text-center mb-10">
        Send me some poem:
      </h1>

      <ContactBox />
    </div>
  );
};

export default ContactPage;
