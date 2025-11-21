const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
    sourceId: { type: String, unique: true, index: true },
    title: String,
    company: {
        name: String,
        logo: String
    },
    location: {
        city: String,
        country: String,
        remote: Boolean
    },
    descriptionText: String,
    applyUrl: String,

    datePosted: Date,
    dateFetched: Date,

    status: { type: String, default: "active" }
}, { timestamps: true });

//indexes for efficient searching
internshipSchema.index({ title: "text", descriptionText: "text" });
internshipSchema.index({ date_posted: -1 });

module.exports = mongoose.model("Internship", internshipSchema);
