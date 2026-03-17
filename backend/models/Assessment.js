const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Assessment name is required"],
      trim: true,
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
      min: 0,
      max: 100,
    },
    grade: {
      type: Number,
      min: 0,
      max: 100,
      default: null,
    },

    // relationship will be refined in Part 3
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assessment", assessmentSchema);