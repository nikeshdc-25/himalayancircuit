import React, { useEffect } from "react";

const PaymentInfo = () => {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      lineHeight: "1.6",
      padding: "20px",
      color: "#333",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "20px",
      marginBottom: "15px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      marginBottom: "8px",
    },
    link: {
      color: "#007BFF",
      textDecoration: "none",
    },
    linkHover: {
      color: "#0056b3",
      textDecoration: "underline",
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
      <div>
        <h1 style={styles.heading}>Payment Information</h1>
        <p style={styles.paragraph}>
          This is just a dummy text of our payment information and associated
          policies. This text should be replaced by actual payment procedures
          and policies.
        </p>
      </div>
      <div>
        <h2 style={styles.heading}>Cancellations and Refunds</h2>
        <h3 style={styles.subheading}>CANCELLATION BY THE CLIENT:</h3>
        <p style={styles.paragraph}>
          Any cancellation by a client must be made in writing and acknowledged
          by the Company. The cancellation charge will be determined by the
          date on which the cancellation is received by the Company.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Cancellation 60 days or more before departure = loss of deposit.
          </li>
          <li style={styles.listItem}>
            Cancellation 59-21 days before departure = 50% of cost of services
            booked.
          </li>
          <li style={styles.listItem}>
            Cancellation less than 21 days before departure = 100% of cost of
            services booked.
          </li>
        </ul>
        <p style={styles.paragraph}>
          The client is strongly advised to take out cancellation insurance at
          the time of making the booking.
        </p>
        <p style={styles.paragraph}>
          Please note that <b>NO REFUNDS</b> will be made if you voluntarily leave a
          trip for any reason after the trip has begun. NO REFUNDS will be made
          for any accommodation, transport, sightseeing, meals, or services not
          utilized.
        </p>
        <h3 style={styles.subheading}>CANCELLATION OF A TOUR BY THE COMPANY:</h3>
        <p style={styles.paragraph}>
          Himalayan Circuit reserves the right to cancel any trip, including a
          guaranteed trip, prior to departure due to reasons beyond its control
          (i.e. natural disasters, flight cancellations, weather conditions,
          etc.). In such cases, we will refund the trip price or provide an
          alternative trip of the same value.
        </p>
      </div>
      <div>
        <h2 style={styles.heading}>Payment Policies</h2>
        <p style={styles.paragraph}>
          We may provide paid products and/or services within the Service. In
          that case, we use third-party services for payment processing:
        </p>
        <ul style={styles.list}>
          <li >
            <a
              href="https://stripe.com/us/privacy"
              style={styles.link}
              onMouseOver={(e) => (e.target.style = styles.linkHover)}
              onMouseOut={(e) => (e.target.style = styles.link)}
            >
              Stripe Privacy Policy
            </a>
          </li>
          <li >
            <a
              href="https://www.paypal.com/webapps/mpp/ua/privacy-full"
            >
              PayPal Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.mastercard.us/en-us/about-mastercard/what-we-do/privacy.html"
            >
              MasterCard Privacy Policy
            </a>
          </li>
        </ul>
        <h3 style={styles.heading}>Bank Transfer</h3>
        <p style={styles.paragraph}>
          After booking the trip, our system provides automatic Bank Transfer
          details along with a SWIFT Code.
        </p>
        <h3 style={styles.heading}>Credit Card Payment</h3>
        <p style={styles.paragraph}>
          Himalayan Circuit accepts most major international Debit and Credit
          cards including Visa, Mastercard, American Express, Diners Club, and
          more. A direct-payment link is added automatically when booking.
        </p>
      </div>
    </div>
  );
};

export default PaymentInfo;
