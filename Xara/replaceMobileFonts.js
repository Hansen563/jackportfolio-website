function repMobFonts(){if(navigator.userAgent.match(/Android/i)){var el = document.getElementsByTagName("*");for ( var i = 0; i < el.length; i++ ){var ff=window.getComputedStyle(el[i],null).getPropertyValue("font-family");if(ff=="Arial" || ff=="'Arial'" || ff=='"Arial"'){el[i].style.fontFamily='Arimo';}if(ff=="Courier New" || ff=="'Courier New'" || ff=='"Courier New"'){el[i].style.fontFamily='Cousine';}if(ff=="Times New Roman" || ff=="'Times New Roman'" || ff=='"Times New Roman"'){el[i].style.fontFamily='Tinos';}}}}