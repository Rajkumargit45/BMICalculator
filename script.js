const form= document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const result =document.querySelector('#results')


    if (height ===''|| height<0 || isNaN(height)) {
        result.innerHTML=`Please give a valid height  ${height}`;
        } else if (weight ===''|| height<0 || isNaN(height)) {
        result.innerHTML=`Please give a valid Weight  ${weight}`;
        } else{
            const bmi= (weight/((height*height)/10000)).toFixed(2)
            // showing the result
            
        if (bmi<18.6) {
            result.innerHTML=`Your BMI is ${bmi}, & you are under weight`;
        }else if(bmi>=18.6 && bmi<=24.9) {
            result.innerHTML=`Your BMI is ${bmi}, & you are in normal range`;
        }else{
            result.innerHTML=` Your BMI is ${bmi}, & you are overweight`;
        }
            
    }
})