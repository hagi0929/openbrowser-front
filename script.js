async function get_available_rpcs_js(connection) {
  return await fetch_js(connection + "/rpc");
}

console.log("ingdo");
console.log(get_available_rpcs_js("http://localhost:3000"));

async function fetch_js(url) {
  let sibal = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return sibal;
}
function open_file(dir) {}
