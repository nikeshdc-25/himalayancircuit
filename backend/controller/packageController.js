import asyncHandler from "../middleware/asyncHandler.js";
import Package from "../models/packageModel.js";
import ApiError from "../utils/apiError.js";

//@desc add a new Package tour
//route /api/v1/Package
//@access private
const addPackage = asyncHandler(async (req, res, next) => {
  let packages = await Package.create({
    Category: "trekking",
    Area: "Langtang Trekking",
    SubArea: {
      Name: "Langtang Valley with Gosaikunda Trek",
      SubDescription:
        "There are many popular trekking destinations in Nepal. One of the most  picturesque is near Kathmandu and is known as Langtang.",
    },
    Images: [],
    Description:
      "Langtang  is famous for red panda and is the closest trekking trail from Kathmandu valley. ",
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
      RouteGrade: "Easy",
    },
    MapLink: "/images/Package-map.jpg",
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
    message: `Package Tour added successfully!`,
    packages,
  });
});

// @desc    Get all packages
// @route   GET /api/v1/package?pageNumber=3
// @access  Public
const getPackage = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;
  let keyword = req.query.keyword;
  keyword = keyword
    ? {
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
      }
    : {};
  let packageCount = await Package.countDocuments({ ...keyword });
  let packages = await Package.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.send({ packages, page, pages: Math.ceil(packageCount / pageSize) });
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
      SubDescription:
        req.body.SubArea.SubDescription || packages.SubArea.SubDescription,
    };
  }
  (packages.Images = req.body.Images || packages.Images),
    (packages.Description = req.body.Description || packages.Description);
  packages.Pricing = req.body.Pricing || packages.Pricing;
  packages.AtAGlance = req.body.AtAGlance || packages.AtAGlance;
  packages.MapLink = req.body.MapLink || packages.MapLink;
  packages.Information = req.body.Information || packages.Information;
  packages.Itinerary = req.body.Itinerary || packages.Itinerary;

  let updatedPackage = await packages.save();
  res.send({
    message: `Package ${packages.Category} updated successfully!`,
    packages: updatedPackage,
  });
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
//route /api/v1/package/:id
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

//@desc Get packages by category
//@route GET /api/v1/package/category/:category
//@access Public
const getPackagesByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const packages = await Package.find({ Category: category });
  if (packages.length === 0) {
    res
      .status(404)
      .send({ message: `No packages found for category: ${category}` });
  } else {
    res.send(packages);
  }
});

//@desc Get all Tour packages
//route GET /api/v1/Package/tour
//@access Public
const getTourOnly = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  // Build keyword for search if provided
  let keyword = req.query.keyword;
  keyword = keyword
    ? {
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
        Category: "tour",
      }
    : { Category: "tour" };

  const tourCount = await Package.countDocuments({ ...keyword });

  const tours = await Package.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!tours || tours.length === 0) {
    throw new ApiError(404, "No Tour Packages found!");
  }

  res.send({ tours, page, pages: Math.ceil(tourCount / pageSize) });
});

//@desc Get all Trekking packages
//route GET /api/v1/Package/trekking
//@access Public
const getTrekkingOnly = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  // Build keyword for search if provided
  let keyword = req.query.keyword;
  keyword = keyword
    ? {
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
        Category: "trekking",
      }
    : { Category: "trekking" };

  const trekkingCount = await Package.countDocuments({ ...keyword });
  const trekking = await Package.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!trekking || trekking.length === 0) {
    throw new ApiError(404, "No Trekking Packages found!");
  }

  res.send({ trekking, page, pages: Math.ceil(trekkingCount / pageSize) });
});

//@desc Get all Cultural Tour packages
//route GET /api/v1/Package/culturaltour
//@access Public
const getCulturalTourOnly = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  // Build keyword for search if provided
  let keyword = req.query.keyword;
  keyword = keyword
    ? {
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
        Category: "culturaltour",
      }
    : { Category: "culturaltour" };

  const culturalTourCount = await Package.countDocuments({ ...keyword });

  const culturalTours = await Package.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!culturalTours || culturalTours.length === 0) {
    throw new ApiError(404, "No Cultural Tour Packages found!");
  }

  res.send({
    culturalTours,
    page,
    pages: Math.ceil(culturalTourCount / pageSize),
  });
});

//@desc Get all Climbing packages
//route GET /api/v1/Package/climbing
//@access Public
const getClimbingOnly = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  // Build keyword for search if provided
  let keyword = req.query.keyword;
  keyword = keyword
    ? {
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
        Category: "climbing",
      }
    : { Category: "climbing" };

  const climbingCount = await Package.countDocuments({ ...keyword });

  const climbing = await Package.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!climbing || climbing.length === 0) {
    throw new ApiError(404, "No Climbing Packages found!");
  }

  res.send({ climbing, page, pages: Math.ceil(climbingCount / pageSize) });
});

export {
  addPackage,
  updatePackage,
  getPackage,
  getSinglePackage,
  deletePackage,
  getPackagesByCategory,
  getClimbingOnly,
  getCulturalTourOnly,
  getTourOnly,
  getTrekkingOnly,
};
