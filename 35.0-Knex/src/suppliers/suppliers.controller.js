const suppliersService = require("./suppliers.service");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// LIST
function list(req, res, next) {
  suppliersService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

// CREATE
function create(req, res, next) {
  const { data = {} } = req.body;
  suppliersService
    .create(data)
    .then(() => res.status(201).json({ data: data }))
    .catch(next);
}

// UPDATE
function update(req, res, next) {
  const { data = {} } = req.body;
  const updatedSupplier = {
    ...data,
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
// list out all columns in suppliers table that request needs to have (for create and update)
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
  // iterate through keys in req.body
  const invalidFields = Object.keys(req.body.data).filter(
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
  list: asyncErrorBoundary(list),
  create: [
    asyncErrorBoundary(hasOnlyValidProperties),
    asyncErrorBoundary(hasRequiredProperties),
    asyncErrorBoundary(create),
  ],
  update: [
    asyncErrorBoundary(supplierExists),
    asyncErrorBoundary(hasOnlyValidProperties),
    asyncErrorBoundary(hasRequiredProperties),
    asyncErrorBoundary(update),
  ],
  delete: [asyncErrorBoundary(supplierExists), asyncErrorBoundary(destroy)],
};
