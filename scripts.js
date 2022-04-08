$.ajax({
  url: "https://ibnux.github.io/BMKG-importer/cuaca/5002228.json",
  success: (results) => {
    let dataTable = "";
    results.forEach((dt) => {
      dataTable += tableCuaca(dt);
    });
    $(".data-cuaca").html(dataTable);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

function tableCuaca(dt) {
  return /*html*/ `<div class="col-md-4 my-3">
  <div class="card">
    <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">Waktu : ${dt.jamCuaca} WIB</li>
      <li class="list-group-item">Cuaca : ${dt.cuaca}</li>
    </ul>
    </div>
  </div>
</div>`;
}
