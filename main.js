let input_text = document.getElementById("input");
let requst_btn = document.getElementById("request");
let show_text = document.getElementById("result");
let select_type = document.getElementById("select_type");

let enckey = " VQB!9Ys^UCJziJ6PjGWXXERV1agfzgaT";

requst_btn.addEventListener("click", find);

function itis(caution) {
  let inf;
  if (caution == "Y") {
    inf = `최근 3개월 내<br>피해사례가 있습니다.`;
  } else if (caution == "N") {
    inf = "최근 3개월 내<br>피혜사례가 없습니다.";
  }
  return inf;
}

function find() {
  fetch(
    `http://54.219.164.2:5000/serch?keywordtype=${select_type.value}&keyword=${input_text.value}`
  )
    .then((data) => data.json())
    .then((data) => {
      let result = JSON.parse(data);
      let pushinf = `<h2>${result.keyword} 로 검색된 <br> ${itis(
        result.caution
      )}</h2>
      <a href="${result.keyword_url}" target="_blank">자세한 내용 확인</a>
      `;
      $(show_text).empty();
      $(show_text).append(pushinf);
    });
}
