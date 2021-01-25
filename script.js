const publication_date = document.querySelectorAll('.lbl-licitacao')[0].children[1].textContent;
const bidding_date = document.querySelectorAll('.lbl-licitacao')[5].children[1].textContent;
const object_value = document.querySelectorAll('.item p')[0].innerText;
const links = document.querySelectorAll('.item a');
// Get every link in tender
let related_links=Object.values(links).map((link)=>link.getAttribute("href"));

document.querySelector('body').innerText=`Publication Date: ${publication_date}
Bidding Date: ${bidding_date}
Object: ${object_value}
Related Links: ${related_links}`;

