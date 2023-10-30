import { sendMail } from "../../../util/mail";

export const post = async (req, res) => {
  const data = req.body;
  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  await sendMail(data)
    .then((data) => {
      res.status(200).send({ message: "Success Send Email" });
    })
    .catch((err) => new Error(err.message));
};
