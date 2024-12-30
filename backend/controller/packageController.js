import asyncHandler from "../middleware/asyncHandler.js";
import Package from "../models/packageModel.js";
import ApiError from "../utils/apiError.js";

//@desc add a new Package tour
//route /api/v1/Package
//@access private
const addPackage = asyncHandler(async (req, res, next) => {
  let packages = await Package.create({
    Category: "Tour",
    Area: "Kathmandu",
    SubArea: "Nagarkot",
    Image: "/images/Package-sample.jpg",
    Description: "A scenic tour to Nagarkot for a sunrise view.",
    Pricing: {
      Standard: 1500,
      Deluxe: 2500,
    },
    AtAGlance: {
      Distance: "50 km",
      Altitude: "2,195 meters",
      Days: 2,
      Fitness: "Moderate",
      Season: "Spring, Autumn",
      Route_Grade: "Easy",
    },
    MapImage: "/images/Package-map.jpg",
    Information: {
      Inclusion: "Transportation, Guide, Accommodation, Meals",
      Exclusion: "Personal Expenses, Drinks, Tips",
      Fees: "500",
      Gears: "Comfortable shoes, Water bottle",
    },
    Itinerary: [
      {
        Day: 1,
        Distance: "25 km",
        Altitude: "2,195 meters",
        Duration: "5 hours",
        Accommodation: "Hotel in Nagarkot",
      },
      {
        Day: 2,
        Distance: "25 km",
        Altitude: "2,195 meters",
        Duration: "4 hours",
        Accommodation: "None (Departure)",
      },
    ],
  });

  res.send({
    message: "Package Tour added successfully!",
    packages,
  });
});

//@desc update an existing Package tour
//route /api/v1/Package/:id
//@access private
const updatePackage = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let packages = await Package.findById(id);
  if (!packages) {
    throw new ApiError(404, "Package Tour not found!");
  }
  Package.Category = req.body.Category || Package.Category;
  Package.Area = req.body.Area || Package.Area;
  Package.SubArea = req.body.SubArea || Package.SubArea;
  Package.Image = req.body.Image || Package.Image;
  Package.Description = req.body.Description || Package.Description;
  Package.Pricing = req.body.Pricing || Package.Pricing;
  Package.AtAGlance = req.body.AtAGlance || Package.AtAGlance;
  Package.MapImage = req.body.MapImage || Package.MapImage;
  Package.Information = req.body.Information || Package.Information;
  Package.Itinerary = req.body.Itinerary || Package.Itinerary;

  let updatedPackage = await Package.save();
  res.send({
    message: "Package Tour updated successfully!",
    packages: updatedPackage,
  });
});

//@desc get all Package tours
//route /api/v1/Package
//@access public
const getPackage = asyncHandler(async (req, res, next) => {
  let packages = await Package.find({});
  res.send(packages);
});

//@desc get a single Package tour by id
//route /api/v1/Package/:id
//@access public
const getSinglePackage = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let packages = await Package.findById(id);
  if (!packages) {
    throw new ApiError(404, "Package Tour not found!");
  }
  res.send(packages);
});

//@desc delete a Package tour
//route /api/v1/Package/:id
//@access private
const deletePackage = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let packages = await Package.findById(id);
  if (!packages) {
    throw new ApiError(404, "Package Tour not found!");
  }
  await Package.findByIdAndDelete(id);
  res.send({ message: "Package Tour deleted successfully!" });
});

export {
  addPackage,
  updatePackage,
  getPackage,
  getSinglePackage,
  deletePackage,
};
