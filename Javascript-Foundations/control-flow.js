function newYorkCitySalesPrice(product, city) {
  let tax;
  if (city === "Amherst") {
    tax = 1.0875;
  } else if (city === "Brooklyn") {
    tax = 1.08875;
  } else if (city === "Buffalo") {
    tax = 1.0875;
  } else if (city === "Cheektowaga") {
    tax = 1.0875;
  } else if (city === "Hempstead") {
    tax = 1.08625;
  } else if (city === "Jamaica") {
    tax = 1.08875;
  } else if (city === "Mount Vernon") {
    tax = 1.08375;
  } else if (city === "New York City") {
    tax = 1.08875;
  } else if (city === "Staten Island") {
    tax = 1.08875;
  } else if (city === "White Plains") {
    tax = 1.08375;
  } else if (city === "Yonkers") {
    tax = 1.08875;
  } else {
    tax = 1.08;
  }
}

// change to switch statement 
function newYorkCitySalesPrice(product, city) {
  let tax;
  switch (city) {
    case 'Amherst':
    case 'Buffalo':
    case 'Cheektowaga':
      tax = 1.0875;
      break;
    case 'Brooklyn':
    case 'Jamaica':
    case 'New York City':
    case 'Staten Island':
    case 'Yonkers':
      tax = 1.08875;
      break;
    case 'Hempstead':
      tax = 1.08625;
      break;
    case 'Mount Vernon':
    case 'White Plains':
      tax = 1.08375;
    default: 
      tax = 1.08;
  }
}