function getQuestion () {
    let myRequest=new XMLHttpRequest()
    myRequest.onreadystatechange=function () {
        if (this.readyState===4 && this.status===200) {
            let myObj=JSON.parse(this.responseText)
        }
    }
    console.log(myObj)
    myRequest.open("Get","D:\TheStart\QuizApp.json",true)
    myRequest.send();
}