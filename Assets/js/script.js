/* Amina's Fast Food - shared JavaScript for Part 3 */
// Enables strict JavaScript rules to help catch common mistakes.
"use strict";
/* Wait until the HTML has loaded before connecting JavaScript to page elements. */
// Waits for the page to finish loading before setting up interactive features.
document.addEventListener("DOMContentLoaded",function(){
 // Performs the next step in this interactive feature.
 setupMenuFilter();
 // Performs the next step in this interactive feature.
 setupEnquiryForm();
 // Performs the next step in this interactive feature.
 setupContactForm();
 // Performs the next step in this interactive feature.
 setupMenuLightbox();
});

/* Search and filter menu cards using the visitor's keyword and selected category. */
// Defines a reusable function for the feature named in this declaration.
function setupMenuFilter(){
 // Stores a value or page element needed by the following code.
 const search=document.getElementById("menuSearch"),category=document.getElementById("menuCategory");
 // Stores a value or page element needed by the following code.
 const result=document.getElementById("menuResult"),sections=document.querySelectorAll(".menu-filter-item");
 // Stores a value or page element needed by the following code.
 const tabs=document.querySelectorAll(".menu-tab"),clearButton=document.getElementById("clearMenuSearch");
 // Checks a condition before running the related code.
 if(!search||!category||!result||!sections.length)return;
 /* Apply the selected category and keyword, then hide cards that do not match. */
 // Defines a reusable function for the feature named in this declaration.
 function filterMenu(selectedOverride){
  // Checks a condition before running the related code.
  if(selectedOverride!==undefined)category.value=selectedOverride;
  // Stores a value or page element needed by the following code.
  const term=search.value.trim().toLowerCase(),selected=category.value;
  // Stores a value or page element needed by the following code.
  let visibleMeals=0,visibleCategories=0;
  // Repeats this operation for each item in the selected collection.
  sections.forEach(section=>{
   // Stores a value or page element needed by the following code.
   const categoryMatches=selected==="all"||section.dataset.category===selected;
   // Stores a value or page element needed by the following code.
   const cards=section.querySelectorAll(".menu-item-card");let count=0;
   // Repeats this operation for each item in the selected collection.
   cards.forEach(card=>{const show=categoryMatches&&card.textContent.toLowerCase().includes(term);card.hidden=!show;if(show){visibleMeals++;count++;}});
   // Shows or hides the related page element.
   section.hidden=!(categoryMatches&&count>0);if(!section.hidden)visibleCategories++;
  });
  // Repeats this operation for each item in the selected collection.
  tabs.forEach(tab=>{const active=tab.dataset.menuFilter===selected;tab.classList.toggle("active",active);tab.setAttribute("aria-pressed",String(active));});
  // Updates the message displayed to the visitor.
  result.textContent=visibleMeals===0?"No matching meals found. Try another search or category.":(term===""&&selected==="all"?"Showing all ":"")+visibleMeals+(visibleMeals===1?" meal":" meals")+" found in "+visibleCategories+(visibleCategories===1?" category.":" categories.");
 }
 // Listens for a visitor action and runs the connected event handler.
 search.addEventListener("input",()=>filterMenu());category.addEventListener("change",()=>filterMenu());
 // Listens for a visitor action and runs the connected event handler.
 tabs.forEach(tab=>tab.addEventListener("click",()=>filterMenu(tab.dataset.menuFilter)));
 // Checks a condition before running the related code.
 if(clearButton)clearButton.addEventListener("click",()=>{search.value="";filterMenu();search.focus();});
 // Performs the next step in this interactive feature.
 filterMenu();
}

/* Create or update an accessible error message beside a form field. */
// Defines a reusable function for the feature named in this declaration.
function showFieldError(field,message){
 // Stores a value or page element needed by the following code.
 let error=document.getElementById(field.id+"-error");
 // Checks a condition before running the related code.
 if(!error){error=document.createElement("small");error.id=field.id+"-error";error.className="field-error";error.setAttribute("aria-live","polite");field.insertAdjacentElement("afterend",error);}
 // Stores a value or page element needed by the following code.
 const described=(field.getAttribute("aria-describedby")||"").split(/\s+/).filter(Boolean);
 // Checks a condition before running the related code.
 if(!described.includes(error.id))described.push(error.id);
 // Performs the next step in this interactive feature.
 field.setAttribute("aria-describedby",described.join(" "));
 // Updates the message displayed to the visitor.
 error.textContent=message;field.classList.toggle("field-invalid",Boolean(message));
 // Performs the next step in this interactive feature.
 field.setAttribute("aria-invalid",String(Boolean(message)));
}

/* Check one field and return true only when its value follows the form rules. */
// Defines a reusable function for the feature named in this declaration.
function validateField(field){
 // Checks a condition before running the related code.
 if(field.disabled||field.closest("[hidden]"))return true;
 // Stores a value or page element needed by the following code.
 const value=field.value.trim();let message="";
 // Checks a condition before running the related code.
 if(field.dataset.required==="true"&&!value)message="Please complete this field.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&(field.id==="name"||field.id==="cName")&&value.length<3)message="Please enter at least 3 characters.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&(field.id==="phone"||field.id==="cPhone")&&!/^(?:0[6-8]\d{8}|\+27[6-8]\d{8}|0[6-8]\d ?\d{3} ?\d{4})$/.test(value))message="Enter a valid South African mobile number, e.g. 072 784 8640.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&field.id==="fullMessage"&&value.length<15)message="Please enter at least 15 characters so we can understand your message.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&field.id==="quantity"&&(!Number.isInteger(Number(value))||Number(value)<1||Number(value)>20))message="Choose a whole-number quantity between 1 and 20.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&field.validity.typeMismatch)message="Enter a valid email address.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&field.validity.patternMismatch)message="Please use the required format.";
 // Runs the alternative action when the previous condition is false.
 else if(value&&field.validity.tooShort)message="The value is too short.";
 // Performs the next step in this interactive feature.
 showFieldError(field,message);
 // Returns a result or exits the current function.
 return !message;
}

/* Recheck fields while the visitor types, changes a value or leaves a field. */
// Defines a reusable function for the feature named in this declaration.
function setupFormValidation(form){
 // Checks a condition before running the related code.
 if(!form)return;
 // Stores a value or page element needed by the following code.
 const fields=Array.from(form.querySelectorAll("input,select,textarea"));
 // Repeats this operation for each item in the selected collection.
 fields.forEach(field=>{
  // Listens for a visitor action and runs the connected event handler.
  field.addEventListener("input",()=>validateField(field));
  // Listens for a visitor action and runs the connected event handler.
  field.addEventListener("change",()=>validateField(field));
  // Listens for a visitor action and runs the connected event handler.
  field.addEventListener("blur",()=>validateField(field));
 });
}

/* Handle product enquiries and order requests on the Enquiry page. */
// Defines a reusable function for the feature named in this declaration.
function setupEnquiryForm(){
 // Stores a value or page element needed by the following code.
 const form=document.getElementById("enquiryForm");if(!form)return;
 // Performs the next step in this interactive feature.
 form.noValidate=true;
 // Stores a value or page element needed by the following code.
 const type=document.getElementById("enquiryType"),meal=document.getElementById("order");
 // Stores a value or page element needed by the following code.
 const quantity=document.getElementById("quantity"),delivery=document.getElementById("delivery");
 // Stores a value or page element needed by the following code.
 const result=document.getElementById("result"),productFields=form.querySelectorAll("[data-product-fields]");
 /* Show product-specific fields only when the visitor selects a product enquiry. */
 // Defines a reusable function for the feature named in this declaration.
 function updateProductFields(){
  // Stores a value or page element needed by the following code.
  const isProduct=type.value==="product";
  // Repeats this operation for each item in the selected collection.
  productFields.forEach(group=>{
   // Shows or hides the related page element.
   group.hidden=!isProduct;
   // Stores a value or page element needed by the following code.
   const field=group.querySelector("input,select");
   // Checks a condition before running the related code.
   if(field){field.dataset.required=String(isProduct);field.required=false;if(!isProduct){showFieldError(field,"");}}
  });
  // Checks a condition before running the related code.
  if(!isProduct){meal.value="";quantity.value="1";delivery.value="";}
 }
 // Stores a value or page element needed by the following code.
 const requestedMeal=new URLSearchParams(window.location.search).get("meal");
 // Checks a condition before running the related code.
 if(requestedMeal){const option=Array.from(meal.options).find(item=>item.value===requestedMeal);if(option){meal.value=requestedMeal;type.value="product";}}
 // Listens for a visitor action and runs the connected event handler.
 type.addEventListener("change",updateProductFields);updateProductFields();setupFormValidation(form);
 /* Stop the default submission, validate the form and prepare the WhatsApp message. */
 // Listens for a visitor action and runs the connected event handler.
 form.addEventListener("submit",event=>{
  // Prevents the browser's default action so the custom handling can run.
  event.preventDefault();
  // Stores a value or page element needed by the following code.
  const invalid=Array.from(form.querySelectorAll("input,select,textarea")).filter(field=>!validateField(field));
  // Checks a condition before running the related code.
  if(invalid.length){invalid[0].focus();return;}
  // Stores a value or page element needed by the following code.
  const name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim();
  // Stores a value or page element needed by the following code.
  const email=document.getElementById("email").value.trim(),kind=type.value,message=document.getElementById("message").value.trim();
  // Stores a value or page element needed by the following code.
  let mealName="Not selected",estimate="A team member will discuss your enquiry and confirm the details.";
  // Checks a condition before running the related code.
  if(kind==="product"){
   // Stores a value or page element needed by the following code.
   const parts=meal.value.split("|"),subtotal=Number(parts[1])*Number(quantity.value),fee=delivery.value==="Delivery"?20:0;
   // Performs the next step in this interactive feature.
   mealName=parts[0];estimate="Estimated total: R"+(subtotal+fee)+" (meals R"+subtotal+" + delivery R"+fee+"). Please confirm the final price and availability.";
  }
  // Stores a value or page element needed by the following code.
  const lines=["Hello Amina's Fast Food. I would like to submit an enquiry.","Name: "+name,"Phone: "+phone,"Email: "+email,"Enquiry type: "+kind,"Meal: "+mealName,kind==="product"?"Quantity: "+quantity.value:"",kind==="product"?"Collection or delivery: "+delivery.value:"","Additional information: "+(message||"None"),estimate].filter(Boolean);
  // Updates the message displayed to the visitor.
  const subject=(kind==="product"?"New Food Order":"New Enquiry")+" from "+name+" - Amina's Fast Food";
  const body=lines.join("\n");
  result.textContent="Your details are valid. Your email application will open with the order details prepared. Review the email and press Send to submit your order to aminafastfood@gmail.com. "+estimate;
  // Opens a new email addressed to the business with the order details filled in.
  window.location.href="mailto:aminafastfood@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
 });
}

/* Handle general messages separately from product and order enquiries. */
// Defines a reusable function for the feature named in this declaration.
function setupContactForm(){
 // Stores a value or page element needed by the following code.
 const form=document.getElementById("contactForm");if(!form)return;
 // Performs the next step in this interactive feature.
 form.noValidate=true;
 // Performs the next step in this interactive feature.
 setupFormValidation(form);
 // Listens for a visitor action and runs the connected event handler.
 form.addEventListener("submit",event=>{
  // Prevents the browser's default action so the custom handling can run.
  event.preventDefault();
  // Stores a value or page element needed by the following code.
  const invalid=Array.from(form.querySelectorAll("input,select,textarea")).filter(field=>!validateField(field));
  // Checks a condition before running the related code.
  if(invalid.length){invalid[0].focus();return;}
  // Stores a value or page element needed by the following code.
  const name=document.getElementById("cName").value.trim(),email=document.getElementById("cEmail").value.trim();
  // Stores a value or page element needed by the following code.
  const phone=document.getElementById("cPhone").value.trim(),type=document.getElementById("msgType").value;
  // Stores a value or page element needed by the following code.
  const message=document.getElementById("fullMessage").value.trim(),recipient="aminafastfood@gmail.com";
  // Stores a value or page element needed by the following code.
  const subject=type+" from "+name+" - Amina's Fast Food";
  // Stores a value or page element needed by the following code.
  const body=["CUSTOMER CONTACT FORM","Name: "+name,"Email: "+email,"Phone: "+(phone||"Not supplied"),"Message type: "+type,"","Message:",message].join("\n");
  // Updates the message displayed to the visitor.
  document.getElementById("contactResult").textContent="Your message is ready in your email application. Review it and press Send to deliver it to "+recipient+".";
  // Opens the prepared destination or message in the browser.
  window.location.href=form.action+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
 });
}

/* Open menu photographs in a larger dialog with previous, next and close controls. */
// Defines a reusable function for the feature named in this declaration.
function setupMenuLightbox(){
 // Stores a value or page element needed by the following code.
 const dialog=document.getElementById("menuLightbox");if(!dialog)return;
 // Stores a value or page element needed by the following code.
 const triggers=Array.from(document.querySelectorAll(".lightbox-trigger"));
 // Stores a value or page element needed by the following code.
 const image=document.getElementById("lightboxImage"),caption=document.getElementById("lightboxCaption");
 // Stores a value or page element needed by the following code.
 const close=dialog.querySelector("[data-lightbox-close]"),previous=dialog.querySelector("[data-lightbox-prev]"),next=dialog.querySelector("[data-lightbox-next]");
 // Stores a value or page element needed by the following code.
 let activeIndex=0,lastTrigger=null;
 /* Display the selected menu photo and update its accessible caption. */
 // Defines a reusable function for the feature named in this declaration.
 function showImage(index){
  // Performs the next step in this interactive feature.
  activeIndex=(index+triggers.length)%triggers.length;
  // Stores a value or page element needed by the following code.
  const trigger=triggers[activeIndex],thumb=trigger.querySelector("img");
  // Performs the next step in this interactive feature.
  image.src=thumb.src.replace(/([?&])w=\d+/,"$1w=1200").replace(/([?&])q=\d+/,"$1q=85");
  // Performs the next step in this interactive feature.
  image.alt=thumb.alt;
  // Stores a value or page element needed by the following code.
  const title=trigger.closest(".menu-item-card")?.querySelector(".menu-item-info strong")?.textContent||"Menu item";
  // Updates the message displayed to the visitor.
  caption.textContent=title+" — Amina's Fast Food menu";
 }
 // Repeats this operation for each item in the selected collection.
 triggers.forEach((trigger,index)=>{
  // Stores a value or page element needed by the following code.
  const thumb=trigger.querySelector("img"),title=trigger.closest(".menu-item-card")?.querySelector(".menu-item-info strong")?.textContent||"menu item";
  // Performs the next step in this interactive feature.
  thumb.alt="Photograph of "+title;trigger.setAttribute("aria-label","View larger photograph of "+title);
  // Listens for a visitor action and runs the connected event handler.
  trigger.addEventListener("click",()=>{lastTrigger=trigger;showImage(index);if(dialog.showModal)dialog.showModal();else dialog.setAttribute("open","");close.focus();});
 });
 // Listens for a visitor action and runs the connected event handler.
 close.addEventListener("click",()=>dialog.close());
 // Listens for a visitor action and runs the connected event handler.
 previous.addEventListener("click",()=>showImage(activeIndex-1));next.addEventListener("click",()=>showImage(activeIndex+1));
 // Listens for a visitor action and runs the connected event handler.
 dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
 // Listens for a visitor action and runs the connected event handler.
 dialog.addEventListener("close",()=>{image.removeAttribute("src");if(lastTrigger)lastTrigger.focus();});
}
