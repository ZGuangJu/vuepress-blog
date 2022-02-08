$.ajax({
  url: "http://127.0.0.1/list",
  method: "get",
  dataType: "jsonp",
  success: res => {
    console.log(res);
  }
})