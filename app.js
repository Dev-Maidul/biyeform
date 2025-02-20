const biyeform=document.getElementById("biyeform");
const msg=document.getElementById("msg");

// Load data
biyeform.onsubmit = (e) => {
    e.preventDefault();
    const formData= new FormData(e.target);
    const data = Object.fromEntries(formData);

    if(+data.age >=20 && +data.salary >=50000)
    {
        msg.innerHTML=`Hello ${data.name}, I am happly to marry you`;
    }
    else msg.innerHTML=`Sorry ${data.name}, I will not marry you`;
}