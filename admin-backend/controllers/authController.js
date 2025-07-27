const Admin = require("../models/Admin");

// Signup Admin
exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    // Check for duplicate email
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newAdmin = new Admin({ name, email, phone, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Signin Admin
// Updated signin controller
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }

    // Simple password comparison (case-sensitive, exact match)
    if (admin.password.trim() !== password.trim()) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Successful login response
    res.status(200).json({
      success: true,
      message: "Login successful",
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
      },
      token: "dummy-token", // Add a simple token if needed for frontend
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
