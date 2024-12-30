import mongoose from "mongoose";

const ghumghamSchema = new mongoose.Schema(
  {
    Category: {
      type: String,
      required: true,
      enum: ["Tour", "Trekking", "Cultural Tour", "Climbing"]
    },
    Area: {
      type: String,
      required: true
    },
    SubArea: {
      type: String
    },
    Image: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    Pricing: {
      Standard: {
        type: Number,
        required: true
      },
      Deluxe: {
        type: Number,
        required: true
      }
    },
    AtAGlance: {
      Distance: {
        type: String
      },
      Altitude: {
        type: String
      },
      Days: {
        type: Number
      },
      Fitness: {
        type: String
      },
      Season: {
        type: String
      },
      RouteGrade: {
        type: String
      }
    },
    MapImage: {
      type: String
    },
    Information: {
      Inclusion: {
        type: [String]
      },
      Exclusion: {
        type: [String]
      },
      Fees: {
        type: String
      },
      Gears: {
        type: [String]
      }
    },
    Itinerary: [
      {
        Day: {
          type: Number,
          required: true
        },
        Distance: {
          type: String
        },
        Altitude: {
          type: String
        },
        Duration: {
          type: String
        },
        Accommodation: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);

const Ghumgham = mongoose.model("Ghumgham", ghumghamSchema);
export default Ghumgham;
