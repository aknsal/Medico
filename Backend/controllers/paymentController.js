const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: "rzp_test_vTrqPxJmnQH255",
    key_secret: "bMurwSGstL6j4Gmx1UqmbfHp",
  });

const validatePayment = async (req,res) => {
    const secret = "12345678";

  console.log(req.body);
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    console.log(JSON.stringify(req.body, null, 4));
    return res.status(200).json({
        success: true
    })
  } else {
    // pass it
  }
  res.json({ status: "ok" });
}

const payOrder = async (req,res) => {
    let options = {
        amount: 10000,
        currency: "INR",
        receipt: shortid.generate(),
      };
      const order = await razorpay.orders.create(options, function (err, order) {
        console.log(order);
        res.json(order);
      });
}

module.exports = { validatePayment, payOrder };