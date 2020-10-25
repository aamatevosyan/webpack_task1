function loadCSV(filePath) {
  $.ajax({
    type: "GET",
    url: filePath,
    dataType: "text",
    success: function (data) {
      console.log(data);
    },
  });
}

export default loadCSV;
