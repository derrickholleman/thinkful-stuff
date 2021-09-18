function download(url, callback) {
  // sync code
  console.log(`Start downloading video from ${url} ...`);

  // async code that lets other code run while processing
  setTimeout(() => {
    const fileName = url.split("/").pop();
    console.log(`Video downloaded from ${url} to ${fileName}.`);
    // (filename) gets passed to process(videoFile)
    callback(fileName);
  }, 2000);
}

// process is in the callback function of download so it's run after download completes
function process(videoFile) {
  console.log(`Start processing ${videoFile} ...`);

  setTimeout(() => {
    console.log(`Video processing complete: ${videoFile}.`);
  }, 3000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

// download starts right away , process === callback
download(url, process);
