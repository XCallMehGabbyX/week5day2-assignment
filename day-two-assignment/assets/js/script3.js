/* Write a user-defined function that scans through a weather array with the following element ['sunny', 'cloudy', 'humid'].
If the input is "Sunny" the function returns sunny day. If it is cloudy it should return Heavy rain expected */

//Answer
function weatherScanner(){
    scan = ['sunny', 'cloudy', 'humid'];
    weatherInput = prompt("Please pick a weather")
        if(weatherInput == scan[0]){
            alert("sunny day")
        } else if(weatherInput == scan[1]){
            alert("Heavy rain expected")
        } else if(weatherInput == scan[2]){
            alert("It is fairly humid")
        } else {
            alert("This is not a valid weather input")
        }
    
}
weatherScanner()
