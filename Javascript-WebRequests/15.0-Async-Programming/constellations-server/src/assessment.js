async function update(constellation) {
  try {
    return axios.put(`${BASE_URL}/${constellation.id}`, constellation);
  } catch (err) {
    console.error(`Updating constellation (id: ${constellation.id}) failed.`);
  }
}

async function bulkImport(constellations) {
  try {
    if (!Array.isArray(constellations)) {
      throw "Inputted argument must be an array.";
    }
    if (constellations.every((constellation) => isValid(constellation))) {
      return Promise.allSettled(
        constellations.map((constellation) => update(constellation))
      );
    } else {
      throw "All constellations must include relevant fields.";
    }
  } catch (err) {
    console.error(err);
  }
}
