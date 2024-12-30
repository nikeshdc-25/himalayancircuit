import asyncHandler from "../middleware/asyncHandler.js";
import Ghumgham from "../models/GhumghamModel.js";
import ApiError from "../utils/apiError.js";

//@desc add a new Ghumgham tour
//route /api/v1/ghumgham
//@access private
const addGhumgham = asyncHandler(async (req, res, next) => {
    let ghumgham = await Ghumgham.create({
      Category: "Tour",
      Area: "Kathmandu",
      SubArea: "Nagarkot",
      Image: "/images/ghumgham-sample.jpg",
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
      MapImage: "/images/ghumgham-map.jpg",
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
      message: "Ghumgham Tour added successfully!",
      ghumgham,
    });
  });
  

//@desc update an existing Ghumgham tour
//route /api/v1/ghumgham/:id
//@access private
const updateGhumgham = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let ghumgham = await Ghumgham.findById(id);
  if (!ghumgham) {
    throw new ApiError(404, "Ghumgham Tour not found!");
  }
  ghumgham.Category = req.body.Category || ghumgham.Category;
  ghumgham.Area = req.body.Area || ghumgham.Area;
  ghumgham.SubArea = req.body.SubArea || ghumgham.SubArea;
  ghumgham.Image = req.body.Image || ghumgham.Image;
  ghumgham.Description = req.body.Description || ghumgham.Description;
  ghumgham.Pricing = req.body.Pricing || ghumgham.Pricing;
  ghumgham.AtAGlance = req.body.AtAGlance || ghumgham.AtAGlance;
  ghumgham.MapImage = req.body.MapImage || ghumgham.MapImage;
  ghumgham.Information = req.body.Information || ghumgham.Information;
  ghumgham.Itinerary = req.body.Itinerary || ghumgham.Itinerary;

  let updatedGhumgham = await ghumgham.save();
  res.send({ message: "Ghumgham Tour updated successfully!", ghumgham: updatedGhumgham });
});

//@desc get all Ghumgham tours
//route /api/v1/ghumgham
//@access public
const getGhumgham = asyncHandler(async (req, res, next) => {
  let ghumgham = await Ghumgham.find({});
  res.send(ghumgham);
});

//@desc get a single Ghumgham tour by id
//route /api/v1/ghumgham/:id
//@access public
const getSingleGhumgham = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let ghumgham = await Ghumgham.findById(id);
  if (!ghumgham) {
    throw new ApiError(404, "Ghumgham Tour not found!");
  }
  res.send(ghumgham);
});

//@desc delete a Ghumgham tour
//route /api/v1/ghumgham/:id
//@access private
const deleteGhumgham = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let ghumgham = await Ghumgham.findById(id);
  if (!ghumgham) {
    throw new ApiError(404, "Ghumgham Tour not found!");
  }
  await Ghumgham.findByIdAndDelete(id);
  res.send({ message: "Ghumgham Tour deleted successfully!" });
});

export {
  addGhumgham,
  updateGhumgham,
  getGhumgham,
  getSingleGhumgham,
  deleteGhumgham
};
