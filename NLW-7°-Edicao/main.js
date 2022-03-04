

const linksSocialMedia = {
   gituhub: 'Lfeli',
   youtube: '',
   facebook: '',
   instagram: '',
   twitter: ''
}

function changeSocialMediaLinks() {

   for(let li of socialLinks.children){
      const social = li.getAttribute('class');

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
   }
}

changeSocialMediaLinks();

function getGithubProfileInfos(){
   const url = `https://api.github.com/users/${linksSocialMedia.gituhub}`

   fetch(url)
   .then(response => response.json())
   .then(data => {
      userAvatar.src = data.avatar_url;
      userName.textContent = data.name;
      userGithub.href = data.html_url;
      userDescripition.textContent = data.bio;
      userLogin.textContent = data.login;

   })
}

getGithubProfileInfos();