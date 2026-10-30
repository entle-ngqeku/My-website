/* Amina's Fast Food - shared JavaScript for Part 3 */
"use strict";
document.addEventListener("DOMContentLoaded",function(){
 setupMenuFilter();
 setupEnquiryForm();
 setupContactForm();
 setupMenuLightbox();
});

function setupMenuFilter(){
 const search=document.getElementById("menuSearch"),category=document.getElementById("menuCategory");
 const result=document.getElementById("menuResult"),sections=document.querySelectorAll(".menu-filter-item");
 const tabs=document.querySelectorAll(".menu-tab"),clearButton=document.getElementById("clearMenuSearch");
 if(!search||!category||!result||!sections.length)return;
 function filterMenu(selectedOverride){
  if(selectedOverride!==undefined)category.value=selectedOverride;
  const term=search.value.trim().toLowerCase(),selected=category.value;
  let visibleMeals=0,visibleCategories=0;
  sections.forEach(section=>{
   const categoryMatches=selected==="all"||section.dataset.category===selected;
   const cards=section.querySelectorAll(".menu-item-card");let count=0;
   cards.forEach(card=>{const show=categoryMatches&&card.textContent.toLowerCase().includes(term);card.hidden=!show;if(show){visibleMeals++;count++;}});
   section.hidden=!(categoryMatches&&count>0);if(!section.hidden)visibleCategories++;
  });
  tabs.forEach(tab=>{const active=tab.dataset.menuFilter===selected;tab.classList.toggle("active",active);tab.setAttribute("aria-pressed",String(active));});
  result.textContent=visibleMeals===0?"No matching meals found. Try another search or category.":(term===""&&selected==="all"?"Showing all ":"")+visibleMeals+(visibleMeals===1?" meal":" meals")+" found in "+visibleCategories+(visibleCategories===1?" category.":" categories.");
 }
 search.addEventListener("input",()=>filterMenu());category.addEventListener("change",()=>filterMenu());
 tabs.forEach(tab=>tab.addEventListener("click",()=>filterMenu(tab.dataset.menuFilter)));
 if(clearButton)clearButton.addEventListener("click",()=>{search.value="";filterMenu();search.focus();});
 filterMenu();
}

function showFieldError(field,message){
 let error=document.getElementById(field.id+"-error");
 if(!error){error=document.createElement("small");error.id=field.id+"-error";error.className="field-error";error.setAttribute("aria-live","polite");field.insertAdjacentElement("afterend",error);}
 const described=(field.getAttribute("aria-describedby")||"").split(/\s+/).filter(Boolean);
 if(!described.includes(error.id))described.push(error.id);
 field.setAttribute("aria-describedby",described.join(" "));
 error.textContent=message;field.classList.toggle("field-invalid",Boolean(message));
 field.setAttribute("aria-invalid",String(Boolean(message)));
}

function validateField(field){
 if(field.disabled||field.closest("[hidden]"))return true;
 field.setCustomValidity("");
 const value=field.value.trim();let message="";
 if(field.required&&!value)message="Please complete this field.";
 else if(value&&(field.id==="name"||field.id==="cName")&&value.length<3)message="Please enter at least 3 characters.";
 else if(value&&(field.id==="phone"||field.id==="cPhone")&&!/^(?:0[6-8]\d{8}|\+27[6-8]\d{8}|0[6-8]\d ?\d{3} ?\d{4})$/.test(value))message="Enter a valid South African mobile number, e.g. 072 784 8640.";
 else if(value&&field.id==="fullMessage"&&value.length<15)message="Please enter at least 15 characters so we can understand your message.";
 else if(value&&field.id==="quantity"&&(!Number.isInteger(Number(value))||Number(value)<1||Number(value)>20))message="Choose a whole-number quantity between 1 and 20.";
 else if(value&&field.validity.typeMismatch)message="Enter a valid email address.";
 else if(value&&field.validity.patternMismatch)message="Please use the required format.";
 else if(value&&field.validity.tooShort)message="The value is too short.";
 field.setCustomValidity(message);showFieldError(field,message);
 return !message&&field.checkValidity();
}

function setupFormValidation(form){
 if(!form)return;
 const fields=Array.from(form.querySelectorAll("input,select,textarea"));
 fields.forEach(field=>{
  field.addEventListener("input",()=>validateField(field));
  field.addEventListener("change",()=>validateField(field));
  field.addEventListener("blur",()=>validateField(field));
 });
}

function setupEnquiryForm(){
 const form=document.getElementById("enquiryForm");if(!form)return;
 const type=document.getElementById("enquiryType"),meal=document.getElementById("order");
 const quantity=document.getElementById("quantity"),delivery=document.getElementById("delivery");
 const result=document.getElementById("result"),productFields=form.querySelectorAll("[data-product-fields]");
 function updateProductFields(){
  const isProduct=type.value==="product";
  productFields.forEach(group=>{
   group.hidden=!isProduct;
   const field=group.querySelector("input,select");
   if(field){field.required=isProduct;if(!isProduct){field.setCustomValidity("");showFieldError(field,"");}}
  });
  if(!isProduct){meal.value="";quantity.value="1";delivery.value="";}
 }
 const requestedMeal=new URLSearchParams(window.location.search).get("meal");
 if(requestedMeal){const option=Array.from(meal.options).find(item=>item.value===requestedMeal);if(option){meal.value=requestedMeal;type.value="product";}}
 type.addEventListener("change",updateProductFields);updateProductFields();setupFormValidation(form);
 form.addEventListener("submit",event=>{
  event.preventDefault();
  const invalid=Array.from(form.querySelectorAll("input,select,textarea")).filter(field=>!validateField(field));
  if(invalid.length){invalid[0].focus();invalid[0].reportValidity();return;}
  const name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim();
  const email=document.getElementById("email").value.trim(),kind=type.value,message=document.getElementById("message").value.trim();
  let mealName="Not selected",estimate="A team member will discuss your enquiry and confirm the details.";
  if(kind==="product"){
   const parts=meal.value.split("|"),subtotal=Number(parts[1])*Number(quantity.value),fee=delivery.value==="Delivery"?20:0;
   mealName=parts[0];estimate="Estimated total: R"+(subtotal+fee)+" (meals R"+subtotal+" + delivery R"+fee+"). Please confirm the final price and availability.";
  }
  const lines=["Hello Amina's Fast Food. I would like to submit an enquiry.","Name: "+name,"Phone: "+phone,"Email: "+email,"Enquiry type: "+kind,"Meal: "+mealName,kind==="product"?"Quantity: "+quantity.value:"",kind==="product"?"Collection or delivery: "+delivery.value:"","Additional information: "+(message||"None"),estimate].filter(Boolean);
  result.textContent="Your details are valid. Review the prepared WhatsApp message and press Send to submit your enquiry. "+estimate;
  window.open(form.action+"?text="+encodeURIComponent(lines.join("\n")),"_blank","noopener,noreferrer");
 });
}

function setupContactForm(){
 const form=document.getElementById("contactForm");if(!form)return;
 setupFormValidation(form);
 form.addEventListener("submit",event=>{
  event.preventDefault();
  const invalid=Array.from(form.querySelectorAll("input,select,textarea")).filter(field=>!validateField(field));
  if(invalid.length){invalid[0].focus();invalid[0].reportValidity();return;}
  const name=document.getElementById("cName").value.trim(),email=document.getElementById("cEmail").value.trim();
  const phone=document.getElementById("cPhone").value.trim(),type=document.getElementById("msgType").value;
  const message=document.getElementById("fullMessage").value.trim(),recipient="aminafastfood@gmail.com";
  const subject=type+" from "+name+" - Amina's Fast Food";
  const body=["CUSTOMER CONTACT FORM","Name: "+name,"Email: "+email,"Phone: "+(phone||"Not supplied"),"Message type: "+type,"","Message:",message].join("\n");
  document.getElementById("contactResult").textContent="Your message is ready in your email application. Review it and press Send to deliver it to "+recipient+".";
  window.location.href=form.action+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
 });
}

function setupMenuLightbox(){
 const dialog=document.getElementById("menuLightbox");if(!dialog)return;
 const triggers=Array.from(document.querySelectorAll(".lightbox-trigger"));
 const image=document.getElementById("lightboxImage"),caption=document.getElementById("lightboxCaption");
 const close=dialog.querySelector("[data-lightbox-close]"),previous=dialog.querySelector("[data-lightbox-prev]"),next=dialog.querySelector("[data-lightbox-next]");
 let activeIndex=0,lastTrigger=null;
 function showImage(index){
  activeIndex=(index+triggers.length)%triggers.length;
  const trigger=triggers[activeIndex],thumb=trigger.querySelector("img");
  image.src=thumb.src.replace(/([?&])w=\d+/,"$1w=1200").replace(/([?&])q=\d+/,"$1q=85");
  image.alt=thumb.alt;
  const title=trigger.closest(".menu-item-card")?.querySelector(".menu-item-info strong")?.textContent||"Menu item";
  caption.textContent=title+" — Amina's Fast Food menu";
 }
 triggers.forEach((trigger,index)=>{
  const thumb=trigger.querySelector("img"),title=trigger.closest(".menu-item-card")?.querySelector(".menu-item-info strong")?.textContent||"menu item";
  thumb.alt="Photograph of "+title;trigger.setAttribute("aria-label","View larger photograph of "+title);
  trigger.addEventListener("click",()=>{lastTrigger=trigger;showImage(index);if(dialog.showModal)dialog.showModal();else dialog.setAttribute("open","");close.focus();});
 });
 close.addEventListener("click",()=>dialog.close());
 previous.addEventListener("click",()=>showImage(activeIndex-1));next.addEventListener("click",()=>showImage(activeIndex+1));
 dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
 dialog.addEventListener("close",()=>{image.removeAttribute("src");if(lastTrigger)lastTrigger.focus();});
}
