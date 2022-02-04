import CamperModel, { CamperInt } from "../database/models/CamperModel"

export const getCamperData = async (id: String): Promise<CamperInt> => {
    const CamperData = (await CamperModel.findOne({ id })) || (await CamperModel.create({ discordId: id, round: 1, day: 0, date: Date.now() }));
    return CamperData;
};