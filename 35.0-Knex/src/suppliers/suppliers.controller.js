const suppliersService = require("./suppliers.service");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// LIST
async function list(req, res, next) {
  const data = await suppliersService.list()
  res.json({ data })
}

// READ
async function read(req, res, next) {
  const data = await suppliersService.read(res.locals.supplier.supplier_id)
  res.json({ data: data })
}

// CREATE
async function create(req, res, next) {
  const data = await suppliersService.create(req.body.data)
  res.status(201).json({ data })
}

// UPDATE
async function update(req, res, next) {
  const { supplier } = res.locals
  const updatedSupplier = {
    ...req.body.data,
    supplier_id: supplier.supplier_id
  }
  const data = await suppliersService.update(updatedSupplier)
  res.json({ data })
}

// DESTROY
async function destroy(req, res, next) {
  const { supplier } = res.locals
  await suppliersService.delete(supplier.supplier_id)
  res.sendStatus(204)
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

async function supplierExists(req, res, next) {
  const { supplierId } = req.params;
  const supplier = await suppliersService.read(supplierId);

  if (supplier) {
    res.locals.supplier = supplier;
    return next();
  } else {
    next({ status: 404, message: `Supplier cannot be found.` });
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(supplierExists), asyncErrorBoundary(read)],
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
