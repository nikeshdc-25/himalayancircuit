import { Helmet } from "react-helmet-async";

function Meta({
  title = "Himalayan Circuit",
  description = "Himalayan Circuit offers custom luxury tours and budget-friendly vacations in Nepal.",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Meta;
