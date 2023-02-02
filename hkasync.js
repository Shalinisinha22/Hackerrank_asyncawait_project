const puppeteer=require("puppeteer");
const promise=require("promise")
const url="https://www.hackerrank.com/auth/login"
const email="sinhashalini708@gmail.com";
const pass="shalini"
const code=require("./code")
let page;

(async function hackerrank(){
    const browserOpen= await puppeteer.launch({headless:false,args:["--start-maximized"],defaultViewport:null})
    let browserarr= await browserOpen.pages()
     page=await browserarr[0];
     await page.goto(url);
    await waitAndclick('input[id="input-1"]',page);
    await page.type('input[id="input-1"]',email);
    await page.type('input[id="input-2"]',pass);
    await waitAndclick("button[class='ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled']",page);
    await waitAndclick('div[class="topic-name"]',page)
    await waitAndclick('input[value="warmup"]',page)
  
const elementHandles = await page.$$("a[class='js-track-click challenge-list-item']");
const propertyJsHandles = await Promise.all(
  elementHandles.map(handle => handle.getProperty('href'))
);
const hrefs = await Promise.all(
  propertyJsHandles.map(handle => handle.jsonValue())
);


for(let i=1;i<5;i++){
  await questionSolver(hrefs[i],page,code.answers[i])
}

   
      
})()

 async function questionSolver(question,page,answer){
    await page.goto(question,{delay:5000})
    await waitAndclick('div[class="monaco-scrollable-element editor-scrollable vs"]',page)
    await page.click("input[class='checkbox-input']")
    await page.type("textarea[class='input text-area custominput auto-width']",answer)
    await page.keyboard.down("Control")
    await page.keyboard.press("A")
    await page.keyboard.press("X")
    await page.keyboard.up("Control")
    await waitAndclick('div[class="monaco-scrollable-element editor-scrollable vs"]',page)
    await page.keyboard.down("Control")
    await page.keyboard.press("A")
    await page.keyboard.press("V")
    await page.keyboard.up("Control")
    await page.click("button[class='ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled']");
    
      
 }

 async function waitAndclick(selector,page){
   try{
     await page.waitForSelector(selector,{visible:true}) 
     await page.click(selector)
    
   }
   catch(err){
     console.log(err);
   }      
         
        
   }