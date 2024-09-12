const url = document.querySelector('#originalurl');
const maxclicks = document.querySelector('#maxclicks');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const button = document.querySelector('#submit');
const hashedurlslot=document.querySelector('.url');

const porturl="http://localhost:5000";

const formatDateToISOString = (year, month, day, hour, minute, second) => {
    const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    return date.toISOString();
}



button.addEventListener('click', async(e) => {
    
    e.preventDefault();
    console.log(date.value, typeof (date.value));
    console.log(time.value, typeof (time.value));

    const year=Number(date.value.slice(0,4));
    const month=Number(date.value.slice(5,7));
    const day=Number(date.value.slice(8));
    const hour=Number(time.value.slice(0,2));
    const minute=Number(time.value.slice(3));
    const formattedDate = formatDateToISOString(year, month, day, hour, minute, 0);
    const originalUrl=url.value;
    const maxClicks=Number(maxclicks.value);
    
    const res=await fetch(`${porturl}/shortend`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalUrl , maxClicks, formattedDate })
    })

    const hashedurl=await res.json();
    hashedurlslot.innerText=hashedurl.shortenedUrl;
})



