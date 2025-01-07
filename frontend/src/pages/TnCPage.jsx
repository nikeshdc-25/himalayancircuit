import React, { useEffect } from "react";

const TnCPage = () => {
  const styles = {
    header: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "20px",
    },
    subSection: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      fontWeight: "500",
    },
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div style={{marginTop: 100}}>
      <h1 style={styles.header}>Terms & Conditions</h1>
      <p style={styles.text}>
        Please read the following Terms and Conditions that govern the
        relationship between you (client) and Himalayan Circuit Team Pvt Ltd
        (Himalayan Circuit) (hereinafter referred as “The Company”), Company
        Registered Number 132436-071/072. Please note that while booking a trip,
        you are agreeing to be bound by the Terms and Conditions as well as the
        cancellation policy and certain limitations of liability. Both parties
        agree to these Terms and Conditions to resolve any legal or other
        disputes that may arise during the trip.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subSection}>BOOKING A TRIP</h2>
        <p style={styles.text}>
          A ‘trip’ refers to any products or activities purchased with us,
          including Trekking, Tours, Expeditions, and/or other Adventure and
          Tour Programs. A booking is accepted and becomes final only from the
          date when the Company sends a confirmation invoice or email. It is at
          this point that a contract begins between the Company and the Client.
        </p>
        <p style={styles.text}>
          Before your booking is confirmed, the Company reserves the right to
          modify brochure prices. Please note: the Company would not be liable
          to any warranty, collateral agreement, prior agreement, description of
          services, or conditions, other than as expressed herein.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>DEPOSIT REQUIREMENT</h2>
        <h3 style={styles.subSection}>a) Nepal Trips</h3>
        <p style={styles.text}>
          For trips within Nepal, you are required to make a non-refundable
          deposit of 15% of trip cost at the time of booking. You can pay the
          remaining amount upon your arrival in Kathmandu, before the trip
          departure.
        </p>
        <h3 style={styles.subSection}>b) Tibet and Bhutan Trips</h3>
        <p style={styles.text}>
          For trips within Tibet and Bhutan, a non-refundable deposit of 30%
          must be made at time of booking, at least 30 days prior to trip
          departure, in order to confirm your air tickets. If you are booking 21
          days or less prior to departure, full payment is due.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subSection}>Payment Methods</h2>
        <p style={styles.text}>
          Booking deposit can be made by bank transfer. We will email our bank
          address once we received your complete Booking form.{" "}
          <b>
            Please note that we are not liable for any delay or loss during the
            transfer process. In the case that the money received by us is less
            than the amount sent (due to use of mediator bank or for any other
            reasons), you are requested upon arrival to pay accordingly so that
            the total is equivalent to the product cost.
          </b>{" "}
          E-mail us the bank reference number or remittance slips after you
          initiate the transfer. Sometimes the bank forwards the money with a
          different name; if we have reference number/remittance slips and
          sander details, it will be easy for us to check.
        </p>
        <h3 style={styles.subSection}>
          FINAL PAYMENT/ACCEPTANCE OF BOOKING/CLIENT DETAILS:
        </h3>
        <h3 style={styles.subSection}>a) Nepal Trips</h3>
        <p style={styles.text}>
          Final payment on trekking, tours, climbing or any other trips in Nepal
          can be made upon arrival in Nepal. Final payment can be made by bank
          transfer, cash or credit/debit card (Visa or Master Card). There is a
          4% surcharge when the payment is made by credit card/debit cards (this
          applies to all payments; deposits, final balances, trip extension and
          miscellaneous purchases.)
        </p>
        <h3 style={styles.subSection}>b) Tibet and Bhutan Trips</h3>
        <p style={styles.text}>
          For trips within Tibet and Bhutan, final payment should be made at
          least 21 days prior to the trip start date.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subSection}>CANCELLATION BY THE CLIENT</h2>
        <p style={styles.text}>
          Any cancellation by a client must be made in writing and acknowledged
          by the Company. The cancellation charge will be determined by the date
          on which the cancellation is received by the Company.
          <ul>
            The cancellation charges below are expressed as a percentage of the
            total tour price:
            <li>
              Cancellation 60 days or more before departure = loss of deposit.
            </li>
            <li>
              Cancellation 59-21 days before departure = 50% of cost of services
              booked.
            </li>
            <li>
              Cancellation less than 21 days before departure = 100% of cost of
              services booked.
            </li>
          </ul>
        </p>
        <p style={styles.text}>
          The client is strongly advised to take out cancellation insurance at
          the time of making the booking. Please note that NO REFUNDS will be
          made if you voluntarily leave a trip for any reason after the trip has
          begun. NO REFUNDS will be made for any accommodation, transport,
          sightseeing, meals or services not utilized.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>CANCELLATION OF A TOUR BY THE COMPANY</h2>
        <p style={styles.text}>
          Himalayan Circuit reserves the right to cancel any trip, including a
          guaranteed trip, prior to departure due to reasons beyond its control
          (i.e. due to natural disasters, flight cancellation, weather
          conditions, industrial action, consequences of strikes, wars, riots,
          sickness, quarantine, government intervention, or other untoward
          occurrences.) In such a case, Himalayan Circuit will refund the trip
          price only. If the Company cancels a departure which is guaranteed to
          run, we will refund the trip price, or you are entitled to take an
          alternative trip of the same value.
        </p>
        <p style={styles.text}>
          The Company is not responsible for incidental expenses or
          consequential losses that the client may incur as a result of the
          booking, such as visas, vaccinations, non-refundable flights or rail,
          loss of earnings, or loss of employment, etc.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>
          MEDICAL CONDITIONS AND SPECIAL REQUIREMENTS
        </h2>
        <p style={styles.text}>
          The Company must be notified in writing at the time of booking of any
          medical conditions, physically challenged conditions or any other
          mental and or physical conditions that may affect fitness to travel.
          Failure to notify the Company may result in the client being refused
          travel, and the client may be subject to 100% cancellation fees. Some
          trips may be unsuitable for clients due to age, mobility, pregnancy or
          physical or mental conditions. It is the client’s responsibility to
          check prior to booking. The Company is not required to provide any
          special facilities unless it has agreed to do so in writing. The
          Company will do its best to meet special requests made by clients,
          including dietary, but such requests do not form part of the Contract
          and therefore the Company is not liable if unable to fulfill these
          requests. Medical facilities vary from country to country, and the
          Company makes no representations and gives no warranties regarding the
          standard of such treatment.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>TRAVEL INSURANCE</h2>
        <p style={styles.text}>
          Travelers must have adequate and valid travel insurance. Your travel
          insurance must cover accidents, injury, illness and death medical
          expenses, including any related to pre-existing medical conditions,
          emergency repatriation (including helicopter rescue and air ambulance
          where applicable) and personal liability. The Company also recommends
          insurance that covers trip cancellations, curtailment and loss of
          luggage and personal effects. You must carry proof of insurance with
          you and produce it if reasonably requested by the company employees or
          suppliers. If you are unable to provide proof of insurance when
          requested, the company reserves the right to cancel or suspend your
          participation in a trip or in certain activities that comprise part of
          a trip, at any time, including after the commencement of your trip,
          with no right of refund.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subSection}>
          FLIGHT DELAYS AND CHANGES IN THE ITINERARY
        </h2>
        <p style={styles.text}>
          Please note that mountain adventures are, by nature, unpredictable.
          Domestic flights can be delayed by bad weather in mountain regions. In
          case of delayed domestic flights, Himalayan Circuit will provide
          departing city accommodation (Guest House) and food (Lunch &
          Breakfast) prior to your trip. However, in case of delayed return
          flights, the client is responsible for all additional expenses,
          including food and accommodation costs. If you wish to make
          alternative arrangements, such as a helicopter flight, to avoid flight
          delays, all additional cost would be your responsibility. Moreover,
          Himalayan Circuit does not accept any responsibility for costs
          incurred as a result of missed international flights, but would help
          you to make alternative arrangements wherever possible.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subSection}>TRIP AMENDMENT</h2>
        <p style={styles.text}>
          If you wish to make a booking amendment, please send your request at
          least 21 days prior to original trip departure. If the amendment
          request is received by Himalayan Circuit in this time frame, the
          company will make the necessary changes with a charge of US$100 per
          person. In case you wish to make amendments less than21 days prior to
          the trip departure, the cost of amendment may be higher depending upon
          the company’s arrangements with other parties, such as hotels, Guest
          Houses, ground operators or airlines.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>VISA and PASSPORT</h2>
        <p style={styles.text}>
          When traveling with Himalayan Circuit , you must carry a valid
          passport and have obtained the appropriate visas. Please ensure your
          passport is valid for 6 months BEYOND the duration of the trip. A
          Nepal Visa is available upon arrival in Nepal. For Tibet and Bhutan,
          the company can make necessary arrangements upon request. Himalayan
          Circuit cannot accept responsibility if you are refused entry to a
          country or places because you lack the correct visa documentation. It
          is your responsibility to ensure that you have the correct visas for
          the countries you are traveling to and within.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>INJURIES AND EVACUATION</h2>
        <p style={styles.text}>
          Himalayan Circuit is not liable for any injuries, health conditions,
          emotional episodes or other conditions suffered by the client during
          the trip. Similarly, our package cost does not include personal
          insurance. Therefore, we advise clients to obtain insurance packages
          that include medical emergencies and evacuation by helicopter.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>SERVICES MISSED OR UNUSED</h2>
        <p style={styles.text}>
          There will be no discounts or money refunded for missed or unused
          services. This includes voluntary or involuntary termination/departure
          from tour, late arrival on the tour, or premature departure either
          voluntarily or involuntarily, for reasons including sickness, death of
          a family member, etc.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subSection}>UPDATING OF TERMS AND CONDITIONS</h2>
        <p style={styles.text}>
          The Company reserves the right to update and amend these terms and
          conditions at anytime. It is the responsibility of the client to keep
          updated with any changes. The current version of terms and conditions
          will always be found on the website https://himalayancircuit.com and
          will be the terms referred to in any dispute.
        </p>
      </div>
    </div>
  );
};

export default TnCPage;
