const Verify= (function () {
  "use strict";

  function Constructor(el,regExp,successClass,errorClass) {

	 let elements = document.querySelectorAll(el)
	 
		
		elements.forEach(el=>{
			el.addEventListener('keyup', ()=>{
				if(regExp.test(el.value)){
					el.classList.remove(errorClass)
					el.classList.add(successClass)
				}else{
					el.classList.remove(successClass)
					el.classList.add(errorClass)
				}

			})
			
		})
		
 
  }

  return function (el,regExp,successClass,errorClass) {
    return new Constructor(el,regExp,successClass,errorClass);
  };
  	
})();
