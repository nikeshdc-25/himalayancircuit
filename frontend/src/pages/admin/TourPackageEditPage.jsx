import { useState, useEffect } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormContainer from "../../components/FormContainer";
import {
  useGetSinglePackageQuery,
  useUpdatePackageMutation,
  useUploadPackageImageMutation,
} from "../../slices/packageApiSlice";
import { FaCalendarDays } from "react-icons/fa6";

function TourPackageEditPage() {
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [atAGlance, setAtAGlance] = useState({
    Distance: "",
    Altitude: "",
    Days: 0,
    Fitness: "",
    Season: "",
  });
  const [pricing, setPricing] = useState({
    Standard: 0,
    Deluxe: 0,
  });
  const [subArea, setSubArea] = useState("");
  const [map, setMap] = useState("");
  const [image, setImage] = useState(null);
  const [information, setInformation] = useState({
    Inclusion: "",
    Exclusion: "",
    Fees: "",
    Gears: "",
  });

  const [itinerary, setItinerary] = useState([
    {
      Day: 1,
      Distance: "",
      Altitude: "",
      Duration: "",
      Accommodation: "",
    },
    {
      Day: 2,
      Distance: "",
      Altitude: "",
      Duration: "",
      Accommodation: "",
    },
  ]);

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: tourPackage,
    isLoading: loadingPackage,
    refetch,
  } = useGetSinglePackageQuery(id);

  const [updateTourPackage, { isLoading: updating }] =
    useUpdatePackageMutation();
  const [uploadTourImage, { isLoading: uploadingImage }] =
    useUploadPackageImageMutation();

  useEffect(() => {
    if (tourPackage) {
      setArea(tourPackage.Area);
      setDescription(tourPackage.Description);
      setCategory(tourPackage.Category);
      setAtAGlance(tourPackage.AtAGlance);
      setPricing(tourPackage.Pricing);
      setSubArea(tourPackage.SubArea?.Name || "");
      setMap(tourPackage.MapLink);
      setImage(tourPackage.Image);
      setInformation(tourPackage.Information);
      setItinerary(tourPackage.Itinerary.map(({ _id, ...rest }) => rest));
    }
  }, [tourPackage]);

  const updatePackageHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await updateTourPackage({
        _id: tourPackage._id,
        Area: area,
        Description: description,
        Category: category,
        AtAGlance: atAGlance,
        Pricing: pricing,
        SubArea: { Name: subArea },
        MapLink: map,
        Image: image,
        Information: information,
        Itinerary: itinerary,
      }).unwrap();
      toast.success(resp.message);
      refetch();
      navigate("/admin/packages");
    } catch (error) {
      toast.error(error.data.error);
    }
  };

  const uploadImageHandler = async (e) => {
    try {
      let formData = new FormData();
      formData.append("image", e.target.files[0]);
      let resp = await uploadTourImage(formData).unwrap();
      setImage(resp.path);
      toast.success(resp.message);
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  return (
    <FormContainer>
      <h1 style={{ marginTop: 70 }}>Edit Tour Package</h1>
      <Card className="shadow p-4 mb-5">
        {loadingPackage ? (
          <p>Loading package details...</p>
        ) : (
          <Form onSubmit={updatePackageHandler}>
            <Form.Group controlId="area" className="mb-3">
              <Form.Label>
                {" "}
                <b>Area</b>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>
                {" "}
                <b>Description</b>{" "}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter package description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="category" className="mb-3">
              <Form.Label>
                {" "}
                <b>Category</b>{" "}
              </Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="tour">Tour</option>
                <option value="trekking">Trekking</option>
                <option value="culturaltour">Cultural Tour</option>
                <option value="climbing">Climbing</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="atAGlance" className="mb-3">
              <Form.Label>
                <b>At a Glance</b>
              </Form.Label>
              <Row>
                {Object.keys(atAGlance).map((key) => (
                  <Col md={4} key={key}>
                    <div className="d-flex align-items-center mb-2">
                      <i className="me-2">{key}:</i>
                      <Form.Control
                        type="text"
                        value={atAGlance[key]}
                        onChange={(e) =>
                          setAtAGlance((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group controlId="pricing" className="mb-3">
              <Form.Label>
                {" "}
                <b>Pricing</b>{" "}
              </Form.Label>
              <Row>
                <Col>
                  <i>Deluxe</i>
                  <Form.Control
                    type="number"
                    placeholder="Standard"
                    value={pricing.Standard}
                    onChange={(e) =>
                      setPricing((prev) => ({
                        ...prev,
                        Standard: e.target.value,
                      }))
                    }
                  />
                </Col>
                <Col>
                  <i>Standard</i>
                  <Form.Control
                    type="number"
                    placeholder="Deluxe"
                    value={pricing.Deluxe}
                    onChange={(e) =>
                      setPricing((prev) => ({
                        ...prev,
                        Deluxe: e.target.value,
                      }))
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="subArea" className="mb-3">
              <Form.Label>
                {" "}
                <b>Sub Area</b>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter sub area name"
                value={subArea}
                onChange={(e) => setSubArea(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="mainImage" className="mb-3">
              <Form.Label>
                {" "}
                <b>Main Image</b>{" "}
              </Form.Label>
              <Form.Control type="file" onChange={uploadImageHandler} />
              {uploadingImage && <p>Uploading image...</p>}
            </Form.Group>

            <Form.Group controlId="map" className="mb-3">
              <Form.Label>
                {" "}
                <b>Map Link</b>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter map src..."
                value={map}
                onChange={(e) => setMap(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="information" className="mb-3">
              <Form.Label>
                <b>Information</b>
              </Form.Label>
              <Row>
                {Object.keys(information).map((key) => (
                  <Col md={6} key={key}>
                    <div className="d-flex align-items-center mb-2">
                      <i className="me-2">{key}:</i>
                      <Form.Control
                        type="text"
                        value={information[key]}
                        onChange={(e) =>
                          setInformation((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group controlId="itinerary" className="mb-3">
              <Form.Label>
                <b>Itinerary</b>
              </Form.Label>
              {itinerary.map((day, index) => (
                <Card className="mb-3 shadow-sm" key={index}>
                  <Card.Body>
                    <Row>
                      {Object.keys(day).map((key) => (
                        <Col md={4} key={key}>
                          <Form.Group controlId={`itinerary-${index}-${key}`}>
                            <Form.Label>{key}</Form.Label>
                            <Form.Control
                              type="text"
                              value={day[key]}
                              onChange={(e) => {
                                const updatedItinerary = [...itinerary];
                                updatedItinerary[index][key] = e.target.value;
                                setItinerary(updatedItinerary);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      ))}
                    </Row>
                    <Button
                      variant="danger"
                      className="mt-3"
                      onClick={() => {
                        const updatedItinerary = itinerary.filter(
                          (_, i) => i !== index
                        );
                        setItinerary(updatedItinerary);
                      }}
                    >
                      Remove Day {day.Day}
                    </Button>
                  </Card.Body>
                </Card>
              ))}
              <Button
                variant="success"
                className="mt-3"
                onClick={() =>
                  setItinerary([
                    ...itinerary,
                    {
                      Day: "",
                      Distance: "",
                      Altitude: "",
                      Duration: "",
                      Accommodation: "",
                    },
                  ])
                }
              >
                <FaCalendarDays /> Add Day
              </Button>
            </Form.Group>

            <Button
              type="submit"
              variant="dark"
              className="w-100 py-2"
              disabled={updating}
            >
              {updating ? "Updating..." : "Update Package"}
            </Button>
          </Form>
        )}
      </Card>
    </FormContainer>
  );
}

export default TourPackageEditPage;
