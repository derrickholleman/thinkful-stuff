const observationsService = require("./observations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await observationsService.list();
  res.json(data);
}

async function read(req, res) {
  const { observation } = res.locals;
  const data = await observationsService.read(observation.observation_id);
  res.json(data);
}

async function create(req, res) {
  const data = await observationsService.create(req.body);
  res.status(201).json(data);
}

async function update(req, res) {
  const { observation } = res.locals;

  const newObservation = {
    ...req.body,
    observation_id: observation.observation_id,
  };
  const data = await observationsService.update(newObservation);
  res.json(data);
}

async function destroy(req, res) {
  const { observationId } = req.params;
  await observationsService.delete(observationId);
  res.sendStatus(204);
}

// VALIDATION
async function observationExists(req, res, next) {
  const { observationId } = req.params;
  const validObservation = await observationsService.read(observationId);

  if (validObservation) {
    res.locals.observation = validObservation;
    return next();
  } else {
    return next({
      status: 404,
      message: "Observation could not be found",
    });
  }
}
const VALID_PROPERTIES = [
  "observation_id",
  "latitude",
  "longitude",
  "sky_condition",
  "created_at",
  "updated_at",
];

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

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(observationExists), asyncErrorBoundary(read)],
  create: [
    hasOnlyValidProperties,
    isLatitudeValid,
    isLongitudeValid,
    hasValidSkyCondition,
    asyncErrorBoundary(create),
  ],
  update: [
    hasOnlyValidProperties,
    isLatitudeValid,
    isLongitudeValid,
    hasValidSkyCondition,
    asyncErrorBoundary(observationExists),
    asyncErrorBoundary(update),
  ],
  delete: [asyncErrorBoundary(observationExists), asyncErrorBoundary(destroy)],
};
