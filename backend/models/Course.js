const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },
    code: {
      type: String,
      required: [true, "Course code is required"],
      trim: true,
      uppercase: true,
    },
    term: {
      type: String,
      required: [true, "Term is required"],
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Course must belong to a user"],
    },
  },
  {
    timestamps: true,
  }
);

// Fast lookup of courses by user
courseSchema.index({ user: 1 });

// Prevent duplicate course code for same user in same term
courseSchema.index({ user: 1, code: 1, term: 1 }, { unique: true });

module.exports = mongoose.model("Course", courseSchema);