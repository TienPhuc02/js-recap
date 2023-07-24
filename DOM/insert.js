//1.element.insertAdjacentText(position,text)
const h3 = document.querySelector("h3");
//h3.insertAjacentText("position","text");
//position: beforebegin,afterbegin,beforeend,afterend
/*beforebegin: là nằm trước tag mà mình chọn
afterbegin: là nằm sau tag mở mà mình chọn 
beforeend : là nằm trước  tag đóng mà mình chọn
afterend : là nằm sau tag đóng mà mình chọn
*/
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "begin");
h3.insertAdjacentText("beforeend", "begin");
h3.insertAdjacentText("afterend", "begin");

//2. element.insertAdjacentElement(position,node)

const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

//3.element.insertAdjacentHTML
/*
 */

const template = `
<ul class="menu2">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
`;
document.body.insertAdjacentHTML("beforeend", template); // in  ra màn hình và in trước thẻ body
