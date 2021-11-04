var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
if( localStorage.getItem("bookmarkData") ==null){
    var bookmarks =[];
}else{
    var bookmarks =JSON.parse(localStorage.getItem("bookmarkData"));

}
function addP(){
    if(showerrorN(siteName.value) && showerrorU(siteUrl.value)){
        var rrr=document.getElementById("rr").innerHTML="Fix your values";
    }else{
        var rrr=document.getElementById("rr").innerHTML="";

        var bookmark ={
            name : siteName.value,
            url :siteUrl.value
        };
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarkData", JSON.stringify(bookmarks))
        siteUrl.value=""
        siteName.value=""
        displayP();
    }
}
function displayP(){
    var divv="";
    for(var i=0 ; i<bookmarks.length;i++){
        divv+=`<div class="cln">
                <h2 class="mr-auto">${bookmarks[i].name}</h2>
                <a class="btn btn-primary" href="http://${bookmarks[i].url}" target="_blank">visit</a>
                <button onclick="updateP(${i})" class="btn btn-info btndelete">Edit</button>
                <button onclick="deleteP(${i})" class="btn btn-danger btndelete">Delete</button>
        </div> `
    }
    document.getElementById("dataV").innerHTML=divv;
}
function deleteP(x){
    bookmarks.splice(x,1)
    localStorage.setItem("bookmarkData", JSON.stringify(bookmarks))
    displayP();
}
var btn_=document.getElementById("subb");

function updateP(x){
    location.href = "#ma";
    siteName.value=bookmarks[x].name;
    siteUrl.value=bookmarks[x].url;
    btn_.innerHTML="update"
    btn_.onclick=function(){
        bookmarks[x].name=siteName.value;
        bookmarks[x].url=siteUrl.value;
        localStorage.setItem("bookmarkData", JSON.stringify(bookmarks))

        displayP();
        siteUrl.value=""
        siteName.value=""
        alert("Done")
        btn_.innerHTML="Submit"
        btn_.onclick=addP;
    }

}
function showerrorU(url){
if(url==null || url =="" ){
    return true
}
}
function showerrorN(name){
    if(name==null || name=="" ){
        return true

    }
}
displayP();
