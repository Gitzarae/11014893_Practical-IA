const registerpatients = require("../model/registerpatient.model");

// Create a Registerpatients
const createRegisterpatients = async (req, res) => {
  const { PatientID, name, gender, phonenumber, contact } = req.body;

  console.log("PatientID ", PatientID, " name", name);

  try {
    const registerpatients = await registerpatients.create({
      PatientID,
      name,
      gender,
      phonenumber,
      contact
    });

    return res.status(200).json({
      registerpatients,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Update a registerpatients by ID
const updateregisterpatients = async (req, res) => {
  const { id } = req.params;
  const { PatientID, name, gender, phonenumber, contact } = req.body;

  try {
    const updatedregisterpatients = await registerpatients.findByIdAndUpdate(
      id,
      { PatientID, name, gender, phonenumber, contact },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        error: "registerpatients not found",
      });
    }

    return res.status(200).json({
      todo: updatedTodo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Get all registerpatients
const getAllregisterpatients = async (req, res) => {
  try {
    const registerpatients = await Todo.find();

    return res.status(200).json({
      todos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Delete a registerpatients by ID
const deleteregisterpatients = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedregisterpatients = await registerpatients.findByIdAndDelete(id);

    if (!deletedregisterpatients) {
      return res.status(404).json({
        error: "registerpatients not found",
      });
    }

    return res.status(200).json({
      message: "registerpatients deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  createRegisterpatients,
  updateRegisterpatients,
  getAllRegisterpatients,
  deleteRegisterpatients,
};
