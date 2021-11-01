const suppliersService = require("./suppliers.service");
const hasProperties = require("../errors/hasProperties");

function list(req, res, next) {
  suppliersService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}
function create(req, res, next) {
  suppliersService
    .create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

function update(req, res, next) {
  res.json({ data: { supplier_name: "updated supplier" } });
}

function destroy(req, res, next) {
  res.sendStatus(204);
}

// VALIDATION
// list out all columns in suppliers table that request needs to have
const VALID_PROPERTIES = [
  "supplier_name",
  "supplier_address_line_1",
  "supplier_address_line_2",
  "supplier_city",
  "supplier_state",
  "supplier_zip",
  "supplier_phone",
  "supplier_email",
  "supplier_notes",
  "supplier_type_of_goods",
];

// check for required properties.  pass properties into function from error folder
const hasRequiredProperties = hasProperties("supplier_name", "supplier_email"); 

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;

  // iterate through keys in req.body
  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  // if there are any invalid fields
  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  next();
}

module.exports = {
  list,
  create: [hasOnlyValidProperties, hasRequiredProperties, create],
  update,
  delete: destroy,
};
