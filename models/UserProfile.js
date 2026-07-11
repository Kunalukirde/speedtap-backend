const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema(
  {
    designation: String,
    company: String,
    joiningDate: String,
    endDate: String,
    currentlyWorking: Boolean,
    responsibilities: String,
  },
  { _id: false }
);

const EducationSchema = new mongoose.Schema(
  {
    degree: String,
    specialization: String,
    university: String,
    passingYear: String,
    percentage: String,
  },
  { _id: false }
);

const ResumeSchema = new mongoose.Schema(
  {
    resumeId: String,
    originalName: String,
    filename: String,
    fileUrl: String,
    size: Number,
    createdAt: Date,
  },
  { _id: false }
);

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    personal: {
      fullName: String,
      email: String,
      mobile: String,
      location: String,
      dob: String,
      gender: String,
      summary: String,
    },

    experience: [ExperienceSchema],

    education: [EducationSchema],

    skills: [String],

    preferences: {
      preferredRole: String,
      totalExperience: String,
      expectedSalary: String,
      noticePeriod: String,
      preferredLocations: String,
      workMode: String,

      platforms: {
        naukri: Boolean,
        foundit: Boolean,
        apna: Boolean,
      },
    },

    resume: ResumeSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", ProfileSchema);