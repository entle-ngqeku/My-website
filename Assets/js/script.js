/* Amina's Fast Food - shared Part 3 JavaScript */
"use strict";
document.addEventListener("DOMContentLoaded",function(){setupMenuFilter();setupEnquiryForm();setupContactForm();});
function setupMenuFilter(){
 const search=document.getElementById("menuSearch");
 const category=document.getElementById("menuCategory");
 const result=document.getElementById("menuResult");
 const sections=document.querySelectorAll(".menu-filter-item");
 const tabs=document.querySelectorAll(".menu-tab");
 const clearButton=document.getElementById("clearMenuSearch");
 if(!search||!category||!result||!sections.length)return;
 function filterMenu(selectedOverride){
  if(selectedOverride!==undefined)category.value=selectedOverride;
  const term=search.value.trim().toLowerCase();
  const selected=category.value;
  let visibleMeals=0,visibleCategories=0;
  sections.forEach(section=>{
   const categoryMatches=selected==="all"||section.dataset.category===selected;
   const cards=section.querySelectorAll(".menu-item-card");
   let categoryMealCount=0;
   cards.forEach(card=>{
    const show=categoryMatches&&card.textContent.toLowerCase().includes(term);
    card.hidden=!show;
    if(show){visibleMeals++;categoryMealCount++;}
   });
   const showSection=categoryMatches&&categoryMealCount>0;
   section.hidden=!showSection;
   if(showSection)visibleCategories++;
  });
  tabs.forEach(tab=>{
   const active=tab.dataset.menuFilter===selected;
   tab.classList.toggle("active",active);
   tab.setAttribute("aria-pressed",String(active));
  });
  if(term===""&&selected==="all")result.textContent="Showing all "+visibleMeals+" menu items across "+visibleCategories+" categories.";
  else if(visibleMeals===0)result.textContent="No matching meals found. Try another search or category.";
  else result.textContent=visibleMeals+(visibleMeals===1?" meal found":" meals found")+" in "+visibleCategories+(visibleCategories===1?" category.":" categories.");
 }
 search.addEventListener("input",()=>filterMenu());
 category.addEventListener("change",()=>filterMenu());
 tabs.forEach(tab=>tab.addEventListener("click",()=>filterMenu(tab.dataset.menuFilter)));
 if(clearButton)clearButton.addEventListener("click",()=>{search.value="";filterMenu();search.focus();});
 filterMenu();
}
function setupEnquiryForm(){
 const form=document.getElementById("enquiryForm");if(!form)return;
 const requestedMeal=new URLSearchParams(window.location.search).get("meal");
 const mealSelect=document.getElementById("order");
 if(requestedMeal&&mealSelect){
  const option=Array.from(mealSelect.options).find(item=>item.value===requestedMeal);
  if(option){mealSelect.value=requestedMeal;document.getElementById("enquiryType").value="product";}
 }
 form.addEventListener("submit",function(event){event.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}
 const name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim(),email=document.getElementById("email").value.trim(),type=document.getElementById("enquiryType").value,meal=document.getElementById("order").value,quantity=Number(document.getElementById("quantity").value),delivery=document.getElementById("delivery").value,message=document.getElementById("message").value.trim(),result=document.getElementById("result");
 if(type==="product"&&!meal){const field=document.getElementById("order");field.setCustomValidity("Please select a meal for a product enquiry.");field.reportValidity();field.setCustomValidity("");return;}
 let mealName="Not selected",subtotal=0,fee=delivery==="Delivery"?20:0,estimate="A team member will discuss the details with you.";
 if(meal){const parts=meal.split("|");mealName=parts[0];subtotal=Number(parts[1])*quantity;if(type==="product")estimate="Estimated total: R"+(subtotal+fee)+" (items R"+subtotal+" + delivery R"+fee+").";}
 const lines=["Hello Amina's Fast Food. I would like to submit an enquiry.","Name: "+name,"Phone: "+phone,"Email: "+email,"Enquiry type: "+type,"Meal: "+mealName,"Quantity: "+quantity,"Collection or delivery: "+delivery,"Additional information: "+(message||"None"),estimate,"Please confirm availability and the final price."];
 result.textContent="Your enquiry summary is ready. WhatsApp will open so you can review and send the message. "+estimate;
 window.open("https://wa.me/27727848640?text="+encodeURIComponent(lines.join("\n")),"_blank","noopener");
 });
}
function setupContactForm(){
 const form=document.getElementById("contactForm");if(!form)return;
 form.addEventListener("submit",function(event){event.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}
 const name=document.getElementById("cName").value.trim(),email=document.getElementById("cEmail").value.trim(),phone=document.getElementById("cPhone").value.trim(),type=document.getElementById("msgType").value,message=document.getElementById("fullMessage").value.trim(),recipient="aminafastfood@gmail.com";
 const subject=type+" from "+name+" - Amina's Fast Food",body=["CUSTOMER CONTACT FORM","Name: "+name,"Email: "+email,"Phone: "+(phone||"Not supplied"),"Message type: "+type,"","Message:",message].join("\n");
 document.getElementById("contactResult").textContent="Your message has been prepared in your email application. Review it and press Send to deliver it to "+recipient+".";
 window.location.href="mailto:"+recipient+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
 });
}
