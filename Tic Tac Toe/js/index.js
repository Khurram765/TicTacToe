var row=document.querySelectorAll(".row")
var i=0
var arr=[{
    one:"",
    two:"",
    three:"",
    four:"",
    five:"",
    six:"",
    seven:"",
    eight:"",
    nine:"",
}]
Array.from(row).forEach(e=>{
    e.addEventListener("click",()=>{
        i=++i
        if(e.innerHTML==""){
            if(i%2==0){
                e.innerHTML="O"
                e.classList.add("blue")
                if(e.getAttribute("value")==1){
                    console.log(e.getAttribute("value"))
                    arr[0].one="Ofilled"
                }else if(e.getAttribute("value")==2){
                    console.log(e.getAttribute("value"))
                    arr[0].two="Ofilled"
                }else if(e.getAttribute("value")==3){
                    console.log(e.getAttribute("value"))
                    arr[0].three="Ofilled"
                }else if(e.getAttribute("value")==4){
                    console.log(e.getAttribute("value"))
                    arr[0].four="Ofilled"
                }else if(e.getAttribute("value")==5){
                    console.log(e.getAttribute("value"))
                    arr[0].five="Ofilled"
                }else if(e.getAttribute("value")==6){
                    console.log(e.getAttribute("value"))
                    arr[0].six="Ofilled"
                }else if(e.getAttribute("value")==7){
                    console.log(e.getAttribute("value"))
                  arr[0].seven="Ofilled"
                }else if(e.getAttribute("value")==8){
                    console.log(e.getAttribute("value"))
                    arr[0].eight="Ofilled"
                }else if(e.getAttribute("value")==9){
                    console.log(e.getAttribute("value"))
                   arr[0].nine="Ofilled"
                }
            }else{
                e.innerHTML="X"
                e.classList.add("green")
                if(e.getAttribute("value")==1){
                    console.log(e.getAttribute("value"))
                    arr[0].one="Xfilled"
                }else if(e.getAttribute("value")==2){
                    console.log(e.getAttribute("value"))
                    arr[0].two="Xfilled"
                }else if(e.getAttribute("value")==3){
                    console.log(e.getAttribute("value"))
                    arr[0].three="Xfilled"
                }else if(e.getAttribute("value")==4){
                    console.log(e.getAttribute("value"))
                    arr[0].four="Xfilled"
                }else if(e.getAttribute("value")==5){
                    console.log(e.getAttribute("value"))
                    arr[0].five="Xfilled"
                }else if(e.getAttribute("value")==6){
                    console.log(e.getAttribute("value"))
                    arr[0].six="Xfilled"
                }else if(e.getAttribute("value")==7){
                    console.log(e.getAttribute("value"))
                    arr[0].seven="Xfilled"
                }else if(e.getAttribute("value")==8){
                    console.log(e.getAttribute("value"))
                    arr[0].eight="Xfilled"
                }else if(e.getAttribute("value")==9){
                    console.log(e.getAttribute("value"))
                    arr[0].nine="Xfilled"
                }
            }
            
        }else{
            alert("Please select different box")
            i=--i
        }
            
            
        var win
        console.log(i)
        // /////////////////////HORIZONTAL STRAIGHT RELATION ////////////////////////////////////
        // First Condition
        if(arr[0].one=="Xfilled" && arr[0].two=="Xfilled" && arr[0].three=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].one=="Ofilled" && arr[0].two=="Ofilled" && arr[0].three=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        } 
        
        // Second Condition
        if(arr[0].four=="Xfilled" && arr[0].five=="Xfilled" && arr[0].six=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].four=="Ofilled" && arr[0].five=="Ofilled" && arr[0].six=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        }

        // Third Condition
        if(arr[0].seven=="Xfilled" && arr[0].eight=="Xfilled" && arr[0].nine=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].seven=="Ofilled" && arr[0].eight=="Ofilled" && arr[0].nine=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        }
        
        // ///////////////////// DIAGONAL RELATION ////////////////////////////////////
        if(arr[0].one=="Xfilled" && arr[0].five=="Xfilled" && arr[0].nine=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].one=="Ofilled" && arr[0].five=="Ofilled" && arr[0].nine=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        } 
        
        // ///////////////////// DIAGONAL RELATION TWO ////////////////////////////////////
        if(arr[0].three=="Xfilled" && arr[0].five=="Xfilled" && arr[0].seven=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].three=="Ofilled" && arr[0].five=="Ofilled" && arr[0].seven=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        } 

        // /////////////////////VERTICAL STRAIGHT RELATION ////////////////////////////////////
        // First Condition
        if(arr[0].one=="Xfilled" && arr[0].four=="Xfilled" && arr[0].seven=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].one=="Ofilled" && arr[0].four=="Ofilled" && arr[0].seven=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        } 
        
        // Second Condition
        if(arr[0].two=="Xfilled" && arr[0].five=="Xfilled" && arr[0].eight=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].two=="Ofilled" && arr[0].five=="Ofilled" && arr[0].eight=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        }

        // Third Condition
        if(arr[0].three=="Xfilled" && arr[0].six=="Xfilled" && arr[0].nine=="Xfilled"){
            alert("Team X is winner")
            win="win"
            location.reload()
        }else if(arr[0].three=="Ofilled" && arr[0].six=="Ofilled" && arr[0].nine=="Ofilled"){
            alert("Team O is winner")
            win="win"
            location.reload()
        }
        if(i>=9){
            if(win=="win"){
                location.reload()
            }else{
                alert("Match Drawn")
                location.reload()
            }
        }

    })
})
