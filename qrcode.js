const qrinput = document.getElementById('qr-input')
const qrbtn = document.getElementById('qr-btn')
const qrimg = document.getElementById('qr-img')

qrbtn.addEventListener('click',() => {
    const inputvalue = qrinput.value

    if(!inputvalue){
        alert("please enter a valid url")
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        qrimg.alt = `QR code for ${inputvalue}`;
    }
})