const urls = require("../data/urls-data");
const uses = require("../data/uses-data");

// LIST
function list(req, res) {
  res.status(200).json({ data: urls });
}

// READ
function read(req, res) {
  res.status(200).json({ data: res.locals.url });

  // adds new use object on GET request to specified URL
  const newUse = {
    id: uses.length + 1,
    urlId: res.locals.url.id,
    time: Date.now(),
  };

  uses.push(newUse);
}

// CREATE
function create(req, res) {
  const {
    data: { href },
  } = req.body;

  const newUrl = {
    id: urls.length + 1,
    href,
  };

  urls.push(newUrl);
  res.status(201).json({ data: newUrl })
}

// UPDATE
function update(req, res) {
  const {
    data: { href },
  } = req.body;

  res.locals.url.href = href;

  res.status(200).json({ data: res.locals.url });
}

// VALIDATION
function isValidUrl(req, res, next) {
  const { urlId } = req.params;
  const foundUrl = urls.find((url) => url.id === Number(urlId));

  if (foundUrl) {
    res.locals.url = foundUrl;
    return next();
  } else {
    next({
      status: 404,
      message: `Could not find url id: ${urlId}`,
    });
  }
}

function hasValidInformation(req, res, next) {
  const {
    data: { href },
  } = req.body;

  if (!href) {
    next({
      status: 400,
      message: `Please add an href property`,
    });
  } else {
    next();
  }
}

module.exports = {
  list,
  create: [hasValidInformation, create],
  read: [isValidUrl, read],
  update: [isValidUrl, hasValidInformation, update],
  isValidUrl,
};
