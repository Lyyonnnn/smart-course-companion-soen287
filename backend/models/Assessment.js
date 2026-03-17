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
      default: null,
      min: 0,
      max: 100,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Assessment must belong to a course"],
    },
  },
  {
    timestamps: true,
  }
);

// Fast lookup of assessments by course
assessmentSchema.index({ course: 1 });

module.exports = mongoose.model("Assessment", assessmentSchema);