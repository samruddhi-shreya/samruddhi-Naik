function showalert(){
    alert('hello! this is javascript.');
}
function changetext(){
    document.getElementById('text').innerHTML='text changed!';
}
function handleclick(){
    document.getElementById('clickmessage').innerHTML='button clicked!';
}
function validateForm(){
  let name= document.getElementById('name').value;
  if(name ==''){
    alert('please Enter your name.');
    return false;
  }
  return true;
}
function checknumber(){
    let num=parseInt(document.getElementById('number input').Value);
    let result= num>10?'greater than 10':'10 or less';
    document.getElementById('numberresult').innerHTML=result;
}
function checkage(){
    let age=parseInt(document.getElementById('ageinput').value);
    if(age>= 18){
        document.getElementById('ageresult').innerHTML='you are an adult';
     }else{
        document.getElementById('ageresult').innerHTML='you are a minor';
     }
}
function displayarrayitem(){
    let items=['apple','banana','orange','date','cherry'];
    let index=parseInt(document.getElementById('arrayindex').value);
    let result=items[index]||'invalid index';
    document.getElementById('arrayresult').innerHTML=result;
}