import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(false);

  const handleCategoryChange = (panel) => (event, isExpanded) => {
    setExpandedCategory(isExpanded ? panel : false);
  };

  const handleQuestionChange = (panel) => (event, isExpanded) => {
    setExpandedQuestion(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        marginTop: "90px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#333", fontWeight: "bold", textAlign: "center" }}
      >
        Frequently Asked Questions
      </Typography>
      <Typography>
        Nepal is home to endless natural beauty and needless to say, unique in
        the entire world. From the flat plains of The Tarai to the stunning
        peaks of The Himalayas in the north, there is beauty everywhere. The
        variation in topology and climate makes this country such a prized
        destination for travellers. And with endless beauty come endless
        questions — like how and when to travel in the hills of Nepal, or where
        to go in monsoon, or how to respond when you encounter a rhinoceros
        during a safari — and other questions. While it’s always best to ask
        your travel expert about specific questions regarding your program, we
        have provided answers to some frequently asked questions — as a tiny
        approach to answer some common questions you might have about Nepal.{" "}
        <hr /> <br /> <br />
      </Typography>
      {/* Tour */}
      <Accordion
        expanded={expandedCategory === "tour"}
        onChange={handleCategoryChange("tour")}
        sx={{ marginBottom: "10px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#1e88e5" }} />}
          sx={{
            "& .MuiTypography-root": { fontWeight: "bold" },
          }}
        >
          <Typography>
            Frequently Asked Questions (FAQ) about Tour in Nepal
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "20px" }}>
          <Accordion
            expanded={expandedQuestion === "tour-q1"}
            onChange={handleQuestionChange("tour-q1")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                },
              }}
            >
              <Typography>Travel Insurance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                We strongly recommend purchasing travel insurance, as medical
                costs can add up quickly in the unlikely scenario that you are
                injured or sick while abroad. Medical evacuation to facilities
                of higher quality and competency can also be astro‐ nominally
                high, in the event that you require it. It is important to have
                your travel insurance specially while on the trekking areas such
                as Everest, Langtang, Annapurna, Manaslu, Makalu Region, Upper &
                Lower Dolpa, Upper Mustang, Karnali etc Regions that covers the
                Helicopter Rescue. In Nepal, medical facilities request payment
                upon delivery of medical service, so try to get a policy which
                will pay them directly, to save you the hassle of establishing a
                claim at a later date.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "tour-q2"}
            onChange={handleQuestionChange("tour-q2")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                },
              }}
            >
              <Typography>Safety in Nepal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                The short answer is yes. Nepal is generally quite a peaceful
                country, and the locals will more often than not to be inviting
                and accommodating to travelers. Nepal’s geology is largely
                stable as well, except during mon‐ soon season, when mudslides
                and rockslides are more common in re‐ mote regions. That said,
                you should always be more cautious when you’re traveling then
                when you’re at home, since you’re in new scenar‐ ios and
                unfamiliar territory on a more regular basis. Check out our Safe
                Trip Abroad Handbook for more information! It’s posted on our
                website, or you can reach out to us directly and we will send it
                to you. The Hand‐ book is a comprehensive collection of safety
                tips and advice, to help you prepare for unexpected difficulties
                during your time in Nepal.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      {/* Trekking */}
      <Accordion
        expanded={expandedCategory === "trekking"}
        onChange={handleCategoryChange("trekking")}
        sx={{ marginBottom: "10px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#1e88e5" }} />}
          sx={{
            "& .MuiTypography-root": { fontWeight: "bold" },
          }}
        >
          <Typography>
            Frequently Asked Questions (FAQ) about Trekking in Nepal
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "20px" }}>
          <Accordion
            expanded={expandedQuestion === "trekking-q1"}
            onChange={handleQuestionChange("trekking-q1")}
            sx={{ marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                },
              }}
            >
              <Typography>Trekking Grade</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                <b>
                  Please read carefully to ascertain the grading for each of our
                  treks. We want you to have the most enjoyable experience
                  possible, but it is important to let you know how strenuous a
                  trek may be.
                </b>
                <br />
                <b>Level of Activity Difficulty Grades: </b>
                <ul>
                  <li>A (An Easy Endeavour)</li>
                  <li>B (Only Mildly Strenuous)</li>
                  <li>C (Becoming Moderately Difficult)</li>
                  <li>D (Quite the Challenge)</li>
                  <li>E (Its Extremely Demanding)</li>
                </ul>
                <br />
                <b>Grade A</b> (An Easy Endeavour): the highest altitude is
                around 3000 metres walking for about 3-5 hours each day.
                <br />
                <b>Grade B</b> (Mildly difficult): The highest altitude is
                around 4000 metres walking for about 4-6 hours each day.
                <br />
                <b>Grade C</b> (difficult): The highest altitude is around 4500
                metres and walking about 5-7 hours a day.
                <br />
                <b>Grade D</b> (Quite the Challenge): The highest altitude is
                around 5000 metres and walking about 6-9 hours a day. At this
                level, we highly recommend previous trekking experience and
                where possible, in a similar climate.
                <br />
                <b>Grade E</b> (Extremely demanding): The highest altitude is
                around 6000 metres and walking about 7-12 hours a day. To be
                able to fulfil all the criteria of level D plus extra factors
                such as significant difficulty when encountering river
                crossings, very high passes, glaciers or trekking peaks where
                climbing skills may be required.
                <br /> <br />
                <b>Note:</b> We grade them from A to E. A being the easiest. We
                ask you to bear in mind the weather conditions for the time of
                year you are visiting. For example, humidity can make it
                difficult to walk in. The altitude is also something you must
                keep in mind as air is thinner and oxygen intake is harder.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "trekking-q2"}
            onChange={handleQuestionChange("trekking-q2")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Best Season For Trekking</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                Basically for small trekking or hiking Nepal is for all seasons
                like mini Everest trek, Ghandruk – Poonhill trekking, Pikey
                peak, Tamang Heritage Trek, Chisapani – Nagarkot, Langtang trek,
                etc. How ever if you are planning for Everest, Langtang,
                Annapurna, Manaslu regions or any other off the beaten track
                trekking <b>Autumn</b> (September to November) and <b>Spring</b>{" "}
                (March to May) are the best climatic seasons suitable for
                trekking in Nepal. In <b>Summer</b> season (June – August), off
                the beaten track like Upper Mustang trekking, Upper & Lower
                Dolpo trekking, Jumla – Rara trekking, Mustang trekking, Snow
                leopard trekking etc can be organized by Himalayan Circuit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "trekking-q3"}
            onChange={handleQuestionChange("trekking-q3")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Trekking Accommodation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                <b>Tea House</b>
                <br />
                Nepal’s main trekking routes and trails are dotted with simple
                teahouses to cater to hikers, and they will be where you will
                you will sleep, eat, and relax while on your trek. Teahouses
                usually feature simple wooden or cement rooms, with a shared
                bathroom; although, the bathrooms of teahouses usually only
                feature a toilet. If you wish to have a shower on your trek, you
                may find that a bucket of heated water is the normal and will be
                charged Shared living space usually consists of a room with a
                hot oven or fire‐ place, and benches or tables for you to eat
                and relax at. Also please note that one has to carry Toilet
                paper from Kathmandu or has to buy in the tea houses. Your tea
                houses will be booked by the guide in advance if you would like
                to change the tea houses you will need to pay separately. Wifi
                and drinking water, charging and hot shower will be available
                with extra payment by the client itself.
                <br />
                <b>Homestay</b>
                <br />
                While trekking we will get chance to stay with local families
                and eat together with families.
                <br />
                <b>Camping</b>
                <br />
                Fully private tented camp with private toilet. Because of the
                food is carried by the porters, a variety of meals is possible
                in camping trekking. We provide all the necessary staff that are
                fully trained to guide, cook, pack and erect the campsite
                facilities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "trekking-q4"}
            onChange={handleQuestionChange("trekking-q4")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Equipment List For Trekking</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                Depending on your need, Himalayan Circuit recommends you to
                carry essentials that will be useful during your trekking. Not
                every items you need to bring from your home country, you can
                purchase it locally. We have listed some essential clothing
                during your trekking, please do not exceed your main luggage
                more than 9 /10 Kg, so porters can carry comfortably.
                <br />
                <b>Suggestion for Trekking</b>
                <ol type="1">
                  <li>Comfortable hiking boots</li>
                  <li>
                    Thick wool socks (2 or 3 pairs) specially for night time
                  </li>
                  <li>
                    Backpack or daypack (Size depends on whether you take porter
                    or not)
                  </li>
                  <li>Thermal bottle</li>
                  <li>Sleepwear, Under clothes</li>
                  <li>
                    Day bag pack to carry your essential like water, dry food
                    etc
                  </li>
                  <li>
                    Trekking pants, easy dry t‐shirt, walking shoes, sandal ,
                    Rain jacket (as mountain weather cannot be predicted) day
                    bag pack, Warm cap, Gloves water proof
                  </li>
                  <li>
                    Torch light with extra batteries (for use during power
                    cut-off)
                  </li>
                  <li>Plug adapter (if needed)</li>
                  <li>Tooth paste, Brush, other toiletries as needed</li>
                  <li>Travel Towels</li>
                  <li>Sunglasses and/or sun hat</li>
                  <li>Sun block</li>
                  <li>Lip balm</li>
                  <li>Insect repellent</li>
                  <li>Camera and memory cards</li>
                  <li>Books</li>
                  <li>Personal Prescription medicines</li>
                  <li>Down Jacket</li>
                  <li>Sleeping Bag</li>
                </ol>
                <br /> <br />
                <b>What Himalayan Circuit provides?</b>
                <br />
                <ul>
                  <li>
                    Trekking bag (which will be carried by the porters during
                    trek).
                  </li>
                  <li>
                    Sleeping bag, First aid kit, water purification tablets,
                    Diamox for Altitude sickness
                  </li>
                </ul>
                <br />
                Note: For more information regarding trekking packing list
                please do not hesitate to contact us:
                connect@himalayancircuit.com
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "trekking-q5"}
            onChange={handleQuestionChange("trekking-q5")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Altitude Sickness</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }} gutterBottom>
                Generally, <b>3500 meters below</b> there is no risk of altitude
                sickness. However, altitude acts differently to the individual.
                Therefore, before you depart on your trek, we will brief you on
                the signs and symptoms of altitude, or Acute Mountain Sickness
                (AMS). Himalayan Circuit’s trekking guides have many years of
                experience with high-altitude trekking and are chosen for their
                utmost professionalism and safety measures. However, one should
                take precaution for altitude sickness.{" "}
                <b>Drink more water and NO ALCOHOL</b> throughout the trekking
                journey.
              </Typography>
              <Typography gutterBottom>
                <a href="https://www.webmd.com/a-to-z-guides/altitude-sickness#1">
                  WebMD: Altitude Sickness
                </a>
                <br />
                <a href="https://www.nhs.uk/conditions/altitude-sickness/">
                  NHS: Altitude Sickness
                </a>
                <br />
                or contact us:{" "}
                <a href="mailto:connect@himalayancircuit.com">
                  connect@himalayancircuit.com
                </a>
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginTop: "20px" }}
              >
                Altitude Sickness or Acute Mountain Sickness (AMS)
              </Typography>
              <Typography>
                Altitude Sickness is a pathological effect of high altitude on
                humans, caused by acute exposure to low partial pressure of
                oxygen at high altitude. It is difficult to determine who may be
                affected by altitude sickness since there are no specific
                factors such as age, sex, or physical condition that correlate
                with susceptibility. However, most people can ascend to{" "}
                <b>2,500 meters</b> with little or no effect.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: "20px" }}
              >
                Symptoms
              </Typography>
              <Typography gutterBottom>
                Symptoms often manifest themselves six to ten hours after ascent
                and generally subside in one to two days, but they occasionally
                develop into more serious conditions.
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Symptoms of Mild AMS:
              </Typography>
              <ul>
                <li>Headache</li>
                <li>Nausea & Dizziness</li>
                <li>Loss of appetite</li>
                <li>Fatigue</li>
                <li>Shortness of breath</li>
                <li>Disturbed sleep</li>
                <li>General feeling of malaise</li>
              </ul>
              <Typography>
                Symptoms tend to be worse at night. Mild AMS does not interfere
                with normal activity, and symptoms generally subside within two
                to four days as the body acclimatizes. As long as symptoms are
                mild, ascent can continue at a moderate rate. When hiking, it is
                essential that you{" "}
                <b>communicate any symptoms of illness immediately</b> to others
                on your trip.
              </Typography>
              <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>
                Symptoms of Moderate AMS:
              </Typography>
              <ul>
                <li>Severe headache that is not relieved by medication</li>
                <li>Nausea and vomiting, increasing weakness and fatigue</li>
                <li>Shortness of breath</li>
                <li>Decreased coordination (ataxia)</li>
              </ul>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: "20px" }}
              >
                Prevention
              </Typography>
              <ul>
                <li>
                  Ascending slowly is the best way to avoid altitude sickness.
                </li>
                <li>
                  Avoiding strenuous activity in the first 24 hours at high
                  altitude reduces the symptoms of AMS.
                </li>
                <li>Drink plenty of fluids.</li>
                <li>
                  Avoid alcohol as it tends to cause dehydration, which
                  exacerbates AMS.
                </li>
              </ul>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: "20px" }}
              >
                Altitude Acclimatization
              </Typography>
              <Typography>
                Altitude acclimatization is the process of adjusting to
                decreasing oxygen levels at higher elevations to avoid altitude
                sickness. Extending the time spent at higher altitudes lets the
                body adjust to the oxygen level there, a process that involves
                the production of additional red blood cells. Once above
                approximately <b>3,000 meters</b>, most climbers and
                high-altitude trekkers take the <b>“climb-high, sleep-low”</b>{" "}
                approach.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: "20px" }}
              >
                Treatment
              </Typography>
              <Typography>
                The only reliable treatment, and in many cases the only option
                available, is to <b>descend</b>. Attempts to treat or stabilize
                the patient in-situ at altitude is dangerous unless highly
                controlled and with good medical facilities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "trekking-q6"}
            onChange={handleQuestionChange("trekking-q6")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Safety in Nepal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                The short answer is yes. Nepal is generally quite a peaceful
                country, and the locals will more often than not to be inviting
                and accommodating to travelers. Nepal’s geology is largely
                stable as well, except during mon‐ soon season, when mudslides
                and rockslides are more common in re‐ mote regions. That said,
                you should always be more cautious when you’re traveling then
                when you’re at home, since you’re in new scenar‐ ios and
                unfamiliar territory on a more regular basis. Check out our Safe
                Trip Abroad Handbook for more information! It’s posted on our
                website, or you can reach out to us directly and we will send it
                to you. The Hand‐ book is a comprehensive collection of safety
                tips and advice, to help you prepare for unexpected difficulties
                during your time in Nepal.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      {/* General */}
      <Accordion
        expanded={expandedCategory === "general"}
        onChange={handleCategoryChange("general")}
        sx={{ marginBottom: "10px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#1e88e5" }} />}
          sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
        >
          <Typography>
            Frequently Asked Questions (FAQ) about Common Topics in Nepal
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "20px" }}>
          <Accordion
            expanded={expandedQuestion === "general-q1"}
            onChange={handleQuestionChange("general-q1")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Vaccinations Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                Although specific vaccinations are not required to enter Nepal,
                you may want to contact your doctor or a travel medical clinic
                before you leave home to have a professional recommendation for
                possible vaccines. Taking precautions to avoid mosquito bites is
                also a good idea, though you shouldn’t need a mosquito net when
                sleeping in most areas of the country.
                <br /> <br />
                <b>Important Notice:</b> If you’re traveling to Nepal from an
                area where Yel‐ low Fever is endemic, you will need to produce
                proof of vaccination upon entry to Nepal.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "general-q2"}
            onChange={handleQuestionChange("general-q2")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Travel Insurance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                We strongly recommend purchasing travel insurance, as medical
                costs can add up quickly in the unlikely scenario that you are
                injured or sick while abroad. Medical evacuation to facilities
                of higher quality and competency can also be astro‐ nominally
                high, in the event that you require it. It is important to have
                your travel insurance specially while on the trekking areas such
                as Everest, Langtang, Annapurna, Manaslu, Makalu Region, Upper &
                Lower Dolpa, Upper Mustang, Karnali etc Regions that covers the
                Helicopter Rescue. In Nepal, medical facilities request payment
                upon delivery of medical service, so try to get a policy which
                will pay them directly, to save you the hassle of establishing a
                claim at a later date.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "general-q3"}
            onChange={handleQuestionChange("general-q3")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Safety in Nepal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                The short answer is yes. Nepal is generally quite a peaceful
                country, and the locals will more often than not to be inviting
                and accommodating to travelers. Nepal’s geology is largely
                stable as well, except during mon‐ soon season, when mudslides
                and rockslides are more common in re‐ mote regions. That said,
                you should always be more cautious when you’re traveling then
                when you’re at home, since you’re in new scenar‐ ios and
                unfamiliar territory on a more regular basis. Check out our Safe
                Trip Abroad Handbook for more information! It’s posted on our
                website, or you can reach out to us directly and we will send it
                to you. The Hand‐ book is a comprehensive collection of safety
                tips and advice, to help you prepare for unexpected difficulties
                during your time in Nepal.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "general-q4"}
            onChange={handleQuestionChange("general-q4")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Money</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                <b>What is the currency in Nepal?</b> <br /> <br />
                In Nepal the currency is the rupee; the short form is NRs and
                the currency code is NPR. There are many currency exchange
                outlets where you can easily change money. Rupee notes are
                denominated in 5, 10, 20, 50, 100, 500, and 1000. Rupee coins
                are denominated in 1, 2, and 5.
                <br /> <br />
                <b>What is the currency in Nepal?</b> <br /> <br />
                In Kathmandu and other major cities, you can occasionally use
                your credit card. Where credit cards are accepted, all major
                cards are valid. In remote areas and rural villages, you will
                (99% of the time) be unable to use your credit card to pay for
                things. In general, cash is king be prepared to use it for most,
                if not all, of your purchases.
                <br /> <br /> <b>
                  Are there ATMs if I need to withdraw cash?
                </b>{" "}
                <br /> <br />
                There are numerous ATMs in the big cities such as Kathmandu,
                Pokhara and Chitwan or some towns Check with your bank to find
                out what the charges are to withdraw money from abroad. Also,
                most if not all ATMs will charge an additional fee of 500 Rupees
                to withdraw cash from a non‐Nepali card. In remote areas, you
                will most likely not have access to ATMs. On major trekking
                routes, an ATM can sometimes be found, but the fees are higher
                to withdraw cash and the amount you are able to withdraw often
                has a much lower threshold. If you’re venturing outside of the
                city, the best bet is to make sure you take enough cash with you
                to cover your stay.
                <br /> <br />{" "}
                <b>
                  Can I use my credit card or ATM in trekking route?
                </b> <br /> <br />
                Generally we advise to use cash in most of the trekking routes,
                you may also find ATM machine or swipe machine in limited
                routes. But please do not 100% sure, so if you have enough cash
                which is pretty safe.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedQuestion === "general-q5"}
            onChange={handleQuestionChange("general-q5")}
            sx={{ backgroundColor: "#ffffff", marginBottom: "5px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#757575" }} />}
              sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
            >
              <Typography>Nepal Visa Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontStyle: "italic" }}>
                Tribhuvan International Airport (KTM) in Kathmandu is the only
                international airport in Nepal(for now). Many international
                airlines directly connect Kathmandu with major cities around the
                world. Alternatively, you can travel to Nepal overland from
                India.
                <br /> <br /> <b>
                  Do I need a Visa to enter Nepal?
                </b> <br /> <br />
                All foreign nationals, except Indians, need visas to enter
                Nepal. Some nationalities, including US, UK, Canada, and
                Australia, may obtain a visa upon arrival. Tribhuvan
                International Airport, in addition to various overland entry
                points, will have the ability to issue visas. In countries with
                a Nepali embassy or consulate, you usually have the opportunity
                to arrange your visa prior to arrival as well.
                <br /> <br />{" "}
                <b>
                  What is the process to obtain a visa on arrival?
                </b> <br /> <br />
                If you are eligible for visa on arrival, you will need to use
                the automatic machines in the arrivals terminal. The machines
                will scan your passport and take an electronic photo for your
                visa. Furthermore to avoid long queue and other general
                information regarding NEPAL Visa, Online Visa Form please visit
                following link:{" "}
                <a target="_blank" href="https://nepaliport.immigration.gov.np">
                  https://nepaliport.immigration.gov.np
                </a>
                <br /> <br />
                <b>On Arrival Visa Fee at Entry Points</b> <br />
                15 Days – 30 USD <br />
                30 Days – 50 USD <br />
                90 Days – 125 USD <br /> <br />
                Upon arrival, your visa fee is payable by credit card, or a
                selection of currencies, including US Dollar, Canadian Dollar,
                British Pound, Euro, Singapore Dollar, Hong Kong Dollar,
                Australian Dollar, and Japanese Yen. Nepali or Indian Rupees are
                not accepted as payment for the visa fee. There is a currency
                exchange counter at the airport if you do not have any of these
                currencies. If you’re extending your visa, the only accepted
                currency is the Nepali Rupee, and you are required to pay in
                cash.
                <br /> <br />{" "}
                <b>What is the process to extend a visa after arrival?</b>{" "}
                <br /> <br />
                Tourist visas can be extended at the Immigration Department in
                Kathmandu or Pokhara. You have the option of extending your visa
                by 15, 30, 60, or 90 days. The maximum stay for a tourist visa
                is 150 days within a calendar year, including the extension.
                Tourist visa extension is done for minimum 15 days with USD 45
                and USD 3 per day for additional days. In the case of delay less
                than 150 days additional USD 5 per day as late fine.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQPage;
