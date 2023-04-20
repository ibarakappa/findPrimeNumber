const button = document.querySelector("#btn");
const input = document.querySelector("#input");
const answer = document.querySelector("#answer");
const answer2 = document.querySelector("#answer2");
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
         if (arr.length >= 20) {
            arr2.push(i);
            continue;
         }
         arr.push(i);
      }
   }

   let content = "";
   let content2 = "";
   // 宣告 content 是字串
   arr.forEach(function (i) {
      content += `<li>  ${i},</li>`;
   });

   if (arr2.length > 0) {
      arr2.forEach((i) => (content2 += `<li>  ${i},</li>`));
      answer2.innerHTML = content2;
   }
   answer.innerHTML = content;
});
