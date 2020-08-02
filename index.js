console.log("This is my index.js");
const data=[{
name:"rohan das",
age:18,
city:"KolKata",
language:"Python",
framework:"Django",
image:"https://randomuser.me/portraits/men/12.jpg"

},{name:"Shubham Sharma",
age:28,
city:"Bangalore",
language:"JavaScript",
framework:"Angular",
image:"https://randomuser.me/portraits/men/45.jpg"},
{
    name:"aishwarya rai",
    age:45,
    city:"Mumbai",
    language:"Java",
    framework:"Spring",
    image:"https://randomuser.me/portraits/women/12.jpg"

},
{
    name:"Rohit Sharma",
    age:48,
    city:"Kanpur",
    language:"Go",
    framework:"GoLang",
    image:"https://randomuser.me/portraits/men/16.jpg"

}];

//CV Iterator
function CvIterator(profiles)
{
let nextIndex=0;
return {
    next:function()
    {
        return nextIndex<profiles.length?{value:profiles[nextIndex++],done:false}:{done:true}
    }
};
}
const candidates=CvIterator(data);
//Button Listner for next Button 
nextCV();
const next=document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV()
{
    const currentCandidate=candidates.next().value;
    if(currentCandidate!=undefined){
    let image =document.getElementById('image');
    let profile=document.getElementById('profile');
    image.innerHTML=`<img src='${currentCandidate.image}'>`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} Year's Old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city} </li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses${currentCandidate.framework} framework </li>
  </ul>`
    }else{
        alert('End of Applicaions ');
        window.location.reload();
    }
    
}