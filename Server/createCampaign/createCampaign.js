import mongoose from "mongoose";

// const mongoURI =
//   "mongodb+srv://2022peccb287:2KwK45WkXGjPYCgi@cluster.w6owg.mongodb.net/?retryWrites=true&w=majority&appName=cluster";

// const mongoDbConnection = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("MongoDB Connection Established Successfully");
//   } catch (e) {
//     console.log("Error In Access MongoDB Connection Establishment");
//   }
// };

// mongoDbConnection();

const schema = mongoose.Schema({
  campaignProfileName: String,
  campaignCategory: String,
  campaignTitle: String,
  campaignDescription: String,
  campaignTotalAmount: Number,
});

const campaignModel =
  mongoose.models.campaign || mongoose.model("campaign", schema);

export const CreateCampaign = async (
  campaignProfileName,
  campaignCategory,
  campaignTitle,
  campaignDescription,
  campaignTotalAmount
) => {
  try {
    const newCampaign = new campaignModel({
      campaignProfileName,
      campaignCategory,
      campaignTitle,
      campaignDescription,
      campaignTotalAmount,
    });

    await newCampaign.save();
    return "campaignCreatedSuccessfully";
  } catch (e) {
    return "error in campaign Creation";
  }
};

// CreateCampaign("sample1.jpg", "buisness", "tile1", "description", 50000);
