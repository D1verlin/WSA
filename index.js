function setup(){
    createCanvas(windowWidth, windowHeight);
  }
  function draw(){
    background(150);
    noStroke();
    for(let i = 0; i<14000; i++){
      rect(random(width), random(height), 2, 2);
    }
  }

Drivers_List = [
    // {name:"",link:"",theme:"Drivers"},
    {name:"NVIDIA Drivers",link:"https://www.nvidia.com/download/index.aspx?lang=en",theme:"Drivers"},
    {name:"Canon Drivers",link:"https://www.canon-europe.com/support/consumer_products/products/fax__multifunctionals/inkjet/pixma_g_series/pixma_g3415.html?type=download&language=en&os=windows%2011",theme:"Drivers"},
    {name:"Lenovo Drivers",link:"https://pcsupport.lenovo.com/us/ru/products/laptops-and-netbooks/legion-series/legion-5-15arh05/downloads/driver-list/",theme:"Drivers"},
    {name:"AMD Drivers",link:"https://www.amd.com/en/support",theme:"Drivers"},
];

Libraries_List = [
  // {name:"",link:"",theme:"Libraries"},
  {name:"Git",link:"https://git-scm.com/downloads",theme:"Libraries"},
  {name:"Git LFS",link:"https://git-lfs.com/",theme:"Libraries"},
  {name:"Java",link:"https://www.oracle.com/cis/java/technologies/downloads/",theme:"Libraries"},
  {name:"Python",link:"https://www.python.org/downloads/",theme:"Libraries"},
  {name:"Node js",link:"https://nodejs.org/en/download",theme:"Libraries"},
  {name:".NET",link:"https://dotnet.microsoft.com/en-us/",theme:"Libraries"},
  {name:"ADB",link:"https://4pda.to/forum/index.php?showtopic=383300&st=14640#entry116957695",theme:"Libraries"},
];

Software_List = [
  // {name:"",link:"",description:"",theme:"Software"},
  {name:"Photoshop",link:"https://repack.me/software/repacks/multimedia/618-adobe-photoshop-2023.html",theme:"Software"},
  {name:"DeepL",link:"https://www.deepl.com/ru/app/",theme:"Software"},
  {name:"Visual Studio Code",link:"https://code.visualstudio.com/download",theme:"Software"},
  {name:"Discord",link:"https://discord.com/download",theme:"Software"},
  {name:"Figma",link:"https://www.figma.com/downloads/",theme:"Software"},
  {name:"Telegram",link:"https://desktop.telegram.org/",theme:"Software"},
  {name:"Spotify",link:"https://github.com/amd64fox/SpotX",theme:"Software"},
  {name:"Qbittorrent",link:"https://www.qbittorrent.org/download",theme:"Software"},
  {name:"1.1.1.1",link:"https://1.1.1.1/",theme:"Software"},
  {name:"Office pack",link:"https://msguides.com/download-microsoft-office-windows-os",theme:"Software"},
  {name:"Sublime text",link:"https://www.sublimetext.com/download",theme:"Software"},
  {name:"Picasa",link:"https://picasa.ru.uptodown.com/windows",theme:"Software"},
  {name:"Steam",link:"https://store.steampowered.com/about/",theme:"Software"},
  {name:"ShareX",link:"https://getsharex.com/downloads",theme:"Software"},
  {name:"Google drive",link:"https://www.google.com/drive/download/",theme:"Software"},
  {name:"QuickLook",link:"https://github.com/QL-Win/QuickLook",theme:"Software"},
  {name:"Windows Terminal",link:"https://github.com/microsoft/terminal",theme:"Software"},
  {name:"7-Zip",link:"https://www.7-zip.org/download.html",theme:"Software"},
  {name:"Audacity",link:"https://www.audacityteam.org/download/",theme:"Software"},
  {name:"DaVinci Resolve",link:"https://www.blackmagicdesign.com/products/davinciresolve",theme:"Software"},
  {name:"EarTrumpet",link:"https://eartrumpet.app/",theme:"Software"},
  {name:"Everything",link:"https://www.voidtools.com/ru-ru/downloads/",theme:"Software"},
  {name:"File Converter",link:"https://file-converter.org/",theme:"Software"},
  {name:"LocalSend",link:"https://localsend.org/#/download",theme:"Software"},
  {name:"Notepads",link:"https://github.com/0x7c13/Notepads",theme:"Software"},
  {name:"Radmin VPN",link:"https://www.radmin-vpn.com/EN/",theme:"Software"},
  {name:"Sublime Merge",link:"https://www.sublimemerge.com/download",theme:"Software"},
  {name:"Upscayl",link:"https://github.com/upscayl/upscayl",theme:"Software"},
  {name:"VLC",link:"https://www.videolan.org/vlc/index.en.html",theme:"Software"},
  {name:"WO Mic Client",link:"https://wo-mic.ru/wo-mic-for-pc/",theme:"Software"},
  {name:"Сканер",link:"https://apps.microsoft.com/store/detail/%D1%81%D0%BA%D0%B0%D0%BD%D0%B5%D1%80-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D0%B5-%D0%B8-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5-%D1%81%D0%BA%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2/9N438MZHD3ZF?hl=ru-by&gl=by",theme:"Software"},

];

Optimization_List = [
  // {name:"",link:"",theme:"Optimization"},
  {name:"Sophia Script",link:"https://github.com/Sophia-Community/SophiApp",theme:"Optimization"},
  {name:"MS guide",link:"https://msguides.com/",theme:"Optimization"},
];

Design_List = [
  // {name:"",link:"",theme:"Design"},
  {name:"Deviant Art",link:"https://www.deviantart.com/",theme:"Design"},
  {name:"7Themes",link:"https://7themes.su/",theme:"Design"},
];

function GenerateList(name_list) {
  const lists = {
    Drivers_List: window.Drivers_List,
    Libraries_List: window.Libraries_List,
    Software_List: window.Software_List,
    Optimization_List: window.Optimization_List,
    Design_List: window.Design_List,
  };
  
  let mass;
  if (name_list === "All") {
    mass = Object.values(lists).reduce((acc, curr) => acc.concat(curr), []);
  } else {
    mass = lists[name_list];
  }
  
  document.querySelector('.main').innerHTML = '';
  for (var i = 0; i < mass.length; i++) {
    let a = document.createElement("a");
    a.classList = "link-List";    
    a.href = mass[i].link;
    a.target = "_blank";
    let nav = document.createElement("nav");
    nav.classList = "dot";
    let h3 = document.createElement("h3");
    h3.innerHTML = mass[i].name;
    let div = document.createElement("div");
    div.classList = "top-head";
    if (mass[i].theme  == "Drivers") {
      a.setAttribute("id","Drivers-border");
      nav.setAttribute("id","Drivers-dot");
    } else if (mass[i].theme  == "Libraries") {
      a.setAttribute("id","Libraries-border");
      nav.setAttribute("id","Libraries-dot");
    } else if (mass[i].theme  == "Software") {
      a.setAttribute("id","Software-border");
      nav.setAttribute("id","Software-dot");
    } else if (mass[i].theme  == "Optimization") {
      a.setAttribute("id","Optimization-border");
      nav.setAttribute("id","Optimization-dot");
    } else if (mass[i].theme  == "Design") {
      a.setAttribute("id","Design-border");
      nav.setAttribute("id","Design-dot");
    }
    let main = document.querySelector(".main");
    main.append(a);
    a.append(div);
    div.append(h3);
    div.prepend(nav);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  GenerateList("All");
});


function changeTextColor() {
  const colors = ['#DA8CFF', '#FF8C8C', '#8CD6FF', '#FF8CDF', '#95FF8C'];
  let currentColorIndex = 0;
  const intervalId = setInterval(() => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const color = colors[currentColorIndex];
    document.querySelector("#All_animation").style.borderColor = color;
    document.querySelector("#All_animation").style.color = color;
  }, 1000);
  return intervalId;
}

function handleHover() {
  const intervalId = changeTextColor();
  document.querySelector("#All_animation").style.transitionDelay = '0s'; /* убираем задержку в начале анимации */
  document.querySelector("#All_animation").addEventListener('mouseout', () => {
    clearInterval(intervalId);
    document.querySelector("#All_animation").style.transitionDelay = '1s'; /* возвращаем задержку в конце анимации */
  });
}
document.querySelector("#All_animation").addEventListener('mouseover', handleHover);

