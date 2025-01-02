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
    SubArea: {
      Name: "Nagarkot",
      Images: ["/images/Nagarkot1.jpg", "/images/Nagarkot2.jpg"]
    },
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
  packages.Category = req.body.Category || packages.Category;
  packages.Area = req.body.Area || packages.Area;
  if (req.body.SubArea) {
    packages.SubArea = {
      Name: req.body.SubArea.Name || packages.SubArea.Name,
      Images: req.body.SubArea.Images || packages.SubArea.Images,
    };
  }
  packages.Image = req.body.Image || packages.Image;
  packages.Description = req.body.Description || packages.Description;
  packages.Pricing = req.body.Pricing || packages.Pricing;
  packages.AtAGlance = req.body.AtAGlance || packages.AtAGlance;
  packages.MapImage = req.body.MapImage || packages.MapImage;
  packages.Information = req.body.Information || packages.Information;
  packages.Itinerary = req.body.Itinerary || packages.Itinerary;

  let updatedPackage = await packages.save();
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
