/* Amina's Fast Food - shared Part 3 JavaScript */
"use strict";
document.addEventListener("DOMContentLoaded",function(){setupMenuFilter();setupEnquiryForm();setupContactForm();});
function setupMenuFilter(){
 const search=document.getElementById("menuSearch"),category=document.getElementById("menuCategory"),result=document.getElementById("menuResult"),sections=document.querySelectorAll(".menu-filter-item");
 if(!search||!category||!result||!sections.length)return;
 function filterMenu(){const term=search.value.trim().toLowerCase(),selected=category.value;let count=0;
 sections.forEach(section=>{const show=section.textContent.toLowerCase().includes(term)&&(selected==="all"||section.dataset.category===selected);section.hidden=!show;if(show)count++;});
 result.textContent=count+(count===1?" menu category found.":" menu categories found.");}
 search.addEventListener("input",filterMenu);category.addEventListener("change",filterMenu);
}
function setupEnquiryForm(){
 const form=document.getElementById("enquiryForm");if(!form)return;
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
