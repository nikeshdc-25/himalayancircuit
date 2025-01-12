import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    Category: {
      type: String,
      required: true,
      enum: ["tour", "trekking", "culturaltour", "climbing"],
    },
    Area: {
      type: String,
      required: true,
    },
    SubArea: {
      type: {
        Name: { type: String },
        SubDescription: { type: String },
      },
    },
    Images: { type: [String] },
    Description: {
      type: String,
      required: true,
    },
    Pricing: {
      Standard: {
        type: Number,
        required: true,
      },
      Deluxe: {
        type: Number,
        required: true,
      },
    },
    AtAGlance: {
      Distance: {
        type: String,
      },
      Altitude: {
        type: String,
      },
      Days: {
        type: Number,
      },
      Fitness: {
        type: String,
      },
      Season: {
        type: String,
      },
      RouteGrade: {
        type: String,
      },
    },
    MapLink: {
      type: String,
    },
    Information: {
      Inclusion: {
        type: [String],
      },
      Exclusion: {
        type: [String],
      },
      Fees: {
        type: String,
      },
      Gears: {
        type: [String],
      },
    },
    Itinerary: [
      {
        Day: {
          type: Number,
          required: true,
        },
        Distance: {
          type: String,
        },
        Altitude: {
          type: String,
        },
        Duration: {
          type: String,
        },
        Accommodation: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);
export default Package;
