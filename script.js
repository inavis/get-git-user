let content = document.querySelector(".content");
// let searchbar = document.querySelector(".searchbar");



let searchbar = document.querySelector(".search");

function search(){
    let value = searchbar.value.trim();
    if(value==""){

    }else{
        api(value)
    }
}

function api(value){
   console.log(value)
    
        let url="https://api.github.com/users/";
        url+=value;
        console.log(url);
    
    fetch(url)
    .then((res)=>res.json())
    .then(function(obj){
        console.log(obj);

        content.innerHTML="";
        console.log(obj.avatar_url)

        content.innerHTML=`
        
        <div class="profile">
            <img class="avatar" src=${obj.avatar_url}/>
            <br><br>
            <div class="username">
                 ${obj.login}  
            </div>
            <div class="loginname">
                
            </div>
            <div class="bio">
               
            </div>
        </div>

        <br><br>

        <div class=" text-center">
             <div class="follow  text-center">
                Followers
                <br>
                <div class="number">${obj.followers}</div>
            </div>
            <div class="follow  text-center">
                Following
                <br>
                <div class="number">${obj.following}</div>
           </div>
           <div class="follow  text-center">
                Public Repos
                <br>
                <div class="number">${obj.public_repos}</div>
            </div>
            <div class="follow  text-center">
                Public gists
                <br>
                <div class="number">${obj.public_gists}</div>
            </div>
        </div>

        <br><br>

      
     
     <div class="panel">
         <div class="p-3">
             <i class="fas fa-map-marker-alt icon"></i> <br>
             <div class="pl-3 text">${obj.location}</div>
        </div>
        <div class="p-3">
        <i class="fas fa-briefcase icon"></i><br>
         <div class="pl-3 text">${obj.company}</div>
        </div>
    </div>

    <div class="panel">
        <div class="p-3">
            <i class="fas fa-envelope icon"></i> <br>
             <div class="pl-3 text">${obj.email}</div>
        </div>
        <div class="p-3">
        <i class="fas fa-search-dollar icon"></i> <br>
        <div class="pl-3 text-center">${obj.hireable}</div>
        <div>
        <br>
        <div class="p-3">
        <i class="fas fa-blog icon"></i> <br>
        <div class="pl-3 text-center">${obj.blog}</div>
        </div>
    </div>

    
    
`

        if(obj.bio!=null){
            document.querySelector('.bio').innerHTML=obj.bio
        }
        if(obj.name!=null){
            document.querySelector('.loginname').innerHTML=obj.name
        }

        if(obj.public_repos>0){

            fetch(obj.repos_url)
            .then((res)=>res.json())
            .then((data)=>{
        
                content.innerHTML+=`
                <div class="panel repos text-center">
                <div class="last-title">PUBLIC REPOSITORIES</div>
                <br>
            
                </div>
                `
               for(x of data){
                  // console.log(x.name,x.html_url);
                   document.querySelector(".repos").innerHTML+=`
                   <div class="card">
                    <a href=${x.html_url} target="blank">${x.name}</a> <br>
                   </div>
                   
                   `
               }
            })
            .catch(err=>console.log(err))
        
        }

        if(obj.followers>0){
            fetch(obj.followers_url)
            .then((res)=>res.json())
            .then((data)=>{
                content.innerHTML+=`
                <div class="panel follower-list">
                <div class="last-title">FOLLOWERS</div>
                <br>
                <br>
                </div`
                for(x of data){
                    //console.log(x.login,x.url)
                    
                    document.querySelector(".follower-list").innerHTML+=`
                    <div class="card">
                    <a href=${x.html_url} target="blank">
                    <img src="${x.avatar_url}" class=""/>
                    <div><a href=${x.html_url} target="blank">${x.login}</a></div>
                    </a>
                    </div>
                    `
                }
            })
        }

 
        
    })
    .catch((err)=>console.log(err))

   searchbar.value="";
    

}





//





// //GITHUB
// let btn = document.getElementById("btn")

// btn.addEventListener("click",  async function(){
//     // alert("clicked")
//     try{
//         //get search term
//         let search = document.getElementById("search").value;

//         //appending search term to api  url
//         let url="https://api.github.com/users/";
//         url+=search;
//         console.log(url);

//         //get data from
//         let res = await fetch(url);
//         let obj = await res.json();
//         let profilepicurl =obj.avatar_url;
//         let type =obj.type;
//         let blog = obj.blog;
//         let email=  obj.email;
//         let hireable = obj.hireable;
//         let twitter = obj.twitter_username
//         let publicrepos = obj.public_repos;
//         let publicgists = obj.public_gists;
//         let followers = obj.followers;
//         let following = obj.following;
//         let followersdetails = obj.followers_url; //need to fetch again from given url
//         let subscription = obj.subscriptions_url; //need to fetch again from given url
//         let createdtime = obj.created_at;


//         console.log(following);
        
//     }
//     catch(err){
//         console.log(err)
//     }
// });


