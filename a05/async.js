async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });

    let result = await promise;

    console.log(result);
    
}

f();

(async() => {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    console.log('after 3 s done.');
})();