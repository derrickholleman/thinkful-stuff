const observationsService = require("./observations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await observationsService.list();
  res.json(data);
}

async function create(req, res) {
  const data = await observationsService.create(req.body);
  res.status(201).json(data);
}

// VALIDATION
const VALID_PROPERTIES = ["latitude", "longitude", "sky_condition"];

function hasOnlyValidProperties(req, res, next) {
  // iterate through keys in req.body
  const invalidFields = Object.keys(req.body).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  next();
}

const validSkyConditions = [100, 101, 102, 103, 104, 106, 108, 109];
function hasValidSkyCondition(req, res, next) {
  const { sky_condition } = req.body;
  console.log("sky condition value in database:", sky_condition);

  if (validSkyConditions.includes(sky_condition)) {
    return next();
  } else {
    return next({
      status: 400,
      message:
        "Sky condition must be either 100, 101, 102, 103, 104, 106, 108 or 109",
    });
  }
}

function isLatitudeValid(req, res, next) {
  const { latitude } = req.body;
  if (latitude >= -90 && latitude <= 90) {
    next();
  } else {
    next({
      status: 400,
      message: "Latitude must be between -90 and 90",
    });
  }
}
function isLongitudeValid(req, res, next) {
  const { longitude } = req.body;
  if (longitude >= -180 && longitude <= 180) {
    next();
  } else {
    next({
      status: 400,
      message: "Longitude must be between -90 and 90",
    });
  }
}

async function destroy(req, res) {
  const { observationId } = req.params;
  await observationsService.delete(observationId);
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [
    hasOnlyValidProperties,
    isLatitudeValid,
    isLongitudeValid,
    hasValidSkyCondition,
    asyncErrorBoundary(create),
  ],
  delete: asyncErrorBoundary(destroy),
};
