const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// welcome() is a resolved promise
welcome().then((res) => console.log(res));

const question = "Will the weather be nice today?";
// const tellPromise = tell(question);

// can also have tellPromise.then() 
tell(question)
  .then((response) => {
    // console.logging declared question variable
    console.log(question);
    // console.logging the response from the tell() promise
    console.log(response);
  })
  .catch((err) => {
    // returns error or reject message from tell() if no question
    console.error(err);
  });

goodbye().then((res) => console.log(res));
