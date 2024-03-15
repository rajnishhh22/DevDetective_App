

const inputContainer = document.querySelector("[input-Container]")
const userInput = document.querySelector("[user-Input]")

// const searchContainer = document.querySelector("[search-Container]")
const searchButton = document.querySelector("[search-button]")






searchButton.addEventListener("click", ()=>{
  if(userInput.value) {
    const github_username = userInput.value;
    searchProfile(github_username)
  }
    else{
     alert("Enter username in input filed")
    }

  }
  )

async function searchProfile(github_username){
  try{
    const response = await fetch(`https://api.github.com/users/${github_username}`)
    console.log("Response catch")
    const data =await response.json()
    console.log(data)
    
     
    if(!data?.login){
      throw(error)
    }
    renderinfo(data);

  }
  catch(error){
    alert("No such Username is Present");
    console.log(error)
    
  }
}

async function renderinfo(data){
    const profileName= document.querySelector("[ProfileName]")
    const userName = document.querySelector("[userName]")
    const date = document.querySelector("[join-Date]")
    const avatar = document.querySelector("[avatar]")
    const aboutUser = document.querySelector("[about-user]")
    const userRepo = document.querySelector("[Repos-count]")
    const followers = document.querySelector("[followers-count]")
    const following = document.querySelector("[following-count]")

    const loc = document.querySelector("[user-Location]")
    const blog = document.querySelector("[user-websiteLink]")
    const twitter = document.querySelector("[user-twitter]")
    const company = document.querySelector("[user-company]");

    if(data?.avatar_url){
      avatar.src = `${data?.avatar_url}`
    }
    else{
      avatar.src = ""
    }
  
    userName.innerText = `@${data?.login}`
    userName.setAttribute("href",`https://github.com/${data?.login}`)
    profileName.innerText = `${data?.name}`
    let dt =  new Date(`${data?.created_at}`)
    date.innerText = `Joined  ${dt.getDate()} / ${(dt.getMonth() + 1)} / ${dt.getFullYear()}`;
    if(data?.bio){
      aboutUser.innerText = `${data?.bio}`
    }
    else{
      aboutUser.innerText = 'The Profile has no bio'
    }
    
    userRepo.innerText = `${data?.public_repos}`
    followers.innerText = `${data?.followers}`
    following.innerText = `${data?.following}`
    loc.innerText = `${data?.location}`
    if(data?.blog !== ""){
      blog.innerText = `${data?.blog}`
      blog.setAttribute("href",`https:${data?.blog}.bio.link`)
      console.log(blog)
    }
    else{
      blog.innerText = "Not Available"
    }
    
    if(data?.twitter_username !== null){
      twitter.innerText = `${data?.twitter_username}`
      twitter.setAttribute("href",`${data?.twitter_username}`)
      console.log(twitter)
    }
    else{
      twitter.innerText="Not Available"
      twitter.setAttribute("href","#")
      console.log(twitter)
    }
    
   
    company.innerText = `${data?.company}`

  
}




// ColorMode
  const wrapper = document.querySelector("[wrapper]")


  const lightDarkMode_cont = document.querySelector("[lightDarkMode]");
  const modeDes = document.querySelector("[mode-description]");
  const modeSymbol = document.querySelector("[mode-Symbol");
 
  lightDarkMode_cont.addEventListener("click",()=>{
    console.log("Event listen")
    const currentMode = modeDes.innerText;
    if(currentMode == "LIGHT"){
      console.log("Entered")
      // then we have to on light mode and change des to dark and moonsymbol
      modeDes.innerText = "DARK";
      console.log("modeDes")
      modeSymbol.src = "./assests/images/moon-icon.svg"


      // add active class to switch in light mode
    
    }
    else{
      modeDes.innerText = "LIGHT";
      modeSymbol.src = "./assests/images/sun-icon.svg"
      // remove active class to switch in dark mode
    }
    
  })


searchProfile("rajnishhh22")