app.post('/verify-otp', async (req, res) => {
    const { phone, otp } = req.body;
    const user = await User.findOne({ phone });

    if (!user) return res.status(404).send('User not found');
    if (user.otp !== otp) return res.status(400).send('Invalid OTP');
    if (Date.now() > user.otpExpires) return res.status(400).send('OTP expired');

    // Clear OTP after successful verification
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.send('OTP verified successfully');
});
