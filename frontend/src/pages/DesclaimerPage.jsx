import React, { useEffect } from "react";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const styles = {
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "20px",
      marginBottom: "20px",
      fontWeight: "400",
    },
    link: {
      color: "#007BFF",
      textDecoration: "none",
    },
  };

  return (
    <div >
      <h1 style={styles.heading}>Disclaimer</h1>
      <p style={styles.paragraph}>
        Thank you for visiting the Himalayan Circuit Team Pvt Ltd.
      </p>
      <p style={styles.paragraph}>
        Please note that the information provided on{" "}
        <a href="https://himalayancircuit.com" style={styles.link}>
          https://himalayancircuit.com
        </a>{" "}
        and other related web properties are for informational purposes only.
      </p>
      <p style={styles.paragraph}>
        The information is provided by{" "}
        <a href="https://himalayancircuit.com" style={styles.link}>
          https://himalayancircuit.com
        </a>{" "}
        and whilst we endeavor to keep the information up-to-date and correct,
        we make no representations or warranties of any kind, express or
        implied, about the completeness, accuracy, reliability, suitability, or
        availability with respect to the website or the information, products,
        services, or related graphics contained on the website for any purpose.
        Any reliance you place on such information is therefore strictly at your
        own risk.
      </p>
      <p style={styles.paragraph}>
        In no event will we be liable for any loss or damage, including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits, arising out of
        or in connection with the use of this website. Through this website, you
        are able to link to other websites which are not under the control of{" "}
        <a href="https://himalayancircuit.com" style={styles.link}>
          https://himalayancircuit.com
        </a>
        . We have no control over the nature, content, and availability of those
        websites. The inclusion of any links does not necessarily imply a
        recommendation or endorsement of the views expressed within them.
      </p>
      <p style={styles.paragraph}>
        Every effort is made to keep the website up and running smoothly.
        However,{" "}
        <a href="https://himalayancircuit.com" style={styles.link}>
          Himalayan Circuit Team Pvt Ltd
        </a>{" "}
        takes no responsibility for, and will not be liable for, the website
        being temporarily unavailable due to technical issues beyond our
        control.
      </p>
      <p style={styles.paragraph}>
        Our Website is provided by{" "}
        <a href="https://himalayancircuit.com" style={styles.link}>
          Himalayan Circuit Team Pvt Ltd
        </a>{" "}
        on an “AS IS” basis. Himalayan Circuit Team Pvt Ltd makes no
        representations or warranties of any kind, express or implied, as to the
        operation of the site, the information, content, materials, or products
        included on the site. To the full extent permissible by applicable law,
        Himalayan Circuit Team Pvt Ltd disclaims all warranties, express or
        implied, including, but not limited to, the implied warranties and/or
        conditions of merchantability or satisfactory quality and fitness for a
        particular purpose and non-infringement.
      </p>
      <p style={styles.paragraph}>
        Himalayan Circuit Team Pvt Ltd will not be liable for any damages of any
        kind arising from the use of the site, including, but not limited to
        direct, indirect, incidental, punitive and consequential damages.
        Himalayan Circuit Team does not warrant that the site, or the server
        that makes it available, is free of viruses or other harmful components.
      </p>
    </div>
  );
};

export default Disclaimer;
