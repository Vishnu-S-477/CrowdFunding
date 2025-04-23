import mongoose from "mongoose";
import { getObjectUrl } from "../PreSignedUrl/getObjectPresignedUrl.js";

const schema = mongoose.Schema({
  campaignProfileName: String,
  campaignCategory: String,
  campaignTitle: String,
  campaignDescription: String,
  campaignTotalAmount: Number,
});

const campaignModel =
  mongoose.models.campaign || mongoose.model("campaign", schema);

export const getObjectTemplate = async () => {
  const campaigns = await campaignModel.find({}).lean();
  let url = {};
  for (let i = 0; i < campaigns.length; i++) {
    const objectName = campaigns[i].campaignProfileName;
    url = await getObjectUrl(objectName);
    campaigns[i].url = url;
  }

  return campaigns;
};

getObjectTemplate();
