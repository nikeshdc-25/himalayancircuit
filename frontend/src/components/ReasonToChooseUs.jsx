import React from "react";
import "./reason.css";
import fullyCustomizeIcon from "../assets/black_fully.png";
import atYourOwnPaceIcon from "../assets/black_pace.png";
import customerSupportIcon from "../assets/black_customer.png";
import localTourOperatorIcon from "../assets/black_local.png";
import adventureRelaxationIcon from "../assets/black_adventure.png";
import experientialProgramsIcon from "../assets/black_experiential.png";
import bestPriceGuaranteedIcon from "../assets/black_price.png";
import getInspiredIcon from "../assets/black_inspired.png";

function ReasonToChooseUs() {
  const reasons = [
    {
      title: "Fully Customize",
      description:
        "We will work with you to craft an itinerary tailored to your needs.",
      icon: fullyCustomizeIcon,
    },
    {
      title: "At Your Own Pace",
      description:
        "We take special care to go at a relaxed, active, and leisurely pace set by yourself.",
      icon: atYourOwnPaceIcon,
    },
    {
      title: "24×7 Customer Support",
      description:
        "Right from your arrival to departure from Nepal, we provide 24×7 support whenever you need.",
      icon: customerSupportIcon,
    },
    {
      title: "Local Tour Operator",
      description:
        "Get experience of the destinations from the local experts, so that you know the place better.",
      icon: localTourOperatorIcon,
    },
    {
      title: "Adventure and Relaxation",
      description:
        "A good balance of relaxation and adventure makes a happy trip.",
      icon: adventureRelaxationIcon,
    },
    {
      title: "Experiential Programs",
      description:
        "Interact with the people. Tell your stories, hear theirs; and get an inside view of an economically poor society.",
      icon: experientialProgramsIcon,
    },
    {
      title: "Best Price Guaranteed",
      description:
        "Every program that you book with us is meant to maximize your experiences, with top value.",
      icon: bestPriceGuaranteedIcon,
    },
    {
      title: "Get Inspired",
      description:
        "You’ll want to keep going, keep exploring, keep living life to the fullest! Get Inspired.",
      icon: getInspiredIcon,
    },
  ];

  return (
    <div className="reason-to-choose-us">
      <div className="text-center align-items-center">
        <h1>Reasons to Choose Us</h1>
        <h4>
          You will get the trip that you wish through our highly qualified and
          experienced tour planners customizing and creating the holidays as
          your preference.
        </h4>
      </div>

      <div className="row">
        {reasons.map((reason, index) => (
          <div key={index} className="col-md-3 col-sm-6 reason-card">
            <div className="reason-icon">
              <img src={reason.icon} alt={reason.title} />
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReasonToChooseUs;
