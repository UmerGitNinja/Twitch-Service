"use client";

import Link from "next/link";
import DropDown from "./DropDown";
const Questions = [
  {
    qes: "01. How does Viewpals work?",
    ans: "After you place your order we will get started with the delivery in 24 hours. You will see your plays increase gradually over time. Once the order is complete we will let you know again.",
  },
  {
    qes: "02. Do you offer targeted plays from my country?",
    ans: "We are currently not able to offer plays by country. All our plays however are coming from Tier 1 Countries across Europe or the US, Canada, Australia, UK etc.",
  },
  {
    qes: "03. Do you have monthly packages available?",
    ans: "Please send us an email to support@viewpals.co to enquiry for monthly packages.",
  },
  {
    qes: "04. How long until my order is completed?",
    ans: "How long it takes to complete the order depends on the size of your order - 80% of our orders are completed within several days but for large orders it may take longer than this.",
  },
  {
    qes: "05. Are the followers real?",
    ans: "Yes, we only work with real Spotify accounts.",
  },
  {
    qes: "06. Do I earn royalties from the plays you deliver?",
    ans: "All our plays are fully monetizable and will earn you royalties accordingly.",
  },
  {
    qes: "07. Which payment methods do you accept?",
    ans: "We accept credit cards (visa and master) as well as PayPal. All our payment methods are managed through PayPal and Streamkick will never capture or directly manage any of payment information.",
  },
  {
    qes: "08. I have other questions, how can I get in touch with you?",
    ans: "If you need any further help, just send us a message to support@viewpals.co",
  },
];
const DropDownComponent = () => {

  return (
    <section className="md:p-16">
      <div className="text-center mb-[50px]">
        <h1 className="lg:text-[50px] text-[30px] font-[600] text-white/95">
          Everything You Need to Know
        </h1>
        <p className="text-gray-400">
          Still have questions? Don&apos;t hesitate to email or start a live
          chat with us!
        </p>
      </div>
      <div className="lg:px-24 md:px-12 px-0">
        {Questions.map((question) => (
          <DropDown {...question} key={question.qes} />
        ))}
      </div>
      
    </section>
  );
};

export default DropDownComponent;
