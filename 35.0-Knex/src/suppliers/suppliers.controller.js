const suppliersService = require("./suppliers.service");
const hasProperties = require("../errors/hasProperties");

// LIST
function list(req, res, next) {
  suppliersService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

// CREATE
function create(req, res, next) {
  const { data } = req.body;
  suppliersService
    .create(data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

// UPDATE
function update(req, res, next) {
  const updatedSupplier = {
    ...req.body.data,
    // keeps same id on update
    supplier_id: res.locals.supplier.supplier_id,
  };
  suppliersService
    .update(updatedSupplier)
    .then((data) => res.json({ data }))
    .catch(next);
}

// DESTROY
function destroy(req, res, next) {
  suppliersService
    .delete(res.locals.supplier.supplier_id)
    .then(() => res.sendStatus(204))
    .catch(next);
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

function supplierExists(req, res, next) {
  const { supplierId } = req.params;

  suppliersService
    .read(supplierId)
    .then((supplier) => {
      if (supplier) {
        res.locals.supplier = supplier;
        return next();
      }
      next({ status: 404, message: `Supplier cannot be found.` });
    })
    .catch(next);
}

module.exports = {
  list,
  create: [hasOnlyValidProperties, hasRequiredProperties, create],
  update: [
    supplierExists,
    hasOnlyValidProperties,
    hasRequiredProperties,
    update,
  ],
  delete: [supplierExists, destroy],
};
