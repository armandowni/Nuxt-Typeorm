import { sendMail } from "../../../util/mail";

export const post = async (req, res) => {
  const data = req.body;
  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  const result = await sendMail(data);
  res.send(result);
};
