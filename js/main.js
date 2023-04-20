const button = document.querySelector("#btn");
const input = document.querySelector("#input");
const answer = document.querySelector("#answer");
button.addEventListener("click", function () {
   let arr = [];
   let arr2 = [];
   let request = +input.value;
   let i, j;
   console.log(request);
   for (i = 2; i <= request; i++) {
      for (j = 2; j <= i; j++) {
         if (i % j === 0) {
            //如果i被j整除且i不等於j則i不是質數
            break;
         }
      }
      if (i === j) {
         arr.push(i);
      }
   }

   let content = "";

   // 宣告 content 是字串
   arr.forEach(function (i) {
      content += ` ${i},　`;
   });

   answer.innerHTML = content;
});
